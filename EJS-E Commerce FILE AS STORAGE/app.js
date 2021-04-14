const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const expressHbs = require('express-handlebars');

const app = express();

// Only for handlebars
// app.engine('hbs',expressHbs({layoutsDir: 'views/layouts/', defaultLayout:'main-layouts.hbs'}));
// 
app.set('view engine','ejs');
// app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin.js');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);
app.use(errorController.get404Page)
app.listen(3000);
