export default {
  async fetch(request, env, ctx) {
    const dt = new Date();
    const version = env.VERSION || '6';
    return new Response(
      JSON.stringify({ message: 'Hello from Cloudflare', dt: dt.toISOString(), version }),
      { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    );
  },
};
