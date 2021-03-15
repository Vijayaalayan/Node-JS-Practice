const http = require('http')

const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log("In First Middleware");
    // If next function is not called the use function dies and it'll not pass along.
    next();
});

app.use((req,res,next)=>{
    console.log("In Second Middleware");
    res.send('<h1>ExpressJS</h1>')
});

const server = http.createServer(app);

server.listen(3000);