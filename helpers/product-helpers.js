var db = require('../config/connection')
var collection = require('../config/collections')
module.exports = {
    addProduct: (product,callback)=>{
        // console.log(product);
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            callback(data.ops[0]._id)
        })   
    },
    // getAllProducts: (callback)=> {
    //     var data = db.get().collection(collection.PRODUCT_COLLECTION).find().toArray().then((data)=>{
    //         // console.log(data);
    //         callback(data)
    //     })
    // }
    getAllProducts : ()=>{
        return new Promise(async(resolve,reject)=>{
            var products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
                resolve(products)
        })
    }
}