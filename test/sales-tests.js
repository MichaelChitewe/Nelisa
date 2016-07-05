var assert = require('assert');
var products = require('../sales');



describe('list the products grouped for the week', function() {

    it('return grouped products for the week', function() {


        var wk1GroupedProducts = {
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



        assert.deepEqual(wk1GroupedProducts, products.groupedData('./input/week1.csv'));

    })

})



describe('list the most popular product for the week', function() {

    it('return most popular product for the week ', function() {

        var groupedProductsWk1 = {
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


        var popularProductWk1 = {
            item: 'Coke 500ml',
            amount: 54
        };




        assert.deepEqual(popularProductWk1, products.mostPopularItem(groupedProductsWk1));

    })

})


describe('list the least popular product for the week ', function() {


    it('return least popular product for the week ', function() {


        var groupedProductsWk1 = {
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

        var leastPopularProductWk1 = {
            amount: 3,
            item: 'Shampoo 1 litre'
        };



        assert.deepEqual(leastPopularProductWk1, products.leastPopularItem(groupedProductsWk1));

    })

})
