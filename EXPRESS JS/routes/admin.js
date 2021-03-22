const express = require('express')

const router = express.Router();
const app = express();

//use it with either post or get as in like app.get or app.post to parse
router.get('/add-food',(req,res,next) =>{
    res.send('<form action="/admin/add-food" method="POST"><input type="text" name="title"><button type="submit">Add Food</button></form>');
});

//same path can be used for different method
router.post('/add-food',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;