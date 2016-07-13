var assert = require('assert');
var products = require('../sales');

describe('list of purchases data for the week', function() {

    it('return purchases data for the week', function() {

        assert.equal(105, products.dataFromSales('./input/week1.csv').length);

    });

});


describe('list the products grouped for the week', function() {

    it('return grouped products for the week', function() {

        var salesListData = [{
            date: '1-Feb-2016',
            product: 'Milk 1l',
            quantity: 3,
            price: 10
        }, {
            date: '1-Feb-2016',
            product: 'Imasi',
            quantity: 1,
            price: 25
        }, {
            date: '1-Feb-2016',
            product: 'Bread',
            quantity: 2,
            price: 12
        }, {
            date: '1-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            price: 10
        }, {
            date: '1-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '1-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Coke 500ml',
            quantity: 2,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 2,
            price: 7
        }, {
            date: '1-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 0,
            price: 30
        }, {
            date: '1-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 2,
            price: 12
        }, {
            date: '1-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '1-Feb-2016',
            product: 'Soap Bar',
            quantity: 0,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Bananas - loose',
            quantity: 3,
            price: 2
        }, {
            date: '1-Feb-2016',
            product: 'Apples - loose',
            quantity: 5,
            price: 2
        }, {
            date: '1-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 9,
            price: 3
        }, {
            date: '2-Feb-2016',
            product: 'Milk 1l',
            quantity: 4,
            price: 10
        }, {
            date: '2-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '2-Feb-2016',
            product: 'Bread',
            quantity: 5,
            price: 12
        }, {
            date: '2-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 4,
            price: 10
        }, {
            date: '2-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 5,
            price: 9
        }, {
            date: '2-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 5,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 4,
            price: 7
        }, {
            date: '2-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            price: 30
        }, {
            date: '2-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 3,
            price: 12
        }, {
            date: '2-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '2-Feb-2016',
            product: 'Soap Bar',
            quantity: 2,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Bananas - loose',
            quantity: 0,
            price: 2
        }, {
            date: '2-Feb-2016',
            product: 'Apples - loose',
            quantity: 0,
            price: 2
        }, {
            date: '2-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 0,
            price: 3
        }, {
            date: '3-Feb-2016',
            product: 'Milk 1l',
            quantity: 7,
            price: 10
        }, {
            date: '3-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '3-Feb-2016',
            product: 'Bread',
            quantity: 7,
            price: 12
        }, {
            date: '3-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 4,
            price: 10
        }, {
            date: '3-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '3-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 5,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 3,
            price: 7
        }, {
            date: '3-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 3,
            price: 30
        }, {
            date: '3-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 3,
            price: 12
        }, {
            date: '3-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '3-Feb-2016',
            product: 'Soap Bar',
            quantity: 2,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Bananas - loose',
            quantity: 10,
            price: 2
        }, {
            date: '3-Feb-2016',
            product: 'Apples - loose',
            quantity: 8,
            price: 2
        }, {
            date: '3-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 15,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Milk 1l',
            quantity: 5,
            price: 10
        }, {
            date: '4-Feb-2016',
            product: 'Imasi',
            quantity: 8,
            price: 25
        }, {
            date: '4-Feb-2016',
            product: 'Bread',
            quantity: 8,
            price: 12
        }, {
            date: '4-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 2,
            price: 10
        }, {
            date: '4-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 0,
            price: 9
        }, {
            date: '4-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Coke 500ml',
            quantity: 12,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 2,
            price: 7
        }, {
            date: '4-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 1,
            price: 30
        }, {
            date: '4-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 4,
            price: 12
        }, {
            date: '4-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '4-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Bananas - loose',
            quantity: 16,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Apples - loose',
            quantity: 8,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 12,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Milk 1l',
            quantity: 10,
            price: 10
        }, {
            date: '5-Feb-2016',
            product: 'Imasi',
            quantity: 3,
            price: 25
        }, {
            date: '5-Feb-2016',
            product: 'Bread',
            quantity: 12,
            price: 12
        }, {
            date: '5-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            price: 10
        }, {
            date: '5-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 6,
            price: 9
        }, {
            date: '5-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Coke 500ml',
            quantity: 9,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 8,
            price: 7
        }, {
            date: '5-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 2,
            price: 30
        }, {
            date: '5-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 1,
            price: 12
        }, {
            date: '5-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '5-Feb-2016',
            product: 'Soap Bar',
            quantity: 1,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Bananas - loose',
            quantity: 8,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Apples - loose',
            quantity: 12,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 5,
            price: 3
        }, {
            date: '6-Feb-2016',
            product: 'Milk 1l',
            quantity: 6,
            price: 10
        }, {
            date: '6-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '6-Feb-2016',
            product: 'Bread',
            quantity: 7,
            price: 12
        }, {
            date: '6-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 5,
            price: 10
        }, {
            date: '6-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '6-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 3,
            price: 7
        }, {
            date: '6-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 6,
            price: 30
        }, {
            date: '6-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 8,
            price: 12
        }, {
            date: '6-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '6-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Bananas - loose',
            quantity: 2,
            price: 2
        }, {
            date: '6-Feb-2016',
            product: 'Apples - loose',
            quantity: 0,
            price: 2
        }, {
            date: '6-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 5,
            price: 3
        }, {
            date: '7-Feb-2016',
            product: 'Milk 1l',
            quantity: 4,
            price: 10
        }, {
            date: '7-Feb-2016',
            product: 'Imasi',
            quantity: 6,
            price: 25
        }, {
            date: '7-Feb-2016',
            product: 'Bread',
            quantity: 4,
            price: 12
        }, {
            date: '7-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 2,
            price: 10
        }, {
            date: '7-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 0,
            price: 9
        }, {
            date: '7-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Coke 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 0,
            price: 7
        }, {
            date: '7-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 0,
            price: 30
        }, {
            date: '7-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 1,
            price: 12
        }, {
            date: '7-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '7-Feb-2016',
            product: 'Soap Bar',
            quantity: 1,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Bananas - loose',
            quantity: 8,
            price: 2
        }, {
            date: '7-Feb-2016',
            product: 'Apples - loose',
            quantity: 3,
            price: 2
        }, {
            date: '7-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 3,
            price: 3
        }];
        
        var groupedProducts = {
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


        assert.deepEqual(groupedProducts, products.groupedSales(salesListData));

    });

});


describe('list the most popular product for the week', function() {

    it('return most popular product for the week ', function() {

        var productsGrouped = {
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


        var popularProduct = {
            description: 'most popular product',
            item: 'Coke 500ml',
            amount: 54
        };




        assert.deepEqual(popularProduct, products.mostPopularItem(productsGrouped));

    });

});


describe('list the least popular product for the week ', function() {


    it('return least popular product for the week ', function() {


        var groupedProducts = {
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

        var leastPopularProduct = {
            description: 'least popular product',
            amount: 3,
            item: 'Shampoo 1 litre'
        };



        assert.deepEqual(leastPopularProduct, products.leastPopularItem(groupedProducts));

    });

});


describe('list the sales grouped data for the week', function() {
    it('return the sales grouped data for the week', function() {

        var salesListData = [{
            date: '1-Feb-2016',
            product: 'Milk 1l',
            quantity: 3,
            price: 10
        }, {
            date: '1-Feb-2016',
            product: 'Imasi',
            quantity: 1,
            price: 25
        }, {
            date: '1-Feb-2016',
            product: 'Bread',
            quantity: 2,
            price: 12
        }, {
            date: '1-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            price: 10
        }, {
            date: '1-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '1-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Coke 500ml',
            quantity: 2,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 2,
            price: 7
        }, {
            date: '1-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 0,
            price: 30
        }, {
            date: '1-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 2,
            price: 12
        }, {
            date: '1-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '1-Feb-2016',
            product: 'Soap Bar',
            quantity: 0,
            price: 6
        }, {
            date: '1-Feb-2016',
            product: 'Bananas - loose',
            quantity: 3,
            price: 2
        }, {
            date: '1-Feb-2016',
            product: 'Apples - loose',
            quantity: 5,
            price: 2
        }, {
            date: '1-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 9,
            price: 3
        }, {
            date: '2-Feb-2016',
            product: 'Milk 1l',
            quantity: 4,
            price: 10
        }, {
            date: '2-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '2-Feb-2016',
            product: 'Bread',
            quantity: 5,
            price: 12
        }, {
            date: '2-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 4,
            price: 10
        }, {
            date: '2-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 5,
            price: 9
        }, {
            date: '2-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 5,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 4,
            price: 7
        }, {
            date: '2-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            price: 30
        }, {
            date: '2-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 3,
            price: 12
        }, {
            date: '2-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '2-Feb-2016',
            product: 'Soap Bar',
            quantity: 2,
            price: 6
        }, {
            date: '2-Feb-2016',
            product: 'Bananas - loose',
            quantity: 0,
            price: 2
        }, {
            date: '2-Feb-2016',
            product: 'Apples - loose',
            quantity: 0,
            price: 2
        }, {
            date: '2-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 0,
            price: 3
        }, {
            date: '3-Feb-2016',
            product: 'Milk 1l',
            quantity: 7,
            price: 10
        }, {
            date: '3-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '3-Feb-2016',
            product: 'Bread',
            quantity: 7,
            price: 12
        }, {
            date: '3-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 4,
            price: 10
        }, {
            date: '3-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '3-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 5,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 3,
            price: 7
        }, {
            date: '3-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 3,
            price: 30
        }, {
            date: '3-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 3,
            price: 12
        }, {
            date: '3-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '3-Feb-2016',
            product: 'Soap Bar',
            quantity: 2,
            price: 6
        }, {
            date: '3-Feb-2016',
            product: 'Bananas - loose',
            quantity: 10,
            price: 2
        }, {
            date: '3-Feb-2016',
            product: 'Apples - loose',
            quantity: 8,
            price: 2
        }, {
            date: '3-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 15,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Milk 1l',
            quantity: 5,
            price: 10
        }, {
            date: '4-Feb-2016',
            product: 'Imasi',
            quantity: 8,
            price: 25
        }, {
            date: '4-Feb-2016',
            product: 'Bread',
            quantity: 8,
            price: 12
        }, {
            date: '4-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 2,
            price: 10
        }, {
            date: '4-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 0,
            price: 9
        }, {
            date: '4-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Coke 500ml',
            quantity: 12,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 2,
            price: 7
        }, {
            date: '4-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 1,
            price: 30
        }, {
            date: '4-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 4,
            price: 12
        }, {
            date: '4-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '4-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            price: 6
        }, {
            date: '4-Feb-2016',
            product: 'Bananas - loose',
            quantity: 16,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Apples - loose',
            quantity: 8,
            price: 2
        }, {
            date: '4-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 12,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Milk 1l',
            quantity: 10,
            price: 10
        }, {
            date: '5-Feb-2016',
            product: 'Imasi',
            quantity: 3,
            price: 25
        }, {
            date: '5-Feb-2016',
            product: 'Bread',
            quantity: 12,
            price: 12
        }, {
            date: '5-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            price: 10
        }, {
            date: '5-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 6,
            price: 9
        }, {
            date: '5-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Coke 500ml',
            quantity: 9,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 8,
            price: 7
        }, {
            date: '5-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 2,
            price: 30
        }, {
            date: '5-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 1,
            price: 12
        }, {
            date: '5-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '5-Feb-2016',
            product: 'Soap Bar',
            quantity: 1,
            price: 6
        }, {
            date: '5-Feb-2016',
            product: 'Bananas - loose',
            quantity: 8,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Apples - loose',
            quantity: 12,
            price: 2
        }, {
            date: '5-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 5,
            price: 3
        }, {
            date: '6-Feb-2016',
            product: 'Milk 1l',
            quantity: 6,
            price: 10
        }, {
            date: '6-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            price: 25
        }, {
            date: '6-Feb-2016',
            product: 'Bread',
            quantity: 7,
            price: 12
        }, {
            date: '6-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 5,
            price: 10
        }, {
            date: '6-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            price: 9
        }, {
            date: '6-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Coke 500ml',
            quantity: 8,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 3,
            price: 7
        }, {
            date: '6-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 6,
            price: 30
        }, {
            date: '6-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 8,
            price: 12
        }, {
            date: '6-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            price: 30
        }, {
            date: '6-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            price: 6
        }, {
            date: '6-Feb-2016',
            product: 'Bananas - loose',
            quantity: 2,
            price: 2
        }, {
            date: '6-Feb-2016',
            product: 'Apples - loose',
            quantity: 0,
            price: 2
        }, {
            date: '6-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 5,
            price: 3
        }, {
            date: '7-Feb-2016',
            product: 'Milk 1l',
            quantity: 4,
            price: 10
        }, {
            date: '7-Feb-2016',
            product: 'Imasi',
            quantity: 6,
            price: 25
        }, {
            date: '7-Feb-2016',
            product: 'Bread',
            quantity: 4,
            price: 12
        }, {
            date: '7-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 2,
            price: 10
        }, {
            date: '7-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 0,
            price: 9
        }, {
            date: '7-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 3,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Coke 500ml',
            quantity: 7,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 0,
            price: 7
        }, {
            date: '7-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 0,
            price: 30
        }, {
            date: '7-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 1,
            price: 12
        }, {
            date: '7-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 0,
            price: 30
        }, {
            date: '7-Feb-2016',
            product: 'Soap Bar',
            quantity: 1,
            price: 6
        }, {
            date: '7-Feb-2016',
            product: 'Bananas - loose',
            quantity: 8,
            price: 2
        }, {
            date: '7-Feb-2016',
            product: 'Apples - loose',
            quantity: 3,
            price: 2
        }, {
            date: '7-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 3,
            price: 3
        }];
        var groupedSales = {
            "Apples - loose": 72,
            "Bananas - loose": 94,
            "Bread": 540,
            "Chakalaka Can": 230,
            "Coke 500ml": 324,
            "Cream Soda 500ml": 154,
            "Fanta 500ml": 198,
            "Gold Dish Vegetable Curry Can": 153,
            "Imasi": 750,
            "Iwisa Pap 5kg": 510,
            "Milk 1l": 390,
            "Mixed Sweets 5s": 120,
            "Shampoo 1 litre": 90,
            "Soap Bar": 72,
            "Top Class Soy Mince": 264
        };

        assert.deepEqual(groupedSales, products.totalledGroupedSales(salesListData));


    });

});
