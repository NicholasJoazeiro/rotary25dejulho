export async function onRequestGet({ env, request }) {
  const url = new URL(request.url);
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: `${url.origin}/api/callback`,
  });
  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params}`,
    302
  );
}
