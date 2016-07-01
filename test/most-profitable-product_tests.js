var assert = require('assert');
var purchases = require('../most-profitable-product');



describe('list of purchases data week 1-4', function() {

    it('return purchases data week 1-4', function() {

        assert.equal(153, purchases.weekPurchasesData('./input/purchases.csv').length);

    })

})



describe('list of purchases data week 1-4', function() {

    it('return purchases data week 1-4', function() {

        var initialDate = '23-Jan-2016';
        var lastDate = '28-Jan-2016';

        var purchasesData = [{
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 7,
            totalCost: 21
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Coke 500ml',
            quantity: 3,
            unitCost: 3,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 4,
            unitCost: 4,
            totalCost: 18
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 2,
            unitCost: 4,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 5,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Imasi',
            quantity: 1,
            unitCost: 17,
            totalCost: 17
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 3,
            unitCost: 20,
            totalCost: 60
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Milk 1l',
            quantity: 4,
            unitCost: 7,
            totalCost: 28
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 8,
            totalCost: 40
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Bananas - loose',
            quantity: 4,
            unitCost: 1,
            totalCost: 4
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Apples - loose',
            quantity: 10,
            unitCost: 1,
            totalCost: 15
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Mixed Sweets 5s',
            quantity: 60,
            unitCost: 3,
            totalCost: 180
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Bread',
            quantity: 30,
            unitCost: 9,
            totalCost: 270
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Coke 500ml',
            quantity: 36,
            unitCost: 3,
            totalCost: 126
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 15,
            unitCost: 5,
            totalCost: 75
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 15,
            unitCost: 20,
            totalCost: 300
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Milk 1l',
            quantity: 25,
            unitCost: 7,
            totalCost: 175
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 10,
            unitCost: 8,
            totalCost: 80
        }, {
            shop: 'HomeMade',
            date: '02-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'HomeMade',
            date: '02-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Epping Market',
            date: '03-Feb-2016',
            product: 'Bananas - loose',
            quantity: 12,
            unitCost: 1,
            totalCost: 12
        }, {
            shop: 'Epping Market',
            date: '03-Feb-2016',
            product: 'Apples - loose',
            quantity: 100,
            unitCost: 1,
            totalCost: 150
        }, {
            shop: 'Epping Market',
            date: '03-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 240,
            unitCost: 3,
            totalCost: 720
        }, {
            shop: 'HomeMade',
            date: '04-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '04-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Joe Spaza Shop',
            date: '04-Feb-2016',
            product: 'Bread',
            quantity: 4,
            unitCost: 11,
            totalCost: 44
        }, {
            shop: 'Joe Spaza Shop',
            date: '04-Feb-2016',
            product: 'Imasi',
            quantity: 4,
            unitCost: 24,
            totalCost: 96
        }, {
            shop: 'Epping Market',
            date: '06-Feb-2016',
            product: 'Bananas - loose',
            quantity: 8,
            unitCost: 1,
            totalCost: 8
        }, {
            shop: 'Epping Market',
            date: '06-Feb-2016',
            product: 'Apples - loose',
            quantity: 100,
            unitCost: 1,
            totalCost: 150
        }, {
            shop: 'Epping Market',
            date: '06-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 150,
            unitCost: 3,
            totalCost: 450
        }, {
            shop: 'HomeMade',
            date: '06-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Bread',
            quantity: 30,
            unitCost: 9,
            totalCost: 270
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Coke 500ml',
            quantity: 36,
            unitCost: 3,
            totalCost: 126
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 18,
            unitCost: 4,
            totalCost: 81
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 15,
            unitCost: 5,
            totalCost: 75
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Imasi',
            quantity: 25,
            unitCost: 17,
            totalCost: 425
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            unitCost: 20,
            totalCost: 100
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Milk 1l',
            quantity: 10,
            unitCost: 7,
            totalCost: 70
        }, {
            shop: 'Makro',
            date: '6-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 10,
            unitCost: 8,
            totalCost: 80
        }, {
            shop: 'ChinaTown',
            date: '09-Feb-2016',
            product: 'Rose (plastic)',
            quantity: 20,
            unitCost: 10,
            totalCost: 200
        }, {
            shop: 'Joe Spaza Shop',
            date: '09-Feb-2016',
            product: 'Milk 1l',
            quantity: 3,
            unitCost: 9,
            totalCost: 28
        }, {
            shop: 'Epping Market',
            date: '10-Feb-2016',
            product: 'Bananas - loose',
            quantity: 4,
            unitCost: 1,
            totalCost: 4
        }, {
            shop: 'Epping Market',
            date: '10-Feb-2016',
            product: 'Apples - loose',
            quantity: 20,
            unitCost: 1,
            totalCost: 30
        }, {
            shop: 'Epping Market',
            date: '10-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 150,
            unitCost: 3,
            totalCost: 450
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Bread',
            quantity: 10,
            unitCost: 9,
            totalCost: 90
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Coke 500ml',
            quantity: 18,
            unitCost: 3,
            totalCost: 63
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 5,
            unitCost: 5,
            totalCost: 25
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Heart Chocolates',
            quantity: 20,
            unitCost: 25,
            totalCost: 500
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Imasi',
            quantity: 10,
            unitCost: 17,
            totalCost: 170
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            unitCost: 20,
            totalCost: 100
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Milk 1l',
            quantity: 10,
            unitCost: 7,
            totalCost: 70
        }, {
            shop: 'Makro',
            date: '10-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 15,
            unitCost: 8,
            totalCost: 120
        }, {
            shop: 'HomeMade',
            date: '11-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '11-Feb-2016',
            product: 'Valentine Cards',
            quantity: 20,
            unitCost: 2,
            totalCost: 40
        }, {
            shop: 'Joe Spaza Shop',
            date: '12-Feb-2016',
            product: 'Milk 1l',
            quantity: 3,
            unitCost: 9,
            totalCost: 28
        }, {
            shop: 'Epping Market',
            date: '13-Feb-2016',
            product: 'Bananas - loose',
            quantity: 4,
            unitCost: 1,
            totalCost: 4
        }, {
            shop: 'Epping Market',
            date: '13-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 50,
            unitCost: 3,
            totalCost: 150
        }, {
            shop: 'HomeMade',
            date: '13-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 3,
            unitCost: 20,
            totalCost: 60
        }, {
            shop: 'HomeMade',
            date: '13-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Joe Spaza Shop',
            date: '13-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 5,
            unitCost: 8,
            totalCost: 42
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Bread',
            quantity: 5,
            unitCost: 9,
            totalCost: 45
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Coke 500ml',
            quantity: 12,
            unitCost: 3,
            totalCost: 42
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 12,
            unitCost: 4,
            totalCost: 54
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Imasi',
            quantity: 20,
            unitCost: 17,
            totalCost: 340
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Milk 1l',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '13-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 8,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '14-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'Joe Spaza Shop',
            date: '14-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 8,
            totalCost: 17
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 2,
            unitCost: 8,
            totalCost: 17
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 2,
            unitCost: 7,
            totalCost: 15
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 1,
            unitCost: 6,
            totalCost: 6
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 8,
            totalCost: 17
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 1,
            unitCost: 30,
            totalCost: 30
        }, {
            shop: 'Joe Spaza Shop',
            date: '16-Feb-2016',
            product: 'Milk 1l',
            quantity: 6,
            unitCost: 9,
            totalCost: 57
        }, {
            shop: 'Epping Market',
            date: '17-Feb-2016',
            product: 'Apples - loose',
            quantity: 60,
            unitCost: 1,
            totalCost: 90
        }, {
            shop: 'Epping Market',
            date: '17-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 12,
            unitCost: 3,
            totalCost: 36
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Bread',
            quantity: 15,
            unitCost: 9,
            totalCost: 135
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 10,
            unitCost: 7,
            totalCost: 70
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Coke 500ml',
            quantity: 24,
            unitCost: 3,
            totalCost: 84
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 12,
            unitCost: 4,
            totalCost: 54
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 12,
            unitCost: 4,
            totalCost: 54
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 10,
            unitCost: 5,
            totalCost: 50
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            unitCost: 20,
            totalCost: 100
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Milk 1l',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '17-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 8,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '18-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'HomeMade',
            date: '18-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'HomeMade',
            date: '19-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'Joe Spaza Shop',
            date: '19-Feb-2016',
            product: 'Milk 1l',
            quantity: 1,
            unitCost: 9,
            totalCost: 9
        }, {
            shop: 'Epping Market',
            date: '20-Feb-2016',
            product: 'Bananas - loose',
            quantity: 20,
            unitCost: 1,
            totalCost: 20
        }, {
            shop: 'Epping Market',
            date: '20-Feb-2016',
            product: 'Apples - loose',
            quantity: 90,
            unitCost: 1,
            totalCost: 135
        }, {
            shop: 'Epping Market',
            date: '20-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 20,
            unitCost: 3,
            totalCost: 60
        }, {
            shop: 'HomeMade',
            date: '20-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '20-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '20-Feb-2016',
            product: 'Bread',
            quantity: 10,
            unitCost: 9,
            totalCost: 90
        }, {
            shop: 'Makro',
            date: '20-Feb-2016',
            product: 'Imasi',
            quantity: 10,
            unitCost: 17,
            totalCost: 170
        }, {
            shop: 'Makro',
            date: '20-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 5,
            unitCost: 20,
            totalCost: 100
        }, {
            shop: 'Makro',
            date: '20-Feb-2016',
            product: 'Milk 1l',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '20-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 10,
            unitCost: 8,
            totalCost: 80
        }, {
            shop: 'Joe Spaza Shop',
            date: '23-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 9,
            totalCost: 27
        }, {
            shop: 'Epping Market',
            date: '24-Feb-2016',
            product: 'Bananas - loose',
            quantity: 10,
            unitCost: 1,
            totalCost: 10
        }, {
            shop: 'Epping Market',
            date: '24-Feb-2016',
            product: 'Apples - loose',
            quantity: 90,
            unitCost: 1,
            totalCost: 135
        }, {
            shop: 'Epping Market',
            date: '24-Feb-2016',
            product: 'Mixed Sweets 5s',
            quantity: 8,
            unitCost: 3,
            totalCost: 24
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Bread',
            quantity: 15,
            unitCost: 9,
            totalCost: 135
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 10,
            unitCost: 7,
            totalCost: 70
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Coke 500ml',
            quantity: 18,
            unitCost: 3,
            totalCost: 63
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 6,
            unitCost: 4,
            totalCost: 27
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 6,
            unitCost: 4,
            totalCost: 27
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 10,
            unitCost: 5,
            totalCost: 50
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Milk 1l',
            quantity: 20,
            unitCost: 7,
            totalCost: 140
        }, {
            shop: 'Makro',
            date: '24-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 15,
            unitCost: 8,
            totalCost: 120
        }, {
            shop: 'HomeMade',
            date: '25-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'HomeMade',
            date: '26-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '26-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Joe Spaza Shop',
            date: '26-Feb-2016',
            product: 'Bread',
            quantity: 1,
            unitCost: 11,
            totalCost: 11
        }, {
            shop: 'Joe Spaza Shop',
            date: '26-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 2,
            unitCost: 6,
            totalCost: 13
        }, {
            shop: 'Joe Spaza Shop',
            date: '26-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 1,
            unitCost: 8,
            totalCost: 8
        }, {
            shop: 'Joe Spaza Shop',
            date: '26-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 1,
            unitCost: 30,
            totalCost: 30
        }, {
            shop: 'Epping Market',
            date: '27-Feb-2016',
            product: 'Bananas - loose',
            quantity: 10,
            unitCost: 1,
            totalCost: 10
        }, {
            shop: 'Epping Market',
            date: '27-Feb-2016',
            product: 'Apples - loose',
            quantity: 60,
            unitCost: 1,
            totalCost: 90
        }, {
            shop: 'HomeMade',
            date: '27-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 5,
            unitCost: 20,
            totalCost: 100
        }, {
            shop: 'HomeMade',
            date: '27-Feb-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Bread',
            quantity: 20,
            unitCost: 9,
            totalCost: 180
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Coke 500ml',
            quantity: 24,
            unitCost: 3,
            totalCost: 84
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Cream Soda 500ml',
            quantity: 12,
            unitCost: 4,
            totalCost: 54
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Fanta 500ml',
            quantity: 12,
            unitCost: 4,
            totalCost: 54
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 15,
            unitCost: 5,
            totalCost: 75
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 10,
            unitCost: 20,
            totalCost: 200
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Milk 1l',
            quantity: 20,
            unitCost: 7,
            totalCost: 140
        }, {
            shop: 'Makro',
            date: '27-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 15,
            unitCost: 8,
            totalCost: 120
        }, {
            shop: 'HomeMade',
            date: '28-Feb-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '28-Feb-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Joe Spaza Shop',
            date: '28-Feb-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 8,
            totalCost: 25
        }, {
            shop: 'Joe Spaza Shop',
            date: '28-Feb-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 8,
            totalCost: 17
        }, {
            shop: 'Joe Spaza Shop',
            date: '28-Feb-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 11,
            totalCost: 55
        }, {
            shop: 'HomeMade',
            date: '01-Mar-2016',
            product: 'Shampoo 1 litre',
            quantity: 2,
            unitCost: 20,
            totalCost: 40
        }, {
            shop: 'HomeMade',
            date: '01-Mar-2016',
            product: 'Soap Bar',
            quantity: 5,
            unitCost: 3,
            totalCost: 15
        }, {
            shop: 'Joe Spaza Shop',
            date: '01-Mar-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 8,
            totalCost: 25
        }, {
            shop: 'Joe Spaza Shop',
            date: '01-Mar-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 8,
            totalCost: 17
        }, {
            shop: 'Joe Spaza Shop',
            date: '01-Mar-2016',
            product: 'Top Class Soy Mince',
            quantity: 3,
            unitCost: 11,
            totalCost: 33
        }];


        var purchasesOutPut = [{
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 7,
            totalCost: 21
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Coke 500ml',
            quantity: 3,
            unitCost: 3,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 4,
            unitCost: 4,
            totalCost: 18
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 2,
            unitCost: 4,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 5,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Imasi',
            quantity: 1,
            unitCost: 17,
            totalCost: 17
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 3,
            unitCost: 20,
            totalCost: 60
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Milk 1l',
            quantity: 4,
            unitCost: 7,
            totalCost: 28
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 8,
            totalCost: 40
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Bananas - loose',
            quantity: 4,
            unitCost: 1,
            totalCost: 4
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Apples - loose',
            quantity: 10,
            unitCost: 1,
            totalCost: 15
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Mixed Sweets 5s',
            quantity: 60,
            unitCost: 3,
            totalCost: 180
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Bread',
            quantity: 30,
            unitCost: 9,
            totalCost: 270
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Coke 500ml',
            quantity: 36,
            unitCost: 3,
            totalCost: 126
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 15,
            unitCost: 5,
            totalCost: 75
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 15,
            unitCost: 20,
            totalCost: 300
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Milk 1l',
            quantity: 25,
            unitCost: 7,
            totalCost: 175
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 10,
            unitCost: 8,
            totalCost: 80
        }];

        assert.deepEqual(purchasesOutPut, purchases.weekPurchasesInfo(purchasesData, initialDate, lastDate));
    })

})


