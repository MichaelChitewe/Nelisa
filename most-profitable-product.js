var fs = require('fs');

exports.weekPurchasesData = function(filePath) {
    var purchasesInfo = fs.readFileSync(filePath, 'utf-8');
    var newPurchasesInfo = purchasesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    var purchasesSortedInfo = [];

    for (var i = 0; i < newPurchasesInfo.length; i++) {
        newPurchasesInfo[i] = newPurchasesInfo[i]
            .split(';');

        purchasesSortedInfo.push({

            shop: newPurchasesInfo[i][0],
            date: newPurchasesInfo[i][1] + '-2016',
            product: newPurchasesInfo[i][2],
            quantity: parseInt(newPurchasesInfo[i][3]),
            unitCost: parseInt(newPurchasesInfo[i][4]
                .replace(/R/, '')
                .replace(",", ".")),
            totalCost: parseInt(newPurchasesInfo[i][5]
                .replace(/R/, '')
                .replace(",", "."))

        });
    }

    return purchasesSortedInfo;
};

exports.weekPurchasesInfo = function(purchasesSorted, startDate, endDate) {

    var weekCosts = [];

    var startDt = new Date(startDate);
    var endDt = new Date(endDate);


    for (var i = 0; i < purchasesSorted.length; i++) {

        var day = new Date(purchasesSorted[i].date);
console.log(day);
        if (day >= startDt && day <= endDt) {
            weekCosts.push(purchasesSorted[i]);
        }

    }

    return weekCosts;
};


exports.mappedPurchases = function(weekCosts) {

    var purchasesMapped = {};

    weekCosts.forEach(function(products) {

        if (!purchasesMapped.hasOwnProperty(products.product)) {
            purchasesMapped[products.product] = 0;
        }
        purchasesMapped[products.product] += products.totalCost;
    });

    return purchasesMapped;

};

exports.salesPurchasesCalculation = function(costs, sales) {

    var productsCalculation = {};

    for (var key in costs) {

        for (var prop in sales) {

            if (key === prop) {

                productsCalculation[key] = (sales[prop] - costs[key]);

            }
        }
    }

    return productsCalculation;
};

exports.mostProfitableProduct = function(productsMap){

    var maxProfit = -100;
    var mostProfitable = {};

    for (var prop in productsMap) {

        if (productsMap[prop] > maxProfit) {
            maxProfit = productsMap[prop];

            mostProfitable = {
                description: 'most profitable product',
                item: prop,
                amount: parseInt(maxProfit)
            };
        }
    }

    return mostProfitable;
};
