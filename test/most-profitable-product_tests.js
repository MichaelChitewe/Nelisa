var assert = require('assert');
var purchases = require('../most-profitable-product');

describe('list of week1 purchases data length', function() {
    it('return week1 purchases data length', function() {

        var listPurchasesSorted = purchases.purchasesData('./input/purchases.csv').length;

        assert.deepEqual(listPurchasesSorted, 153);
    })

})

describe('list of a week1 purchases data', function() {

    it('return week1 purchases data', function() {





        var expectedMap = purchases.weekPurchasesMap();
assert.deepEqual(expectedMap);
    })


})
