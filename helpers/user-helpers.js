var db=require('../config/connection')
const bcrypt=require('bcrypt')
const async = require('hbs/lib/async')
// const { promise, reject } = require('bcrypt/promises')
// const { response } = require('../app')
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
            if(user1){
                if(user1.status=="true"){
                    resolve({status:true,msge:"sucess"})
                }else{
                    reject({status:false,msge:"error"})
                }
            }else{
                reject({status:false,msge:"error1"})
                console.log("user not exist");
            }
                
        })

    },
    userDetails:()=>{
        return new Promise(async(resolve,reject)=>{
            let userDetails=await db.get().collection('users').find().toArray()
            resolve(userDetails)
        })
    },
    deleteProducts:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('users').remove({_id:objectId(productId)}).then((response)=>{
                resolve(response)
            })
            
        })
    },
    editUsers:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('users').findOne({_id:objectId(productId)}).then((response)=>{
                resolve(response)
            })
            
        })
    },

    updateUser:(proid,prodetails)=>{
        return new Promise(async(resolve,reject)=>{
          await  db.get().collection('users').updateOne({_id:objectId(proid)},{
                $set:{Email:prodetails.Email,Name:prodetails.Name}
            })
            resolve()
        })
    },

    blockUser:(proid)=>{
        console.log(proid);
return new Promise(async(resolve,reject)=>{
    await  db.get().collection('users').updateOne({_id:objectId(proid)},{
        $set:{status:"false"}
    })
    resolve()
})
    },
    unblockUser:(proid)=>{
        console.log(proid);
return new Promise(async(resolve,reject)=>{
    await  db.get().collection('users').updateOne({_id:objectId(proid)},{
        $set:{status:"true"}
    })
    resolve()
})
    },
  
}