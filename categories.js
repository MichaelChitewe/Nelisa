var fs = require('fs');

exports.categoriesMapped = function(filePath) {
    var categoryInfo = fs.readFileSync(filePath, 'utf-8');
    var newCategoryInfo = categoryInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    var categoryMap = {};

    for (var i = 0; i < newCategoryInfo.length; i++) {
        newCategoryInfo[i] = newCategoryInfo[i]
            .split(',');

        categoryMap[newCategoryInfo[i][0]] = newCategoryInfo[i][1];

    }

    return categoryMap;
}

exports.categoriesSummed = function(productsData, categoryData) {

    var categoriesTotalled = {};

    for (var key in categoryData) {

        for (var prop in productsData) {

            if (key === prop) {

                if (!categoriesTotalled.hasOwnProperty(categoryData[key])) {

                    categoriesTotalled[categoryData[key]] = productsData[prop];

                } else {

                    categoriesTotalled[categoryData[key]] += productsData[prop];

                }

            }


        }

    }

    return categoriesTotalled;
}

exports.mostPopularCategory = function(categoriesTotalled) {


    var max = 0;
    var mostPopularCata = {};

    for (var prop in categoriesTotalled) {
        if (categoriesTotalled[prop] > max) {
            max = categoriesTotalled[prop];

            mostPopularCata = {

                amount: parseInt(max),
                item: prop

            }
        }
    }

    return mostPopularCata;
}

exports.leastPopularCategory = function(categoriesTotalled) {

    var min = 300;
    var leastPopularCata = {};

    for (var prop in categoriesTotalled) {
        if (categoriesTotalled[prop] < min) {
            min = categoriesTotalled[prop];

            leastPopularCata = {

                amount: parseInt(min),
                item: prop

            }

        }
    }


    return leastPopularCata;
}
