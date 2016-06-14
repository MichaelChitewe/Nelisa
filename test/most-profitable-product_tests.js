var assert = require('assert');
var purchases = require('../most-profitable-product');

describe('list the most profitable product',function(){
it('return the most profitable product',function(){

var listPurchasesSorted = purchases.purchasesSorted('./input/purchases.csv');
var sortedPurchases = {
  date: '01-Mar',
  product: 'Top Class Soy Mince',
  price: 'R33,00'
 }
  assert.deepEqual(listPurchasesSorted, sortedPurchases);
})

})
