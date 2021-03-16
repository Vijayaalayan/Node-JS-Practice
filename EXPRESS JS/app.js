const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// app.use((req,res,next)=>{
//     console.log("In First Middleware");
//     // If next function is not called the use function dies and it'll not pass along.
//     next();
// });

// app.use('/',(req,res,next)=>{
//     console.log('This always runs');
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-food',(req,res,next) =>{
    res.send('<form action="/food" method="POST"><input type="text" name="title"><button type="submit">Add Food</button></form>');
});

app.use('/food',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>ExpressJS</h1>')
});

app.listen(3000);
