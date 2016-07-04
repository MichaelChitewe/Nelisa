var assert = require('assert');
var categories = require('../most-profitable-category');

describe('list the most profitable category week', function() {
    it('return the most profitable category week', function() {

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


        assert.deepEqual(categoriesMap, categories.purchasesCategoryMap('./input/categories.csv'));

    })

})


describe('list totalled categories for the week', function() {
    it('return totalled categories for the week', function() {

        var map = {
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

        var costs = {
            'Chakalaka Can': 126,
            'Top Class Soy Mince': 120,
            'Milk 1l': 203,
            'Iwisa Pap 5kg': 360,
            'Imasi': 272,
            'Gold Dish Vegetable Curry Can': 85,
            'Fanta 500ml': 117,
            'Cream Soda 500ml': 126,
            'Bread': 270,
            'Soap Bar': 9,
            'Shampoo 1 litre': 20,
            'Mixed Sweets 5s': 180,
            'Coke 500ml': 136,
            'Apples - loose': 15,
            'Bananas - loose': 4
        };


        var total = {
            "Candy": 180,
            "Canned Foods": 211,
            "Dairy": 475,
            "Fruits": 19,
            "Soft Drinks": 379,
            "Starch": 750,
            "Toiletries": 29
        };


        assert.deepEqual(total, categories.totalCostsCategories(costs, map));

    });

})


describe('list most profitable category for the week', function() {
    it('return most profitable category for the week', function() {

      var categoriesTotals = {
          "Candy": 180,
          "Canned Foods": 211,
          "Dairy": 475,
          "Fruits": 19,
          "Soft Drinks": 379,
          "Starch": 750,
          "Toiletries": 29
      };

    var  highestProfitableCategory = {
        productCategory: "Starch",
        amount:750
      };

      assert.deepEqual(highestProfitableCategory, categories.mostProfitableCategory(categoriesTotals));

  });

})
