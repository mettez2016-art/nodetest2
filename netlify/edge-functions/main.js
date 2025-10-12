export default async (request, context) => {
  // Keep original logic: timestamp and version from environment
  const dt = new Date();
  // Netlify edge functions expose env vars on context.env
  const version = (context && context.env && context.env.VERSION) || '6';

  const data = {
    message: 'Hello from Netlify Edge Function',
    dt: dt.toISOString(),
    version,
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
