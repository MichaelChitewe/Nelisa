var assert = require('assert');
var purchases = require('../most-profitable-category');

describe('list the most profitable category week',function(){
it('return the most profitable category week',function(){

  var categoriesMap = {
      "Apples - loose": "Fruits",
      "Bananas - loose": "Fruits",
      "Bread": "Starch",
      "Chakalaka Can": "Canned Foods",
      "Coke 500ml": "Soft Drinks",
      "Cream Soda 500ml": "Soft Drinks",
      "Fanta 500ml": "Soft Drinks",
      "Gold Dish Vegetable Curry Can": "Canned Foods",
      "Heart Chocolates": "Candy",
      "Imasi": "Dairy",
      "Iwisa Pap 5kg": "Starch",
      "Milk 1l": "Dairy",
      "Mixed Sweets 5s": "Candy",
      "Rose (plastic)": "Gifts",
      "Shampoo 1 litre": "Toiletries",
      "Soap Bar": "Toiletries",
      "Top Class Soy Mince": "Starch",
      "Valentine Cards": "Gifts"
  };


    assert.deepEqual(categoriesMap, purchases.purchasesCategoryMap('./input/categories.csv'));

})

})
