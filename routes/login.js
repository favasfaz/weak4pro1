//res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');

var express = require('express');
var db=require('../config/connection')
const { cookie } = require('express/lib/response');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')
const { findPerson } = require('../helpers/user-helpers');


/* GET home page. */
router.get('/', function(req, res) {
  res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
if(req.session.loggedIn){
    res.redirect('/home')
  }else
 {
   res.render('login',{'loggErr':req.session.loggErr});
  req.session.loggErr=false
 }
});
router.post('/login',(req,res)=>{
  // res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
 userHelpers.Aperson(req.body.email).then((result)=>{
  req.session.user=req.body
   req.session.loggedIn=true
      res.redirect('/home')
  }).catch(()=>{
    loggErr=true
    res.render('login',{'loggErr':loggErr})
  })

})
router.get('/signuppage',(req,res)=>{
  res.render('signup')
})


module.exports = router;
