var assert = require('assert');
var weekSales = require('../week-sales');

describe('list the week sales sorted data length',function() {

    it('return the week sales sorted data length ', function() {

    var sortedSales = weekSales.weekSalesSorted('./input/week1.csv');


      assert.deepEqual(sortedSales.length, 105);
    })

    })

describe('', function(){
  it('', function(){




  })
  
})
