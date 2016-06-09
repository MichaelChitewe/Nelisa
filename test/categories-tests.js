var assert = require('assert');
var categories = require('../categories');

  var listCategoriesLines = categories.linesInFiles('./input/categories.csv');
  //var categoriesListed = categories.categoriesList(listCategoriesLines);

describe('list the categories', function() {

    it('return the categories length', function() {

        var listCategoriesLines = categories.linesInFiles('./input/categories.csv').length;

        assert.equal(listCategoriesLines, 18);

    });
})

// describe('list the  categories', function() {
//
//     it('return the list of categories', function() {
//
//         var categoriesListed = categories.categoriesList(listCategoriesLines);
//         var expectedListedCategories =[
// ];
//         assert.deepEqual(categoriesListed,expectedListedCategories);
//
//     });
// })


// describe('map of categories', function() {
//
//     it('return the map of categories', function() {
//
//       var categoriesmap = categories.mappedCategories(categoriesListed);
//       var expectedMap = {
//         Candy: "Mixed Sweets 5s   Heart Chocolates",
//         Canned Foods: "Chakalaka Can Gold Dish Vegetable Curry Can",
//         Dairy: "ImasiMilk 1l",
//         Fruits: "Bananas - loose Apples - loose",
//         Gifts: "Rose (plastic) Valentine Cards",
//         Soft Drinks: "Coke 500ml Cream Soda 500ml Fanta 500ml",
//         Starch: "Iwisa Pap 5kg Top Class Soy Mince Bread",
//         Toiletries: "Shampoo 1 litre Soap Bar"
//       };
//
//       assert.deepEqual(categoriesmap,expectedMap);
//
//     });
// })





// describe('list the summed categories', function() {
//
//     it('return the summed categories week1', function() {
//
//
//         var categoriesList = products.summedCategories(sortedProductsListWeek1);
//         var totalCategories = {
//             dairy: 69,
//             fruits: 83,
//             beverages: 109,
//             toiletries: 15,
//             starch: 84,
//             gifts: 0,
//             candy: 49,
//             cannedFoods: 40
//         };
//
//
//         assert.deepEqual(categoriesList, totalCategories);
//
//     })
//
//
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
//
//
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
