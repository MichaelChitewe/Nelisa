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

describe('list the summed categories for the week', function() {

    it('return the summed categories for the week', function() {

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

        var totalledCategories = {
            "Candy": 49,
            "Canned Foods": 40,
            "Dairy": 69,
            "Fruits": 83,
            "Soft Drinks": 109,
            "Starch": 84,
            "Toiletries": 15

        };

        assert.deepEqual(totalledCategories, categories.categoriesSummed(salesProductsData, expectedMaps));

    })

})

describe('list the most popular category for the week', function() {

    it('return the most popular category for the week', function() {

        var totalledCategories = {
            "Candy": 49,
            "Canned Foods": 40,
            "Dairy": 69,
            "Fruits": 83,
            "Soft Drinks": 109,
            "Starch": 84,
            "Toiletries": 15
        };


        var popularCategory = {
            item: "Soft Drinks",
            amount: 109

        };


        assert.deepEqual(popularCategory, categories.mostPopularCategory(totalledCategories));

    })

})


describe('list the least popular category for the  week', function() {

    it('return the least popular category for the week', function() {

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


        assert.deepEqual(leastPopularCategoryWk1, categories.leastPopularCategory(wk1TotalledCategories));

    })

})
