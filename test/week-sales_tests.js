var assert = require('assert');
var weekSales = require('../week-sales');

describe('list the sales sorted data length week 1-4',function() {

    it('return the sales sorted data length week 1-4', function() {

    assert.equal(105,weekSales.weekSalesSorted('./input/week1.csv').length);
    assert.equal(117,weekSales.weekSalesSorted('./input/week2.csv').length);
    assert.equal(104,weekSales.weekSalesSorted('./input/week3.csv').length);
    assert.equal(119,weekSales.weekSalesSorted('./input/week4.csv').length);


    })

    })

describe('list the sales grouped data week 1-4', function(){
  it('return the sales grouped data week 1-4', function(){

    var datedSalesWk1 = weekSales.weekSalesSorted('./input/week1.csv');

    var groupedSalesWk1 = {
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

    var datedSalesWk2 =  weekSales.weekSalesSorted('./input/week2.csv');

    var groupedSalesWk2 = {
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

    var datedSalesWk3 = weekSales.weekSalesSorted('./input/week3.csv');

    var groupedSalesWk3 = {
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

    var datedSalesWk4 = weekSales.weekSalesSorted('./input/week4.csv');

    var groupedSalesWk4 = {
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


    assert.deepEqual(groupedSalesWk1,weekSales.weekSalesGrouped(datedSalesWk1));
    assert.deepEqual(groupedSalesWk2,weekSales.weekSalesGrouped(datedSalesWk2));
    assert.deepEqual(groupedSalesWk3,weekSales.weekSalesGrouped(datedSalesWk3));
    assert.deepEqual(groupedSalesWk4,weekSales.weekSalesGrouped(datedSalesWk4));

  })

})
