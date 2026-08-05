// Cloudflare Pages Function. Lets mentoria.wesmarcal.com and wesmarcal.com
// share one Pages project/build: only the served document path changes by
// host, every asset request (/_astro/*, images, etc.) passes through
// untouched, so nothing 404s.
//
// Alternative with no code: a Cloudflare Transform Rule (URL Rewrite) with
// expression `http.host eq "mentoria.wesmarcal.com"` rewriting `/` to
// `/mentoria/`. See integracoes/mentoria-leads/README.md for when to prefer
// that route instead of this file.

interface PagesContext {
  request: Request;
  next: (input?: Request) => Promise<Response>;
}

export const onRequest = async ({ request, next }: PagesContext): Promise<Response> => {
  const url = new URL(request.url);

  if (url.hostname === 'mentoria.wesmarcal.com' && url.pathname === '/') {
    const rewritten = new URL(request.url);
    rewritten.pathname = '/mentoria/';
    return next(new Request(rewritten.toString(), request));
  }

  return next();
};
