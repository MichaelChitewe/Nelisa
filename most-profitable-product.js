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

    var salesWeek1Costs = [];
    var salesWeek2Costs = [];
    var salesWeek3Costs = [];
    var salesWeek4Costs = [];

    for (var i = 0; i < purchasesSortedInfo.length; i++) {

        var startDate = new Date(purchasesSortedInfo[i].date);

        if (startDate.getMonth() === 0) {

            salesWeek1Costs.push(purchasesSortedInfo[i]);
        }

        if (startDate.getDate() < 7 && startDate.getMonth() === 1) {

            salesWeek2Costs.push(purchasesSortedInfo[i]);
        }

        if (startDate.getDate() > 8 && startDate.getDate() < 15) {
            salesWeek3Costs.push(purchasesSortedInfo[i]);
        }

        if (startDate.getDate() > 15 && startDate.getDate() < 21) {
            salesWeek4Costs.push(purchasesSortedInfo[i]);
        }
    }

    console.log(salesWeek4Costs);
    return salesWeek4Costs;



}
