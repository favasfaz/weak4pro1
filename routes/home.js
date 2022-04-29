// const src = require('debug');
var db=require('../config/connection')

var express = require('express');
// const res = require('express/lib/response');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')


let products=[{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
},
{
  name:"Galexy M52",
  category:"mobile",
  price:48884,
  image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
}
]

/* GET users listing. */
router.get('/', function(req, res) {
 res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  var logged=req.session.loggedIn
 res.render('home',{products,logged})
});

router.get('/logout',(req,res)=>{
  res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  req.session.destroy()
  res.redirect('/')

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
          res.render('home',{products,logged:true})
         })
      }
    })
   
  })


module.exports = router;
