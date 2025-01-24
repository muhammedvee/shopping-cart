var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')


/* GET home page. */
router.get('/', function(req, res, next) {
  // var data = productHelper.viewProducts()
  // productHelper.getAllProducts((products)=>{   
  //   res.render('index', { products,admin:true});
  // })  
  productHelper.getAllProducts().then((products)=>{
    res.render('user/view-products', { products,admin:true});
  })

});

module.exports = router;
