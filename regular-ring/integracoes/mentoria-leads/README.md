# Captação de leads — /mentoria

O formulário do P.S. (`ReplyCard.astro`) faz um POST client-side direto pra
`PUBLIC_LEADS_ENDPOINT`. Não existe backend no repo — o site é estático — então
esse endpoint pode ser tanto um Google Apps Script Web App quanto um webhook
do Make ou n8n. A implementação do formulário não muda entre as duas opções.

O POST é `Content-Type: text/plain;charset=utf-8` com corpo JSON — de
propósito, pra ser uma "simple request" e não disparar preflight CORS (que o
Apps Script não responde de forma confiável).

Payload enviado:

```json
{
  "nome": "string",
  "email": "string",
  "trilha": "pd-jr | pd-pleno | sd-jr | sd-pleno",
  "contexto": "string",
  "origem": "referrer ou 'direto'",
  "campanha": "utm_source/utm_medium/utm_campaign, se vierem na URL",
  "enviadoEm": "ISO 8601",
  "chave": "PUBLIC_LEADS_TOKEN, se configurado — filtro de bot, não autenticação"
}
```

## Opção A — Google Apps Script (planilha direta)

1. Crie uma planilha nova no Google Sheets (ex: "Leads — Mentoria").
2. Extensões → Apps Script. Apague o conteúdo padrão e cole `Code.gs` deste
   diretório.
3. Se for usar `PUBLIC_LEADS_TOKEN`, defina o mesmo valor na constante
   `SHARED_TOKEN` no topo do `Code.gs`.
4. Implantar → Nova implantação → tipo **App da Web**.
   - Executar como: **Eu** (sua conta).
   - Quem tem acesso: **Qualquer pessoa**.
5. Autorize as permissões pedidas (grava na planilha, envia e-mail).
6. Copie a URL do Web App (termina em `/exec`) e cole em
   `PUBLIC_LEADS_ENDPOINT` no `.env` (local) e nas variáveis de ambiente do
   projeto no Cloudflare Pages (produção).
7. A aba "Leads" é criada automaticamente no primeiro envio, com o cabeçalho
   `data, nome, email, trilha, contexto, origem, campanha`.
8. Toda submissão também dispara um e-mail de notificação pra sua própria
   conta Google (a que rodou o deploy).

Reimplantar depois de editar `Code.gs`: Implantar → Gerenciar implantações →
editar (ícone de lápis) → Nova versão → Implantar. A URL do `/exec` não muda.

## Opção B — Make.com ou n8n

Troque uma linha: aponte `PUBLIC_LEADS_ENDPOINT` pra URL do seu webhook
(Make: "Webhooks" → "Custom webhook"; n8n: nó "Webhook", método POST). O
corpo já chega como JSON — monte o módulo/nó seguinte pra escrever numa
planilha do Google Sheets (Make e n8n têm integração nativa com Google
Sheets), sem precisar do `Code.gs`.

## Subdomínio (Cloudflare Pages)

`mentoria.wesmarcal.com` e `wesmarcal.com` compartilham o mesmo projeto e
build do Cloudflare Pages — só o path servido muda por host.

1. No projeto do Cloudflare Pages, adicione `mentoria.wesmarcal.com` como
   domínio customizado (Custom domains → Set up a custom domain).
2. `regular-ring/functions/_middleware.ts`, já versionado, reescreve
   `mentoria.wesmarcal.com/` → serve `/mentoria/` sem redirect visível e sem
   tocar em nenhum outro asset. Não precisa configurar nada além do passo 1.
3. Alternativa sem código, se preferir não usar Pages Functions: Regras →
   Transform Rules → Create rule → URL Rewrite, com expressão
   `http.host eq "mentoria.wesmarcal.com"` reescrevendo o path `/` para
   `/mentoria/`.

## O que fica pendente

- Criar a planilha (Opção A) ou o cenário/workflow (Opção B).
- Colar a URL do endpoint em `.env` e nas env vars do Cloudflare Pages.
- Adicionar o domínio customizado no passo 1 acima.
