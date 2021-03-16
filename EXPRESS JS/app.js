const express = require('express')

const app = express();

// app.use((req,res,next)=>{
//     console.log("In First Middleware");
//     // If next function is not called the use function dies and it'll not pass along.
//     next();
// });

app.use('/',(req,res,next)=>{
    console.log('This always runs');
    next();
});

app.use('/add-page',(req,res,next) =>{
    res.send('Add Page');
});

app.use('/',(req,res,next)=>{
    console.log("In Second Middleware");
    res.send('<h1>ExpressJS</h1>')
});

app.listen(3000);
