exports.handler = async function (event, context) {
  // Standard Netlify Function (AWS Lambda-like) handler
  const dt = new Date();
  // In Netlify Functions, environment variables are available on process.env
  const version = process.env.VERSION || '6';

  const data = {
    message: 'Hello from Netlify Function',
    dt: dt.toISOString(),
    version,
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };
};
