const TIME_TRAP_MS = 2500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function syncTrackFromChips(card: HTMLElement) {
  const track = card.querySelector<HTMLSelectElement>('#reply-track');
  // Chips live in the letterhead, outside .reply-card — search the whole
  // letter, not just the card, for the radio group that drives this select.
  const letter = card.closest<HTMLElement>('.mentoria-letter') ?? document.body;
  const chips = letter.querySelectorAll<HTMLInputElement>('input[name="destinatario"]');
  if (!track || !chips.length) return;

  const applyChecked = () => {
    const checked = letter.querySelector<HTMLInputElement>('input[name="destinatario"]:checked');
    if (checked) track.value = checked.value;
  };

  applyChecked();
  chips.forEach((chip) => chip.addEventListener('change', applyChecked));
}

function setError(input: HTMLInputElement | HTMLTextAreaElement, message: string | null) {
  const errorEl = input.closest('.reply-card__field')?.querySelector<HTMLParagraphElement>('.reply-card__error');
  if (message) {
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }
  } else {
    input.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
  }
}

function initReplyForm(card: HTMLElement) {
  const form = card.querySelector<HTMLFormElement>('.reply-card__form');
  if (!form) return;

  syncTrackFromChips(card);

  const loadedAt = Date.now();
  const carregadoEm = form.querySelector<HTMLInputElement>('[data-field="carregadoEm"]');
  if (carregadoEm) carregadoEm.value = new Date(loadedAt).toISOString();

  const origem = form.querySelector<HTMLInputElement>('[data-field="origem"]');
  if (origem) origem.value = document.referrer || 'direto';

  const campanha = form.querySelector<HTMLInputElement>('[data-field="campanha"]');
  if (campanha) {
    const params = new URLSearchParams(window.location.search);
    const utm = ['utm_source', 'utm_medium', 'utm_campaign']
      .map((key) => params.get(key))
      .filter(Boolean)
      .join('/');
    campanha.value = utm;
  }

  const nameInput = form.querySelector<HTMLInputElement>('#reply-name');
  const emailInput = form.querySelector<HTMLInputElement>('#reply-email');
  const contextInput = form.querySelector<HTMLTextAreaElement>('#reply-context');
  const honeypot = form.querySelector<HTMLInputElement>('#reply-empresa');
  const submitBtn = form.querySelector<HTMLButtonElement>('.reply-card__submit');
  const mailtoLink = card.querySelector<HTMLAnchorElement>('[data-mailto]');
  const baseMailto = mailtoLink?.getAttribute('href') ?? '';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!nameInput || !emailInput || !contextInput) return;

    // Silent honeypot / time-trap discard: pretend success, send nothing.
    const tooFast = Date.now() - loadedAt < TIME_TRAP_MS;
    if ((honeypot && honeypot.value.trim() !== '') || tooFast) {
      card.dataset.state = 'success';
      const successBlock = card.querySelector<HTMLElement>('.reply-card__result--success');
      if (successBlock) successBlock.hidden = false;
      return;
    }

    let hasError = false;
    if (!nameInput.value.trim()) {
      setError(nameInput, 'me diz seu nome');
      hasError = true;
    } else {
      setError(nameInput, null);
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, 'preciso de um e-mail pra te responder');
      hasError = true;
    } else if (!EMAIL_PATTERN.test(emailInput.value.trim())) {
      setError(emailInput, 'esse e-mail não parece completo');
      hasError = true;
    } else {
      setError(emailInput, null);
    }

    if (!contextInput.value.trim()) {
      setError(contextInput, 'conta rapidinho onde você trava — é o que eu leio primeiro');
      hasError = true;
    } else {
      setError(contextInput, null);
    }

    if (hasError) {
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    const payload = {
      nome: nameInput.value.trim(),
      email: emailInput.value.trim(),
      trilha: (form.querySelector<HTMLSelectElement>('#reply-track'))?.value ?? '',
      contexto: contextInput.value.trim(),
      origem: origem?.value ?? 'direto',
      campanha: campanha?.value ?? '',
      enviadoEm: new Date().toISOString(),
      chave: import.meta.env.PUBLIC_LEADS_TOKEN ?? '',
    };

    const endpoint = form.dataset.endpoint;
    card.dataset.state = 'pending';
    if (submitBtn) submitBtn.disabled = true;

    try {
      if (!endpoint) throw new Error('missing endpoint');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`request failed: ${response.status}`);

      card.dataset.state = 'success';
      const successBlock = card.querySelector<HTMLElement>('.reply-card__result--success');
      if (successBlock) successBlock.hidden = false;
    } catch {
      card.dataset.state = 'error';
      if (mailtoLink) {
        const subject = encodeURIComponent('Mentoria — quero conversar');
        const body = encodeURIComponent(
          `Nome: ${payload.nome}\nE-mail: ${payload.email}\nTrilha: ${payload.trilha}\n\n${payload.contexto}`
        );
        mailtoLink.setAttribute('href', `${baseMailto}?subject=${subject}&body=${body}`);
      }
      const errorBlock = card.querySelector<HTMLElement>('.reply-card__result--error');
      if (errorBlock) errorBlock.hidden = false;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

function init() {
  document.querySelectorAll<HTMLElement>('[data-component="reply-card"]').forEach(initReplyForm);
}

document.addEventListener('astro:page-load', init);
