var fs = require('fs');

exports.dataFromSales = function(filePath) {
    var salesInfo = fs.readFileSync(filePath, 'utf-8');

    var newSalesInfo = salesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    for (var i = 0; i < newSalesInfo.length; i++) {
        newSalesInfo[i] = newSalesInfo[i]
            .split(',')
            .splice(1);

}

    var sales = newSalesInfo.map(function(items) {

        return {
          date: items[0] + '-2016',
          product: items[1],
          quantity: parseInt(items[2]),
          price: parseInt(items[3].replace(/R/, ""))
        };

    });

return sales;

};

exports.groupedSales = function(salesData){

    var groupedProducts = {};

    salesData.forEach(function(products) {

        if (!groupedProducts.hasOwnProperty(products.product)) {
            groupedProducts[products.product] = 0;
        }
        groupedProducts[products.product] += products.quantity;
    });


    return groupedProducts;
};


exports.mostPopularItem = function(groupedProducts) {

    var max = 0;
    var mostPopular = {};

    for (var prop in groupedProducts) {
        if (groupedProducts[prop] > max) {
            max = groupedProducts[prop];

            mostPopular = {
                description: 'most popular product',
                item: prop,
                amount: Number(max)

            };

        }

    }

    return mostPopular;
};


exports.leastPopularItem = function(groupedProducts) {

    var min = 54;
    var leastPopular = {};

    for (var a in groupedProducts) {

        if (groupedProducts[a] < min) {
            min = groupedProducts[a];

            leastPopular = {
                description: 'least popular product',
                item: a,
                amount: min

            };

        }

    }


    return leastPopular;
};


exports.totalledGroupedSales = function(salesData){

  var groupedWeekSales = {};

  salesData.forEach(function(products) {

      if (!groupedWeekSales.hasOwnProperty(products.product)) {
          groupedWeekSales[products.product] = 0;
      }
      groupedWeekSales[products.product] += products.quantity * products.price;
  });

  return groupedWeekSales;

};
