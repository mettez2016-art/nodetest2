export default (request, context) => {
	const dt = new Date();
	const version = context?.env?.VERSION || '6';

	const data = {
		message: 'Hello from Cloudflare',
		dt: dt.toISOString(),
		version
	};

	return new Response(JSON.stringify(data), {
		headers: { 'content-type': 'application/json' },
	});
};

export const config = { path: "/test" };