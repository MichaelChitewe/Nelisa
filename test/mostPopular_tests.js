var assert = require('assert');
var products = require('../mostPopular');
describe('list the products', function() {

    it('return the list of product names', function() {

        var allProducts = products.linesInFiles('./input/week1.csv');
        assert.deepEqual(allProducts);

    });

it('return most selling item', function(){
assert.deepEqual(mostSellingItem);




})

})
