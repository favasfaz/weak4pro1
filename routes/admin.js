
const { reject } = require('bcrypt/promises');
var express = require('express');
var router = express.Router();
var userHelpers= require('../helpers/user-helpers')
var db=require('../config/connection')
var objectId = require('mongodb').ObjectId

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
    req.session.admins=req.body
    req.session.loggedIn=true
userHelpers.userDetails().then((result)=>{
res.render('for-admin/adminPanel',{'result':result,admin:true})
})
    
}
else{
    adminErr=true
    res.render('for-admin/adminLogin',{'Err':adminErr})
}
})
 
router.get('/deleteProduct/:id',(req,res)=>{
    let productId=req.params.id
    userHelpers.deleteProducts(productId).then(()=>{
        userHelpers.userDetails().then((result)=>{
            res.render('for-admin/adminPanel',{'result':result})
        })
       
    })
})
  


module.exports = router;
