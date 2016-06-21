var assert = require('assert');
var products = require('../sales');


describe('list the products length week 1-4', function() {

    it('return the product length week 1-4', function() {

        assert.equal(105, products.linesInFiles('./input/week1.csv').length);
        assert.equal(117, products.linesInFiles('./input/week2.csv').length);
        assert.equal(104, products.linesInFiles('./input/week3.csv').length);
        assert.equal(119, products.linesInFiles('./input/week4.csv').length);

    });

})


describe('list the products grouped week 1-4', function() {

    it('return grouped products for week 1-4', function() {


       var week1Data = [ { product: 'Milk 1l', quantity: 3 },
  { product: 'Imasi', quantity: 1 },
  { product: 'Bread', quantity: 2 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 2 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 3 },
  { product: 'Apples - loose', quantity: 5 },
  { product: 'Mixed Sweets 5s', quantity: 9 },
  { product: 'Milk 1l', quantity: 4 },
  { product: 'Imasi', quantity: 4 },
  { product: 'Bread', quantity: 5 },
  { product: 'Chakalaka Can', quantity: 4 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 5 },
  { product: 'Fanta 500ml', quantity: 5 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 4 },
  { product: 'Iwisa Pap 5kg', quantity: 5 },
  { product: 'Top Class Soy Mince', quantity: 3 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 2 },
  { product: 'Bananas - loose', quantity: 0 },
  { product: 'Apples - loose', quantity: 0 },
  { product: 'Mixed Sweets 5s', quantity: 0 },
  { product: 'Milk 1l', quantity: 7 },
  { product: 'Imasi', quantity: 4 },
  { product: 'Bread', quantity: 7 },
  { product: 'Chakalaka Can', quantity: 4 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 5 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 3 },
  { product: 'Iwisa Pap 5kg', quantity: 3 },
  { product: 'Top Class Soy Mince', quantity: 3 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 2 },
  { product: 'Bananas - loose', quantity: 10 },
  { product: 'Apples - loose', quantity: 8 },
  { product: 'Mixed Sweets 5s', quantity: 15 },
  { product: 'Milk 1l', quantity: 5 },
  { product: 'Imasi', quantity: 8 },
  { product: 'Bread', quantity: 8 },
  { product: 'Chakalaka Can', quantity: 2 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 7 },
  { product: 'Coke 500ml', quantity: 12 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 4 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 3 },
  { product: 'Bananas - loose', quantity: 16 },
  { product: 'Apples - loose', quantity: 8 },
  { product: 'Mixed Sweets 5s', quantity: 12 },
  { product: 'Milk 1l', quantity: 10 },
  { product: 'Imasi', quantity: 3 },
  { product: 'Bread', quantity: 12 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 6 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 9 },
  { product: 'Cream Soda 500ml', quantity: 8 },
  { product: 'Iwisa Pap 5kg', quantity: 2 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 8 },
  { product: 'Apples - loose', quantity: 12 },
  { product: 'Mixed Sweets 5s', quantity: 5 },
  { product: 'Milk 1l', quantity: 6 },
  { product: 'Imasi', quantity: 4 },
  { product: 'Bread', quantity: 7 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 7 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 3 },
  { product: 'Iwisa Pap 5kg', quantity: 6 },
  { product: 'Top Class Soy Mince', quantity: 8 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 3 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 0 },
  { product: 'Mixed Sweets 5s', quantity: 5 },
  { product: 'Milk 1l', quantity: 4 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 4 },
  { product: 'Chakalaka Can', quantity: 2 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 7 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 8 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 3 } ];

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


     var week2Data = [ { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 2 },
  { product: 'Chakalaka Can', quantity: 1 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 4 },
  { product: 'Coke 500ml', quantity: 4 },
  { product: 'Cream Soda 500ml', quantity: 1 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 5 },
  { product: 'Apples - loose', quantity: 2 },
  { product: 'Mixed Sweets 5s', quantity: 9 },
  { product: 'Milk 1l', quantity: 3 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 7 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 6 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 5 },
  { product: 'Iwisa Pap 5kg', quantity: 2 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 5 },
  { product: 'Apples - loose', quantity: 0 },
  { product: 'Mixed Sweets 5s', quantity: 3 },
  { product: 'Milk 1l', quantity: 5 },
  { product: 'Imasi', quantity: 4 },
  { product: 'Bread', quantity: 2 },
  { product: 'Chakalaka Can', quantity: 0 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 1 },
  { product: 'Coke 500ml', quantity: 3 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 3 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 3 },
  { product: 'Apples - loose', quantity: 2 },
  { product: 'Mixed Sweets 5s', quantity: 7 },
  { product: 'Heart Chocolates', quantity: 3 },
  { product: 'Rose (plastic)', quantity: 1 },
  { product: 'Milk 1l', quantity: 5 },
  { product: 'Imasi', quantity: 4 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 2 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 1 },
  { product: 'Fanta 500ml', quantity: 2 },
  { product: 'Coke 500ml', quantity: 3 },
  { product: 'Cream Soda 500ml', quantity: 1 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 4 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 8 },
  { product: 'Heart Chocolates', quantity: 5 },
  { product: 'Rose (plastic)', quantity: 3 },
  { product: 'Milk 1l', quantity: 3 },
  { product: 'Imasi', quantity: 9 },
  { product: 'Bread', quantity: 2 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 1 },
  { product: 'Fanta 500ml', quantity: 0 },
  { product: 'Coke 500ml', quantity: 2 },
  { product: 'Cream Soda 500ml', quantity: 1 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 2 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 3 },
  { product: 'Heart Chocolates', quantity: 2 },
  { product: 'Valentine Cards', quantity: 6 },
  { product: 'Rose (plastic)', quantity: 2 },
  { product: 'Milk 1l', quantity: 6 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 5 },
  { product: 'Chakalaka Can', quantity: 7 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 15 },
  { product: 'Fanta 500ml', quantity: 6 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 4 },
  { product: 'Iwisa Pap 5kg', quantity: 3 },
  { product: 'Top Class Soy Mince', quantity: 4 },
  { product: 'Shampoo 1 litre', quantity: 4 },
  { product: 'Soap Bar', quantity: 2 },
  { product: 'Bananas - loose', quantity: 4 },
  { product: 'Apples - loose', quantity: 2 },
  { product: 'Mixed Sweets 5s', quantity: 6 },
  { product: 'Heart Chocolates', quantity: 10 },
  { product: 'Valentine Cards', quantity: 5 },
  { product: 'Rose (plastic)', quantity: 7 },
  { product: 'Milk 1l', quantity: 6 },
  { product: 'Imasi', quantity: 5 },
  { product: 'Bread', quantity: 7 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 4 },
  { product: 'Fanta 500ml', quantity: 7 },
  { product: 'Coke 500ml', quantity: 14 },
  { product: 'Cream Soda 500ml', quantity: 8 },
  { product: 'Iwisa Pap 5kg', quantity: 3 },
  { product: 'Top Class Soy Mince', quantity: 7 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 5 },
  { product: 'Apples - loose', quantity: 9 },
  { product: 'Mixed Sweets 5s', quantity: 18 },
  { product: 'Heart Chocolates', quantity: 0 },
  { product: 'Valentine Cards', quantity: 3 },
  { product: 'Rose (plastic)', quantity: 1 } ];

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



        var week3Data = [ { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 1 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 5 },
  { product: 'Coke 500ml', quantity: 4 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 1 },
  { product: 'Apples - loose', quantity: 1 },
  { product: 'Mixed Sweets 5s', quantity: 3 },
  { product: 'Milk 1l', quantity: 7 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 4 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 2 },
  { product: 'Coke 500ml', quantity: 1 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 2 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 2 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 5 },
  { product: 'Milk 1l', quantity: 8 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 0 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 0 },
  { product: 'Coke 500ml', quantity: 2 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 6 },
  { product: 'Mixed Sweets 5s', quantity: 5 },
  { product: 'Milk 1l', quantity: 3 },
  { product: 'Imasi', quantity: 5 },
  { product: 'Bread', quantity: 5 },
  { product: 'Chakalaka Can', quantity: 1 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 0 },
  { product: 'Fanta 500ml', quantity: 0 },
  { product: 'Coke 500ml', quantity: 3 },
  { product: 'Cream Soda 500ml', quantity: 2 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 1 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 2 },
  { product: 'Milk 1l', quantity: 5 },
  { product: 'Imasi', quantity: 3 },
  { product: 'Bread', quantity: 5 },
  { product: 'Chakalaka Can', quantity: 2 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 1 },
  { product: 'Fanta 500ml', quantity: 1 },
  { product: 'Coke 500ml', quantity: 1 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 2 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 3 },
  { product: 'Apples - loose', quantity: 5 },
  { product: 'Mixed Sweets 5s', quantity: 4 },
  { product: 'Milk 1l', quantity: 4 },
  { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 3 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 5 },
  { product: 'Cream Soda 500ml', quantity: 6 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 3 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 3 },
  { product: 'Bananas - loose', quantity: 6 },
  { product: 'Apples - loose', quantity: 4 },
  { product: 'Mixed Sweets 5s', quantity: 8 },
  { product: 'Milk 1l', quantity: 1 },
  { product: 'Imasi', quantity: 1 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 2 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 2 } ];

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


       var week4Data = [ { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 0 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 1 },
  { product: 'Fanta 500ml', quantity: 2 },
  { product: 'Coke 500ml', quantity: 0 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 0 },
  { product: 'Top Class Soy Mince', quantity: 0 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 0 },
  { product: 'Apples - loose', quantity: 1 },
  { product: 'Mixed Sweets 5s', quantity: 3 },
  { product: 'Milk 1l', quantity: 8 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 2 },
  { product: 'Chakalaka Can', quantity: 2 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 1 },
  { product: 'Fanta 500ml', quantity: 1 },
  { product: 'Coke 500ml', quantity: 3 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 2 },
  { product: 'Top Class Soy Mince', quantity: 1 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 0 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 1 },
  { product: 'Mixed Sweets 5s', quantity: 3 },
  { product: 'Milk 1l', quantity: 4 },
  { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 6 },
  { product: 'Chakalaka Can', quantity: 1 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 2 },
  { product: 'Fanta 500ml', quantity: 1 },
  { product: 'Coke 500ml', quantity: 2 },
  { product: 'Cream Soda 500ml', quantity: 1 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 2 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 1 },
  { product: 'Bananas - loose', quantity: 5 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 7 },
  { product: 'Milk 1l', quantity: 8 },
  { product: 'Imasi', quantity: 6 },
  { product: 'Bread', quantity: 7 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 4 },
  { product: 'Fanta 500ml', quantity: 6 },
  { product: 'Coke 500ml', quantity: 8 },
  { product: 'Cream Soda 500ml', quantity: 5 },
  { product: 'Iwisa Pap 5kg', quantity: 3 },
  { product: 'Top Class Soy Mince', quantity: 7 },
  { product: 'Shampoo 1 litre', quantity: 1 },
  { product: 'Soap Bar', quantity: 4 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 8 },
  { product: 'Mixed Sweets 5s', quantity: 5 },
  { product: 'Milk 1l', quantity: 8 },
  { product: 'Imasi', quantity: 8 },
  { product: 'Bread', quantity: 5 },
  { product: 'Chakalaka Can', quantity: 3 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 7 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 7 },
  { product: 'Cream Soda 500ml', quantity: 4 },
  { product: 'Iwisa Pap 5kg', quantity: 3 },
  { product: 'Top Class Soy Mince', quantity: 8 },
  { product: 'Shampoo 1 litre', quantity: 0 },
  { product: 'Soap Bar', quantity: 3 },
  { product: 'Bananas - loose', quantity: 2 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 1 },
  { product: 'Milk 1l', quantity: 8 },
  { product: 'Imasi', quantity: 5 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 12 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 9 },
  { product: 'Fanta 500ml', quantity: 6 },
  { product: 'Coke 500ml', quantity: 18 },
  { product: 'Cream Soda 500ml', quantity: 3 },
  { product: 'Iwisa Pap 5kg', quantity: 4 },
  { product: 'Top Class Soy Mince', quantity: 12 },
  { product: 'Shampoo 1 litre', quantity: 5 },
  { product: 'Soap Bar', quantity: 3 },
  { product: 'Bananas - loose', quantity: 1 },
  { product: 'Apples - loose', quantity: 3 },
  { product: 'Mixed Sweets 5s', quantity: 1 },
  { product: 'Milk 1l', quantity: 3 },
  { product: 'Imasi', quantity: 2 },
  { product: 'Bread', quantity: 4 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 6 },
  { product: 'Fanta 500ml', quantity: 3 },
  { product: 'Coke 500ml', quantity: 4 },
  { product: 'Cream Soda 500ml', quantity: 6 },
  { product: 'Iwisa Pap 5kg', quantity: 2 },
  { product: 'Top Class Soy Mince', quantity: 9 },
  { product: 'Shampoo 1 litre', quantity: 4 },
  { product: 'Soap Bar', quantity: 7 },
  { product: 'Bananas - loose', quantity: 6 },
  { product: 'Apples - loose', quantity: 8 },
  { product: 'Mixed Sweets 5s', quantity: 8 },
  { product: 'Milk 1l', quantity: 4 },
  { product: 'Imasi', quantity: 3 },
  { product: 'Bread', quantity: 3 },
  { product: 'Chakalaka Can', quantity: 5 },
  { product: 'Gold Dish Vegetable Curry Can', quantity: 4 },
  { product: 'Fanta 500ml', quantity: 2 },
  { product: 'Coke 500ml', quantity: 3 },
  { product: 'Cream Soda 500ml', quantity: 0 },
  { product: 'Iwisa Pap 5kg', quantity: 1 },
  { product: 'Top Class Soy Mince', quantity: 4 },
  { product: 'Shampoo 1 litre', quantity: 3 },
  { product: 'Soap Bar', quantity: 6 },
  { product: 'Bananas - loose', quantity: 4 },
  { product: 'Apples - loose', quantity: 5 },
  { product: 'Mixed Sweets 5s', quantity: 12 } ];

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

        assert.deepEqual(wk1GroupedProducts, products.groupedData(week1Data));
        assert.deepEqual(wk2GroupedProducts, products.groupedData(week2Data));
        assert.deepEqual(wk3GroupedProducts, products.groupedData(week3Data));
        assert.deepEqual(Wk4GroupedProducts, products.groupedData(week4Data));

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
