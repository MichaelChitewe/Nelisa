var assert = require('assert');
var products = require('../sales');



describe('list the products grouped week 1-4', function() {

    it('return grouped products for week 1-4', function() {


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


        var wk2GroupedProducts = {
            'Imasi': 36,
            'Bread': 28,
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

        var wk3GroupedProducts = {
            'Imasi': 25,
            'Bread': 24,
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

        var Wk4GroupedProducts = {
            'Imasi': 34,
            'Bread': 33,
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

        assert.deepEqual(wk1GroupedProducts, products.groupedData('./input/week1.csv'));
        assert.deepEqual(wk2GroupedProducts, products.groupedData('./input/week2.csv'));
        assert.deepEqual(wk3GroupedProducts, products.groupedData('./input/week3.csv'));
        assert.deepEqual(Wk4GroupedProducts, products.groupedData('./input/week4.csv'));

    })

})



describe('list the most popular product week 1-4', function() {

    it('return most popular product for week 1-4', function() {

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


        var groupedProductsWk2 = {
            'Imasi': 36,
            'Bread': 28,
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


        var popularProductWk2 = {
            item: 'Mixed Sweets 5s',
            amount: 54
        };



        var groupedProductsWk3 = {
            'Imasi': 25,
            'Bread': 24,
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

        var popularProductWk3 = {
            item: 'Mixed Sweets 5s',
            amount: 29
        };


        var groupedProductsWk4 = {
            'Imasi': 34,
            'Bread': 33,
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

        var popularProductWk4 = {
            item: 'Coke 500ml',
            amount: 45
        };

        assert.deepEqual(popularProductWk1, products.mostPopularItem(groupedProductsWk1));
        assert.deepEqual(popularProductWk2, products.mostPopularItem(groupedProductsWk2));
        assert.deepEqual(popularProductWk3, products.mostPopularItem(groupedProductsWk3));
        assert.deepEqual(popularProductWk4, products.mostPopularItem(groupedProductsWk4));

    })

})


describe('list the least popular product week 1-4', function() {


    it('return least popular product for week 1-4', function() {


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


        var groupedProductsWk2 = {
            'Imasi': 36,
            'Bread': 28,
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

        var leastPopularProductWk2 = {
            amount: 5,
            item: 'Soap Bar'
        };


        var groupedProductsWk3 = {
            'Imasi': 25,
            'Bread': 24,
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

        var leastPopularProductWk3 = {
            amount: 4,
            item: 'Iwisa Pap 5kg'
        };


        var groupedProductsWk4 = {
            'Imasi': 34,
            'Bread': 33,
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

        var leastPopularProductWk4 = {
            amount: 13,
            item: 'Shampoo 1 litre'
        };

        assert.deepEqual(leastPopularProductWk1, products.leastPopularItem(groupedProductsWk1));
        assert.deepEqual(leastPopularProductWk2, products.leastPopularItem(groupedProductsWk2));
        assert.deepEqual(leastPopularProductWk3, products.leastPopularItem(groupedProductsWk3));
        assert.deepEqual(leastPopularProductWk4, products.leastPopularItem(groupedProductsWk4));

    })

})
