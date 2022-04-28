
const { reject } = require('bcrypt/promises');
var express = require('express');
var router = express.Router();
var userHelpers= require('../helpers/user-helpers')
var db=require('../config/connection')

var admin={
password:5555
}

router.get('/', function(req, res) {
    if(req.session.loggedIn){
        userHelpers.userDetails().then((result)=>{
            res.render('for-admin/adminPanel',{'result':result,admin:true})
        })
       
    }else{
        res.render('for-admin/adminLogin')

    }
});
router.post('/logined',(req,res)=>{
if(admin.password==req.body.password){
    req.session.admin=req.body
    req.session.loggedIn=true
userHelpers.userDetails().then((result)=>{
res.render('for-admin/adminPanel',{'result':result})
})
    
}
else{
    adminErr=true
    res.render('for-admin/adminLogin',{'Err':adminErr})
}
})
 
  


module.exports = router;