describe('listed costs mapped', function() {
    it('return costs mapped', function() {

        var costs = [{
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 3,
            unitCost: 7,
            totalCost: 21
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Coke 500ml',
            quantity: 3,
            unitCost: 3,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 4,
            unitCost: 4,
            totalCost: 18
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 2,
            unitCost: 4,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 2,
            unitCost: 5,
            totalCost: 10
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Imasi',
            quantity: 1,
            unitCost: 17,
            totalCost: 17
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 3,
            unitCost: 20,
            totalCost: 60
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Milk 1l',
            quantity: 4,
            unitCost: 7,
            totalCost: 28
        }, {
            shop: 'Makro',
            date: '23-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 5,
            unitCost: 8,
            totalCost: 40
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Bananas - loose',
            quantity: 4,
            unitCost: 1,
            totalCost: 4
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Apples - loose',
            quantity: 10,
            unitCost: 1,
            totalCost: 15
        }, {
            shop: 'Epping Market',
            date: '28-Jan-2016',
            product: 'Mixed Sweets 5s',
            quantity: 60,
            unitCost: 3,
            totalCost: 180
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Shampoo 1 litre',
            quantity: 1,
            unitCost: 20,
            totalCost: 20
        }, {
            shop: 'HomeMade',
            date: '28-Jan-2016',
            product: 'Soap Bar',
            quantity: 3,
            unitCost: 3,
            totalCost: 9
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Bread',
            quantity: 30,
            unitCost: 9,
            totalCost: 270
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Chakalaka Can',
            quantity: 15,
            unitCost: 7,
            totalCost: 105
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Coke 500ml',
            quantity: 36,
            unitCost: 3,
            totalCost: 126
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Cream Soda 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Fanta 500ml',
            quantity: 24,
            unitCost: 4,
            totalCost: 108
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Gold Dish Vegetable Curry Can',
            quantity: 15,
            unitCost: 5,
            totalCost: 75
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Imasi',
            quantity: 15,
            unitCost: 17,
            totalCost: 255
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Iwisa Pap 5kg',
            quantity: 15,
            unitCost: 20,
            totalCost: 300
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Milk 1l',
            quantity: 25,
            unitCost: 7,
            totalCost: 175
        }, {
            shop: 'Makro',
            date: '28-Jan-2016',
            product: 'Top Class Soy Mince',
            quantity: 10,
            unitCost: 8,
            totalCost: 80
        }];


        var costsMap = {
            'Chakalaka Can': 126,
            'Top Class Soy Mince': 120,
            'Milk 1l': 203,
            'Iwisa Pap 5kg': 360,
            'Imasi': 272,
            'Gold Dish Vegetable Curry Can': 85,
            'Fanta 500ml': 117,
            'Cream Soda 500ml': 126,
            'Bread': 270,
            'Soap Bar': 9,
            'Shampoo 1 litre': 20,
            'Mixed Sweets 5s': 180,
            'Coke 500ml': 136,
            'Apples - loose': 15,
            'Bananas - loose': 4
        }

        assert.deepEqual(costsMap, purchases.mappedPurchases(costs));
    });


})

