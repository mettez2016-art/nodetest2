export default function handler(req, res) {
  const dt = new Date();
  const version = process.env.VERSION || '6';
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    message: 'Hello from nodejs',
    dt: dt.toISOString(),
    version
  });
}
// console.log(`[${Date.now()}] Script start`);
// const http = require('http');
// console.log(`[${Date.now()}] 'http' loaded`);
// const server = http.createServer((req, res) => {
//   const dt = new Date();
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   let version = process.env.VERSION || '6';
//   // console.log(`[${Date.now()}] Request received: ${req.method} ${req.url} from ${req.socket.remoteAddress}`);
//   res.end(`{"message": "Hello from nodejs", "dt": "${dt.toISOString()}", "version": "${version}"}`);
// });
// console.log(`[${Date.now()}] Server created`);
// server.listen(3000, '0.0.0.0', () => {
//   console.log(`[${Date.now()}] Server listening callback`);
//   console.log(`[${Date.now()}] Server running on 0.0.0.0:3000`);
// });
