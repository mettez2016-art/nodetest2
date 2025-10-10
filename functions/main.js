export async function onRequest(context) {
  const dt = new Date();
  const version = context.env.VERSION || '6';

  const data = {
    message: 'Hello from Cloudflare',
    dt: dt.toISOString(),
    version
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