describe('list cost and sales calculated ', function() {
    it('return cost and sales calculated', function() {


      var salesMapped = {
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

      var costsMapped = {
          'Chakalaka Can': 126,
          'Top Class Soy Mince': 120,
          'Milk 1l': 203,
          'Iwisa Pap 5kg': 360,
          'Imasi': 272,
          'Gold Dish Vegetable Curry Can': 85,
          'Fanta 500ml': 117,
          'Cream Soda 500ml': 126,
          'Bread': 270,
          'Soap Bar': 9,
          'Shampoo 1 litre': 20,
          'Mixed Sweets 5s': 180,
          'Coke 500ml': 136,
          'Apples - loose': 15,
          'Bananas - loose': 4
      }


      var outPut = {
        "Apples - loose": 57,
        "Bananas - loose": 90 ,
        "Bread": 270,
        "Chakalaka Can": 104,
        "Coke 500ml": 188,
        "Cream Soda 500ml": 28,
        "Fanta 500ml": 81,
        "Gold Dish Vegetable Curry Can": 68,
        "Imasi": 478,
        "Iwisa Pap 5kg": 150,
        "Milk 1l": 187,
        "Mixed Sweets 5s": -60,
        "Shampoo 1 litre": 70,
        "Soap Bar": 63,
        "Top Class Soy Mince": 144

      }


        assert.deepEqual(outPut, purchases.salesPurchasesCalculation(costsMapped, salesMapped));
    });

})

describe('list most profitable product ', function() {
    it('return most profitable product', function() {

      var profitOfProducts = {
        "Apples - loose": 57,
        "Bananas - loose": 90 ,
        "Bread": 270,
        "Chakalaka Can": 104,
        "Coke 500ml": 188,
        "Cream Soda 500ml": 28,
        "Fanta 500ml": 81,
        "Gold Dish Vegetable Curry Can": 68,
        "Imasi": 478,
        "Iwisa Pap 5kg": 150,
        "Milk 1l": 187,
        "Mixed Sweets 5s": -60,
        "Shampoo 1 litre": 70,
        "Soap Bar": 63,
        "Top Class Soy Mince": 144

      };

      var mostProfitProduct = {
        amount: 478,
        product: "Imasi"
      };


      assert.deepEqual(mostProfitProduct, purchases.mostProfitableProduct(profitOfProducts));

});

})
