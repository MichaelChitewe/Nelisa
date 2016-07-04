var fs = require('fs');

exports.purchasesCategoryMap = function(filePath) {
    var purchasesInfo = fs.readFileSync(filePath, 'utf-8');
    var newPurchasesInfo = purchasesInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    var purchasesMap = {};

    for (var i = 0; i < newPurchasesInfo.length; i++) {
        newPurchasesInfo[i] = newPurchasesInfo[i]
            .split(',');

        purchasesMap[newPurchasesInfo[i][0]] = newPurchasesInfo[i][1];

    };

    return purchasesMap;
}


exports.totalCostsCategories = function(costsData, categoryData) {

    var categoriesTotalled = {};

    for (var key in categoryData) {

        for (var prop in costsData) {

            if (key === prop) {

                if (!categoriesTotalled.hasOwnProperty(categoryData[key])) {

                    categoriesTotalled[categoryData[key]] = costsData[prop];

                } else {

                    categoriesTotalled[categoryData[key]] += costsData[prop];

                }

            }

        }

    }

    return categoriesTotalled;
}

exports.mostProfitableCategory = function(categoriesTotal) {

    var max = 0;
    var mostProfCat = {};

    for (var prop in categoriesTotal) {

        if (categoriesTotal[prop] > max) {
            max = categoriesTotal[prop];

            mostProfCat = {
                productCategory: prop,
                amount: parseInt(max)

            }
        }
    }

    return mostProfCat;
}
