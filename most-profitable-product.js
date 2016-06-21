var fs = require('fs');

exports.purchasesData = function(filePath) {
    var purchasesInfo = fs.readFileSync(filePath, 'utf-8');
    var newPurchasesInfo = purchasesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    var purchasesSortedInfo = [];

    for (var i = 0; i < newPurchasesInfo.length; i++) {
        newPurchasesInfo[i] = newPurchasesInfo[i]
            .split(';');

        var dateData = newPurchasesInfo[i][1] + '-2016';
        var dates = new Date(dateData);
        var dd = dates.getDate();
        var mm = dates.getMonth() + 1;
        var yyyy = dates.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        dates = mm + '/' + dd + '/' + yyyy;

        purchasesSortedInfo.push({

            shop: newPurchasesInfo[i][0],
            date: dates,
            product: newPurchasesInfo[i][2],
            unitCost: parseInt(newPurchasesInfo[i][3]),
            totalCost: parseInt(newPurchasesInfo[i][5]
                .replace(/R/, '')
                .replace(",", "."))

        });

    }

    //console.log(purchasesSortedInfo);
    return purchasesSortedInfo;
}

exports.weekPurchasesMap = function(startDate, endDate) {

    var weekPurchases = [];

    var startDate = new Date(dates);
    var endDate = startDate.getDate() + 6;

    purchasesSortedInfo.forEach(function(prop){
console.log(prop);

    })




}
