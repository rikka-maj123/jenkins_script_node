const http = require('http');


const hostname = '0.0.0.0';
const port = 3000;

//  HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // response body 
    res.end('This is nodejs file deployed from Jenkinsfile after change\n');
});


server.listen(port, hostname, () => {
    //console.log(`Server running at http://${hostname}:${port}/`);
});
