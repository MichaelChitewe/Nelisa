var assert = require('assert');
var weekSales = require('../week-sales');


describe('list the sales grouped data week 1-4', function() {
    it('return the sales grouped data week 1-4', function() {

        var groupedSalesWk1 = {
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


        var groupedSalesWk2 = {
            "Apples - loose": 42,
            "Bananas - loose": 56,
            "Bread": 336,
            "Chakalaka Can": 210,
            "Coke 500ml": 252,
            "Cream Soda 500ml": 154,
            "Fanta 500ml": 138,
            "Gold Dish Vegetable Curry Can": 243,
            "Heart Chocolates": 700,
            "Imasi": 900,
            "Iwisa Pap 5kg": 300,
            "Milk 1l": 280,
            "Mixed Sweets 5s": 147,
            "Rose (plastic)": 210,
            "Shampoo 1 litre": 180,
            "Soap Bar": 30,
            "Top Class Soy Mince": 252,
            "Valentine Cards": 56
        };


        var groupedSalesWk3 = {
            "Apples - loose": 50,
            "Bananas - loose": 34,
            "Bread": 288,
            "Chakalaka Can": 170,
            "Coke 500ml": 108,
            "Cream Soda 500ml": 84,
            "Fanta 500ml": 84,
            "Gold Dish Vegetable Curry Can": 72,
            "Imasi": 625,
            "Iwisa Pap 5kg": 120,
            "Milk 1l": 280,
            "Mixed Sweets 5s": 80,
            "Shampoo 1 litre": 120,
            "Soap Bar": 48,
            "Top Class Soy Mince": 144

        };

        var groupedSalesWk4 = {
            "Apples - loose": 64,
            "Bananas - loose": 44,
            "Bread": 396,
            "Chakalaka Can": 330,
            "Coke 500ml": 270,
            "Cream Soda 500ml": 133,
            "Fanta 500ml": 144,
            "Gold Dish Vegetable Curry Can": 306,
            "Imasi": 850,
            "Iwisa Pap 5kg": 480,
            "Milk 1l": 430,
            "Mixed Sweets 5s": 108,
            "Shampoo 1 litre": 390,
            "Soap Bar": 150,
            "Top Class Soy Mince": 516
        };


        assert.deepEqual(groupedSalesWk1, weekSales.weekSalesGrouped('./input/week1.csv'));
        assert.deepEqual(groupedSalesWk2, weekSales.weekSalesGrouped('./input/week2.csv'));
        assert.deepEqual(groupedSalesWk3, weekSales.weekSalesGrouped('./input/week3.csv'));
        assert.deepEqual(groupedSalesWk4, weekSales.weekSalesGrouped('./input/week4.csv'));

    })

})
