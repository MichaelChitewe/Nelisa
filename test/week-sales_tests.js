var assert = require('assert');
var weekSales = require('../week-sales');


describe('list the sales grouped data for the week', function() {
    it('return the sales grouped data for the week', function() {

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




        assert.deepEqual(groupedSalesWk1, weekSales.weekSalesGrouped('./input/week1.csv'));


    })

})
