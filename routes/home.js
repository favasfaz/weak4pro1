const src = require('debug');
var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

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
router.get('/', function(req, res, next) {
  var logged=req.session.loggedIn
 res.render('home',{products,logged})
});

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')

})


module.exports = router;
