var fs = require('fs');

exports.linesInFiles = function(filePath) {
    var salesInfo = fs.readFileSync(filePath, 'utf-8');

    var newSalesInfo = salesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    for (var i = 0; i < newSalesInfo.length; i++) {
        newSalesInfo[i] = newSalesInfo[i]
            .split(',')
            .splice(1)
            .splice(-3);
    }
    //console.log(newSalesInfo);
    return newSalesInfo;
}

exports.sortedProducts = function(newSalesInfo) {

    var salesList = newSalesInfo.map(function(items) {

            return {

                product: items[0],
                quantity: parseInt(items[1])
            }
        })
        // console.log(salesList.length);
         return salesList;
}


exports.groupedData = function(salesList) {

    var groupedProducts = {};

    salesList.forEach(function(products) {

        if (!groupedProducts.hasOwnProperty(products.product)) {
            groupedProducts[products.product] = 0;
        }
        groupedProducts[products.product] += products.quantity;
    });
    //console.log(groupedProducts);
    return groupedProducts;
}

exports.mostPopularItem = function(groupedProducts) {

    var max = 0;
    var mostPopular = {};

    for (var prop in groupedProducts) {
        if (groupedProducts[prop] > max) {
            max = groupedProducts[prop];

            mostPopular = {

                item: prop,
                amount: Number(max)

            }

        }

    }
    //  console.log(mostPopular);
    return mostPopular;
}


exports.leastPopularItem = function(groupedProducts) {

    var min = 54;
    var leastPopular = {};

    for (var a in groupedProducts) {

        if (groupedProducts[a] < min) {
            min = groupedProducts[a];

            leastPopular = {

                item: a,
                amount: min

            }

        }

    }

    /// console.log(leastPopular);
    return leastPopular;
}
