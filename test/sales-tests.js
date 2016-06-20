var assert = require('assert');
var products = require('../sales');

var week1 = products.linesInFiles('./input/week1.csv');
var week2 = products.linesInFiles('./input/week2.csv');
var week3 = products.linesInFiles('./input/week3.csv');
var week4 = products.linesInFiles('./input/week4.csv');
var sortedProductsListWeek1 = products.sortedProducts(week1);
var sortedProductsListWeek2 = products.sortedProducts(week2);
var sortedProductsListWeek3 = products.sortedProducts(week3);
var sortedProductsListWeek4 = products.sortedProducts(week4);
var groupedSoldProductsWeek1 = products.groupedData(sortedProductsListWeek1);
var groupedSoldProductsWeek2 = products.groupedData(sortedProductsListWeek2);
var groupedSoldProductsWeek3 = products.groupedData(sortedProductsListWeek3);
var groupedSoldProductsWeek4 = products.groupedData(sortedProductsListWeek4);

describe('list the products', function() {

    it('return the product length week', function() {

    assert.equal(105,products.linesInFiles('./input/week1.csv').length);
    assert.equal(117,products.linesInFiles('./input/week2.csv').length);
    assert.equal(104,products.linesInFiles('./input/week3.csv').length);
    assert.equal(119,products.linesInFiles('./input/week4.csv').length);

    });

})


describe('list the sorted products', function() {

    it('return the sorted products length week1', function() {

        var sortedProductsListWeek1 = products.sortedProducts(week1).length;

        assert.equal(sortedProductsListWeek1, 105);

    });

    it('return the sorted product length week2', function() {

        var sortedProductsListWeek2 = products.sortedProducts(week2).length;

        assert.equal(sortedProductsListWeek2, 117);

    });

    it('return the sorted product length week3', function() {


        var sortedProductsListWeek3 = products.sortedProducts(week3).length;

        assert.equal(sortedProductsListWeek3, 104);

    });

    it('return the  sorted product length week4', function() {


        var sortedProductsListWeek4 = products.sortedProducts(week4).length;

        assert.equal(sortedProductsListWeek4, 119);

    });

})

describe('list the products grouped', function() {

    it('return grouped products for week1', function() {

        var groupedSoldProductsWeek1 = products.groupedData(sortedProductsListWeek1);
        var expectedGroupedProducts = {
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

        assert.deepEqual(groupedSoldProductsWeek1, expectedGroupedProducts);

    })

    it('return grouped products for week2', function() {

        var groupedSoldProductsWeek2 = products.groupedData(sortedProductsListWeek2);
        var expectedGroupedProducts = {
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

        assert.deepEqual(groupedSoldProductsWeek2, expectedGroupedProducts);

    })

    it('return grouped products for week3', function() {

        var groupedSoldProductsWeek3 = products.groupedData(sortedProductsListWeek3);
        var expectedGroupedProducts = {
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

        assert.deepEqual(groupedSoldProductsWeek3, expectedGroupedProducts);

    })

    it('return grouped products for week4', function() {

        var groupedSoldProductsWeek4 = products.groupedData(sortedProductsListWeek4);
        var expectedGroupedProducts = {
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


        assert.deepEqual(groupedSoldProductsWeek4, expectedGroupedProducts);

    })

})

describe('list the most popular product', function() {

    it('return most popular product for week1', function() {

        var mostPopularProduct = products.mostPopularItem(groupedSoldProductsWeek1);
        var expectedPopularProduct = {
            item: 'Coke 500ml',
            amount: 54
        };

        assert.deepEqual(mostPopularProduct, expectedPopularProduct);

    })

    it('return most popular product for week2', function() {

        var mostPopularProduct = products.mostPopularItem(groupedSoldProductsWeek2);
        var expectedPopularProduct = {
            item: 'Mixed Sweets 5s',
            amount: 54
        };

        assert.deepEqual(mostPopularProduct, expectedPopularProduct);

    })

    it('return most popular product for week3', function() {


        var mostPopularProduct = products.mostPopularItem(groupedSoldProductsWeek3);
        var expectedPopularProduct = {
            item: 'Mixed Sweets 5s',
            amount: 29
        };

        assert.deepEqual(mostPopularProduct, expectedPopularProduct);

    })

    it('return most popular product for week4', function() {

        var mostPopularProduct = products.mostPopularItem(groupedSoldProductsWeek4);
        var expectedPopularProduct = {
            item: 'Coke 500ml',
            amount: 45
        };

        assert.deepEqual(mostPopularProduct, expectedPopularProduct);

    })

})


describe('list the least popular product', function() {


    it('return least popular product for week1', function() {


        var leastPopularProduct = products.leastPopularItem(groupedSoldProductsWeek1);
        var expectedLeastPopularProduct = {
            amount: 3,
            item: 'Shampoo 1 litre'
        };

        assert.deepEqual(leastPopularProduct, expectedLeastPopularProduct);

    })

    it('return least popular product for week2', function() {

        var leastPopularProduct = products.leastPopularItem(groupedSoldProductsWeek2);
        var expectedLeastPopularProduct = {
            amount: 5,
            item: 'Soap Bar'
        };

        assert.deepEqual(leastPopularProduct, expectedLeastPopularProduct);

    })

    it('return least popular product for week3', function() {

        var leastPopularProduct = products.leastPopularItem(groupedSoldProductsWeek3);
        var expectedLeastPopularProduct = {
            amount: 4,
            item: 'Iwisa Pap 5kg'
        };

        assert.deepEqual(leastPopularProduct, expectedLeastPopularProduct);
    })

    it('return least popular product for week4', function() {

        var leastPopularProduct = products.leastPopularItem(groupedSoldProductsWeek4);
        var expectedLeastPopularProduct = {
            amount: 13,
            item: 'Shampoo 1 litre'
        };

        assert.deepEqual(leastPopularProduct, expectedLeastPopularProduct);

    })

})
