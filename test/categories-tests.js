var assert = require('assert');
var categories = require('../categories');

describe('list the categories map', function() {

    it('return the categories map', function() {

        var expectedMap = {
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

        assert.deepEqual(expectedMap, categories.categoriesMapped('./input/categories.csv'));

    });
})

describe('list the summed categories week 1-4', function() {

    it('return the summed categories week 1-4', function() {

        var expectedMaps = {
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

        var salesProductsDataWk1 = {
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

        var totalledCategoriesWk1 = {
            "Candy": 49,
            "Canned Foods": 40,
            "Dairy": 69,
            "Fruits": 83,
            "Soft Drinks": 109,
            "Starch": 84,
            "Toiletries": 15

        };


        var salesProductsDataWk2 = {
            Imasi: 36,
            Bread: 28,
            'Chakalaka Can': 21,
            'Gold Dish Vegetable Curry Can': 27,
            'Fanta 500ml': 23,
            'Coke 500ml': 42,
            'Cream Soda 500ml': 22,
            'Iwisa Pap 5kg': 10,
            'Top Class Soy Mince': 21,
            'Shampoo 1 litre': 6,
            'Soap Bar': 5,
            'Bananas - loose': 28,
            'Apples - loose': 21,
            'Mixed Sweets 5s': 54,
            'Milk 1l': 28,
            'Heart Chocolates': 20,
            'Rose (plastic)': 14,
            'Valentine Cards': 14
        };

        var totalledCategoriesWk2 = {
            "Candy": 74,
            "Canned Foods": 48,
            "Dairy": 64,
            "Fruits": 49,
            "Gifts": 28,
            "Soft Drinks": 87,
            "Starch": 59,
            "Toiletries": 11
        };


        var salesProductsDataWk3 = {
            Imasi: 25,
            Bread: 24,
            'Chakalaka Can': 17,
            'Gold Dish Vegetable Curry Can': 8,
            'Fanta 500ml': 14,
            'Coke 500ml': 18,
            'Cream Soda 500ml': 12,
            'Iwisa Pap 5kg': 4,
            'Top Class Soy Mince': 12,
            'Shampoo 1 litre': 4,
            'Soap Bar': 8,
            'Bananas - loose': 17,
            'Apples - loose': 25,
            'Mixed Sweets 5s': 29,
            'Milk 1l': 28
        };

        var totalledCategoriesWk3 = {
            "Candy": 29,
            "Canned Foods": 25,
            "Dairy": 53,
            "Fruits": 42,
            "Soft Drinks": 44,
            "Starch": 40,
            "Toiletries": 12
          };


        var salesProductsDataWk4 = {
            Imasi: 34,
            Bread: 33,
            'Chakalaka Can': 33,
            'Gold Dish Vegetable Curry Can': 34,
            'Fanta 500ml': 24,
            'Coke 500ml': 45,
            'Cream Soda 500ml': 19,
            'Iwisa Pap 5kg': 16,
            'Top Class Soy Mince': 43,
            'Shampoo 1 litre': 13,
            'Soap Bar': 25,
            'Bananas - loose': 22,
            'Apples - loose': 32,
            'Mixed Sweets 5s': 40,
            'Milk 1l': 43
        };

        var totalledCategoriesWk4 = {
            "Candy": 40,
            "Canned Foods": 67,
            "Dairy": 77,
            "Fruits": 54,
            "Soft Drinks": 88,
            "Starch": 92,
            "Toiletries": 38
        };



        assert.deepEqual(totalledCategoriesWk1, categories.categoriesSummed(salesProductsDataWk1, expectedMaps));
        assert.deepEqual(totalledCategoriesWk2, categories.categoriesSummed(salesProductsDataWk2, expectedMaps));
        assert.deepEqual(totalledCategoriesWk3, categories.categoriesSummed(salesProductsDataWk3, expectedMaps));
        assert.deepEqual(totalledCategoriesWk4, categories.categoriesSummed(salesProductsDataWk4, expectedMaps));

    })

})

describe('list the most popular category week 1-4', function() {

    it('return the most popular category week 1-4', function() {

        var totalledCategoriesWk1 = {
            "Candy": 49,
            "Canned Foods": 40,
            "Dairy": 69,
            "Fruits": 83,
            "Soft Drinks": 109,
            "Starch": 84,
            "Toiletries": 15
        };


        var popularCategoryWk1 = {
            item: "Soft Drinks",
            amount: 109

        };

        var totalledCategoriesWk2 = {
          "Candy": 74,
          "Canned Foods": 48,
          "Dairy": 64,
          "Fruits": 49,
          "Gifts": 28,
          "Soft Drinks": 87,
          "Starch": 59,
          "Toiletries": 11
        };


        var popularCategoryWk2 = {
            item: "Soft Drinks",
            amount: 87

        };
        var totalledCategoriesWk3 = {
          "Candy": 29,
          "Canned Foods": 25,
          "Dairy": 53,
          "Fruits": 42,
          "Soft Drinks": 44,
          "Starch": 40,
          "Toiletries": 12
        };


        var popularCategoryWk3 = {
            item: "Dairy",
            amount: 53

        };
        var totalledCategoriesWk4 = {
          "Candy": 40,
          "Canned Foods": 67,
          "Dairy": 77,
          "Fruits": 54,
          "Soft Drinks": 88,
          "Starch": 92,
          "Toiletries": 38
        };


        var popularCategoryWk4 = {
            item: "Starch",
            amount: 92

        };


        assert.deepEqual(popularCategoryWk1, categories.mostPopularCategory(totalledCategoriesWk1));
        assert.deepEqual(popularCategoryWk2, categories.mostPopularCategory(totalledCategoriesWk2));
        assert.deepEqual(popularCategoryWk3, categories.mostPopularCategory(totalledCategoriesWk3));
        assert.deepEqual(popularCategoryWk4, categories.mostPopularCategory(totalledCategoriesWk4));




    })

})


describe('list the least popular category week 1-4', function() {

    it('return the least popular category week 1-4', function() {

        var wk1TotalledCategories = {
            "Candy": 49,
            "Canned Foods": 40,
            "Dairy": 69,
            "Fruits": 83,
            "Soft Drinks": 109,
            "Starch": 84,
            "Toiletries": 15
        };

        var leastPopularCategoryWk1 = {
            item: "Toiletries",
            amount: 15

        };
        var wk2TotalledCategories = {
          "Candy": 74,
          "Canned Foods": 48,
          "Dairy": 64,
          "Fruits": 49,
          "Gifts": 28,
          "Soft Drinks": 87,
          "Starch": 59,
          "Toiletries": 11
        };

        var leastPopularCategoryWk2 = {
            item: "Toiletries",
            amount: 11

        };
        var wk3TotalledCategories = {
          "Candy": 29,
          "Canned Foods": 25,
          "Dairy": 53,
          "Fruits": 42,
          "Soft Drinks": 44,
          "Starch": 40,
          "Toiletries": 12
        };

        var leastPopularCategoryWk3 = {
            item: "Toiletries",
            amount: 12

        };

        var wk4TotalledCategories = {
          "Candy": 40,
          "Canned Foods": 67,
          "Dairy": 77,
          "Fruits": 54,
          "Soft Drinks": 88,
          "Starch": 92,
          "Toiletries": 38
        };

        var leastPopularCategoryWk4 = {
            item: "Toiletries",
            amount: 38

        };


        assert.deepEqual(leastPopularCategoryWk1, categories.leastPopularCategory(wk1TotalledCategories));
        assert.deepEqual(leastPopularCategoryWk2, categories.leastPopularCategory(wk2TotalledCategories));
        assert.deepEqual(leastPopularCategoryWk3, categories.leastPopularCategory(wk3TotalledCategories));
        assert.deepEqual(leastPopularCategoryWk4, categories.leastPopularCategory(wk4TotalledCategories));

    })

})
