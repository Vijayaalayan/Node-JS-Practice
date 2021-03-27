const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin.js');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);
app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    res.status(404).render('404',{docTitle:'Page not found'})
})
app.listen(3000);
