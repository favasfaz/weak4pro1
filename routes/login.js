//res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');

var express = require('express');
var db=require('../config/connection')
const { cookie } = require('express/lib/response');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')
const { findPerson } = require('../helpers/user-helpers');


const pass={
  password:1234
}


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
  console.log(req.body, "body");
 userHelpers.Aperson(req.body.email).then((result)=>{
      res.redirect('/home')
  }).catch(()=>{
    res.render('login')
  })

})
router.get('/signuppage',(req,res)=>{
  res.render('signup')
})
router.post('/register',(req,res)=>{
  res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  userHelpers.findPerson(req.body.Email,(result)=>{
    if(result){
      console.log('err');
      mailErr=true
      res.render('signup',{'mailErr':mailErr})
      mailErr=false
    }else{
      userHelpers.doSignup(req.body,(result)=>{
        console.log(result);
        res.redirect('/home')
       })
    }
  })
 
})

module.exports = router;
