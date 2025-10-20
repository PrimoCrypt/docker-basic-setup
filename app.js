const http = require('http');
const PORT = process.env.PORT || 8170;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Dockerized Node App!\n');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
