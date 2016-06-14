var fs = require('fs');

exports.purchasesSorted = function(filePath) {
    var purchasesInfo = fs.readFileSync(filePath, 'utf-8');
    var newPurchasesInfo = purchasesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);


    var purchasesSortedInfo = {};

    for (var i = 0; i < newPurchasesInfo.length; i++) {
        newPurchasesInfo[i] = newPurchasesInfo[i]
              .split(';');
//console.log(newPurchasesInfo[i]);
        purchasesSortedInfo = {

            date: newPurchasesInfo[i][1],
            product: newPurchasesInfo[i][2],
            price: newPurchasesInfo[i][5]

        }

    }

    console.log(purchasesSortedInfo);
    return purchasesSortedInfo;
}
