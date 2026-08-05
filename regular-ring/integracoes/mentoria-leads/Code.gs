// Google Apps Script Web App: recebe os leads do formulário /mentoria e
// grava numa aba "Leads" da planilha vinculada. Ver README.md pra deploy.

const SHEET_NAME = 'Leads';
// Deixe igual a PUBLIC_LEADS_TOKEN no .env, ou deixe as duas em branco.
// Isso NÃO é autenticação — o valor viaja no bundle público do site.
const SHARED_TOKEN = '';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && payload.chave !== SHARED_TOKEN) {
      // Token não bate: não grava, mas responde OK pra não ensinar um bot
      // a distinguir sucesso de rejeição.
      return jsonResponse({ ok: true });
    }

    const sheet = getOrCreateSheet();
    sheet.appendRow([
      new Date(),
      payload.nome || '',
      payload.email || '',
      payload.trilha || '',
      payload.contexto || '',
      payload.origem || '',
      payload.campanha || '',
    ]);

    notifyByEmail(payload);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['data', 'nome', 'email', 'trilha', 'contexto', 'origem', 'campanha']);
  }
  return sheet;
}

function notifyByEmail(payload) {
  const owner = Session.getEffectiveUser().getEmail();
  if (!owner) return;
  MailApp.sendEmail({
    to: owner,
    subject: `Novo lead de mentoria — ${payload.trilha || 'sem trilha'}`,
    body: [
      `Nome: ${payload.nome}`,
      `E-mail: ${payload.email}`,
      `Trilha: ${payload.trilha}`,
      `Origem: ${payload.origem}`,
      '',
      payload.contexto,
    ].join('\n'),
  });
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
