var db=require('../config/connection')
const bcrypt=require('bcrypt')
const async = require('hbs/lib/async')
const { promise, reject } = require('bcrypt/promises')
var objectId=require('mongodb').ObjectId
module.exports={
    doSignup:(userdata,callback)=>{
        return new Promise(async(res,rej)=>{
            userdata.password=await bcrypt.hash(userdata.password,10)
            db.get().collection('users').insertOne(userdata).then((data)=>{
               callback(data)
            })
        })
       
    },
    findPerson:(userdata,callback)=>{
        return new Promise(async(res,rej)=>{
           db.get().collection('users').findOne({Email:userdata}).then((data)=>{
                callback(data)
            })
        })
    },
    Aperson:(user)=>{
        console.log(user);
        return new Promise(async(resolve,reject)=>{
            let user1=await db.get().collection('users').findOne({Email:user});
            user1 ? resolve(user1) : reject(user1);
        })
    },
    userDetails:()=>{
        return new Promise(async(resolve,reject)=>{
            let userDetails=await db.get().collection('users').find().toArray()
            console.log(userDetails.Email);
            resolve(userDetails)
        })
    },
    deleteProducts:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('users').remove({_id:objectId(productId)}).then((response)=>{
                resolve(response)
            })
            
        })
    }
}