var db=require('../config/connection')
const bcrypt=require('bcrypt')
const async = require('hbs/lib/async')
const { promise } = require('bcrypt/promises')
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
            console.log(user1);
            user1 ? resolve(user1) : reject(user1);
        })
    }

}