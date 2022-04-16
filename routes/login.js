var express = require('express');
var router = express.Router();

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
  res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0'); 
  if(pass.password==req.body.password){
    req.session.loggedIn=true
    req.session.user=req.body
    console.log(req.body);
    res.redirect('/home')
  }else{
    req.session.loggErr=true
    res.redirect('/')
  }

})


module.exports = router;
