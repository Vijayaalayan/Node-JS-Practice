const express = require('express')

const router = express.Router();
const app = express();


router.get('/',(req,res,next)=>{
    res.send('<h1>ExpressJS</h1>')
});

module.exports = router;