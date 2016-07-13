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
};

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
};

exports.mostPopularCategory = function(categoriesTotalled) {


    var max = 0;
    var mostPopularCata = {};

    for (var prop in categoriesTotalled) {
        if (categoriesTotalled[prop] > max) {
            max = categoriesTotalled[prop];

            mostPopularCata = {

                description: 'most popular category',
                amount: parseInt(max),
                item: prop

            };
        }
    }

    return mostPopularCata;
};

exports.leastPopularCategory = function(categoriesTotalled) {

    var min = 300;
    var leastPopularCata = {};

    for (var prop in categoriesTotalled) {
        if (categoriesTotalled[prop] < min) {
            min = categoriesTotalled[prop];

            leastPopularCata = {
                description: 'least popular category',
                amount: parseInt(min),
                item: prop

            };

        }
    }


    return leastPopularCata;
};


exports.totalCostsCategories = function(costsData, categoryData) {

    var categoriesTotalled = {};

    for (var key in categoryData) {

        for (var prop in costsData) {

            if (key === prop) {

                if (!categoriesTotalled.hasOwnProperty(categoryData[key])) {

                    categoriesTotalled[categoryData[key]] = 0;

                }

                    categoriesTotalled[categoryData[key]] += costsData[prop];

                }

            }

        }

    return categoriesTotalled;
};

exports.mostProfitableCategory = function(categoriesTotal) {

    var max = 0;
    var mostProfCat = {};

    for (var prop in categoriesTotal) {

        if (categoriesTotal[prop] > max) {
            max = categoriesTotal[prop];

            mostProfCat = {
                description: 'most profitable category',
                item: prop,
                amount: parseInt(max)

            };
        }
    }

    return mostProfCat;
};
