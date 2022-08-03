const http=require('http');
const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hi, im vishwa');
})

server.listen(port, hostname,()=>console.log(`vishwa this is so simple, do something more interesting, BTW this is running at http://${hostname}:${port}`));