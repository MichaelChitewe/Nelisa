var assert = require('assert');
var weekSales = require('../week-sales');

describe('list the week sales sorted',function() {

    it('return the week sales sorted', function() {

    var sortedSales = weekSales.weekSalesSorted('./input/week1.csv');


      assert.deepEqual(sortedSales);
    })

    })
