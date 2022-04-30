
// const { reject } = require('bcrypt/promises');
var express = require('express');
var router = express.Router();
var userHelpers= require('../helpers/user-helpers')
var db=require('../config/connection');
// const async = require('hbs/lib/async');
var objectId = require('mongodb').ObjectId

var admin={
    email:"favas@gmail.com",
password:5555
}

router.get('/', (req, res)=> {
    if(req.session.adminIn){
        res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
        userHelpers.userDetails().then((result)=>{
            res.render('for-admin/adminPanel',{'result':result,admin:true})
        })
       }else{
        res.render('for-admin/adminLogin')
 }
});
router.post('/logined',(req,res)=>{
if(admin.password==req.body.password&&admin.email==req.body.email){
    req.session.adminIn=true
    req.session.admin=req.body
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
        req.session.user=null
       res.redirect('/admin')
       
    })
})
  router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.render('for-admin/adminLogin')
  })

  router.get('/addUser',(req,res)=>{
      res.render('for-admin/add-user')
  })
  
  router.post('/userAdded',(req,res)=>{
    userHelpers.findPerson(req.body.Email,(result)=>{
        if(result){
          mailErr=true
          res.render('signup',{'mailErr':mailErr})
          mailErr=false
        }else{
          userHelpers.doSignup(req.body,(result)=>{
              res.redirect('/admin')
           })
        }
      })
     
  })
  router.get('/editUser/:id',async(req,res)=>{
      let product=await userHelpers.editUsers(req.params.id)
      console.log(product);
      res.render('for-admin/edit-user',{ 'product':product})
  })
  router.post('/edited/:id',(req,res)=>{
userHelpers.updateUser(req.params.id,req.body).then(()=>{
  res.redirect('/admin')
})
  })
  router.get('/block/:id',(req,res)=>{
let Id=req.params.id
console.log(Id);
    userHelpers.blockUser(req.params.id).then(()=>{
          res.redirect('/admin')
  })
  })
 
  router.get('/unblock/:id',(req,res)=>{
    let Id=req.params.id
    console.log(Id);
        userHelpers.unblockUser(req.params.id).then(()=>{
              res.redirect('/admin')
      })
      })
      

module.exports = router;
