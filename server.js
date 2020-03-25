const http = require('http')

const hostname = process.env.hostname || '0.0.0.0' || '127.0.0.1'

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi, Welcome to the wonderful world of Annie Samarpitha Chandolu!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});