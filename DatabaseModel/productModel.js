const mongoose = require('mongoose')

const productModel = mongoose.Schema({
      category : {
        type: String,
        Required:true
      },
      itemname:{
         type:String,
         Required:true,
      },
      eta:{
        type:String,
        Required:true
      }
})

module.exports = mongoose.model('product', productModel)