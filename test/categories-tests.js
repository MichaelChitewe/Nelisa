var assert = require('assert');
var categories = require('../categories');

describe('list the categories', function() {

    it('return the categories length', function() {

        var listCategoriesMapped = categories.categoriesMapped('./input/categories.csv');
        var expectedMap ={
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
   }

        assert.deepEqual(listCategoriesMapped, expectedMap);

    });
})


describe('list the summed categories', function() {

    it('return the summed categories week1', function() {



      var salesProductsData = {
          'Milk 1l': 39,
          'Imasi': 30,
          'Bread': 45,
          'Chakalaka Can': 23,
          'Gold Dish Vegetable Curry Can': 17,
          'Fanta 500ml': 33,
          'Coke 500ml': 54,
          'Cream Soda 500ml': 22,
          'Iwisa Pap 5kg': 17,
          'Top Class Soy Mince': 22,
          'Shampoo 1 litre': 3,
          'Soap Bar': 12,
          'Bananas - loose': 47,
          'Apples - loose': 36,
          'Mixed Sweets 5s': 49
      };


      var expectedMaps ={
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

        var summedCategories = categories.categoriesSummed(salesProductsData, expectedMaps);
        var totalledCategories = {
            dairy: 69,
            fruits: 83,
            beverages: 109,
            toiletries: 15,
            starch: 84,
            gifts: 0,
            candy: 49,
            cannedFoods: 40
        };


        assert.deepEqual(summedCategories, totalledCategories);

    })

  })


//     it('return the summed categories week2', function() {
//
//
//         var categoriesList = products.summedCategories(sortedProductsList);
//         var totalCategories = {
//             "dairy": 64,
//             "fruits": 49,
//             "beverages": 87,
//             "toiletries": 11,
//             "starch": 59,
//             "gifts": 28,
//             "candy": 74,
//             "cannedFoods": 48
//         };
//
//
//         assert.deepEqual(categoriesList, totalCategories);
//
//     })
//
//     it('return the summed categories week3', function() {
//
//
//         var categoriesList = products.summedCategories(sortedProductsList);
//         var totalCategories = {
//             "dairy": 53,
//             "fruits": 42,
//             "beverages": 44,
//             "toiletries": 12,
//             "starch": 40,
//             "gifts": 0,
//             "candy": 29,
//             "cannedFoods": 25
//         };
//
//
//         assert.deepEqual(categoriesList, totalCategories);
//
//     })
//
//
//     it('return the summed categories week4', function() {
//
//
//         var categoriesList = products.summedCategories(sortedProductsList);
//         var totalCategories = {
//             "dairy": 77,
//             "fruits": 54,
//             "beverages": 88,
//             "toiletries": 38,
//             "starch": 92,
//             "gifts": 0,
//             "candy": 40,
//             "cannedFoods": 67
//         };
//
//
//         assert.deepEqual(categoriesList, totalCategories);
//
//     })
//
// })


// describe('list the most popular category', function() {
//
//     it('return the most popular category week1', function() {
//
//
//         var mostPopCat = products.mostPopularCategory(categoriesList);
//         var expectedPopularCategory = {
//             item: "beverages",
//             amount: 109
//
//         };
//
//
//         assert.deepEqual(expectedPopularCategory, mostPopCat);
//
//     })
//
//
//     it('return the most popular category week2', function() {
//         var mostPopCat = products.mostPopularCategory(categoriesList);
//         var expectedPopularCategory = {
//             item: "beverages",
//             amount: 87
//
//         };
//
//
//         assert.deepEqual(expectedPopularCategory, mostPopCat);
//
//     })
//
//     it('return the most popular category week3', function() {
//
//
//         var mostPopCat = products.mostPopularCategory(categoriesList);
//         var expectedPopularCategory = {
//             item: "dairy",
//             amount: 53
//         };
//
//
//         assert.deepEqual(expectedPopularCategory, mostPopCat);
//
//     })
//
//
//     it('return the most popular category week4', function() {
//
//
//         var mostPopCat = products.mostPopularCategory(categoriesList);
//         var expectedPopularCategory = {
//             item: "beverages",
//             amount: 88
//         };
//
//
//         assert.deepEqual(expectedPopularCategory, mostPopCat);
//
//     })
//
// })
//
// describe('list the least popular category', function() {
//
//     it('return the least popular category week1', function() {
//
//         var leastPopCat = products.leastPopularCategory(categoriesList);
//         var expectedLeastPopularCategory = {
//             item: 'gifts',
//             amount: 0
//
//         };
//
//
//         assert.deepEqual(expectedLeastPopularCategory, leastPopCat);
//
//     })
//
//
//     it('return the least popular category week2', function() {
//
//
//         var leastPopCat = products.leastPopularCategory(categoriesList);
//
//         var expectedLeastPopularCategory = {
//             item: "toiletries",
//             amount: 11
//
//         };
//
//
//         assert.deepEqual(expectedLeastPopularCategory, leastPopCat);
//
//     })
//
//     it('return the least popular category week3', function() {
//
//
//         var leastPopCat = products.leastPopularCategory(categoriesList);
//         var expectedLeastPopularCategory = {
//             item: "gifts",
//             amount: 0
//
//         };
//
//
//         assert.deepEqual(expectedLeastPopularCategory, leastPopCat);
//
//     })
//
//
//     it('return the least popular category week4', function() {
//
//
//         var leastPopCat = products.leastPopularCategory(categoriesList);
//         var expectedLeastPopularCategory = {
//             item: "gifts",
//             amount: 0
//
//         };
//
//
//         assert.deepEqual(expectedLeastPopularCategory, leastPopCat);
//
//     })
//
// })
