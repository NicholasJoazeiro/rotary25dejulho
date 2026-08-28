export async function onRequestGet({ env, request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token, error } = await tokenRes.json();

  const msg = error
    ? `authorization:github:error:${error}`
    : `authorization:github:success:${JSON.stringify({ token: access_token, provider: 'github' })}`;

  return new Response(
    `<!doctype html><html><body><script>
      window.opener && window.opener.postMessage(${JSON.stringify(msg)}, '*');
      window.close();
    </script></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
