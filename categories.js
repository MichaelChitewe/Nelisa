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
        //  console.log(newCategoryInfo[i]);

        categoryMap[newCategoryInfo[i][0]] = newCategoryInfo[i][1];

    }

    //console.log(categoryMap);
    return categoryMap;
}

exports.categoriesSummed = function(product, category) {
    //
  for(var prop in product){
    for(var key in category){
  }

}

}






// exports.mappedCategories = function(categoriesList) {
//
//
//     var categoriesMapped = {};
//
//     categoriesList.forEach(function(categories) {
//
//         if (!categoriesMapped.hasOwnProperty(categories.category)) {
//             categoriesMapped[categories.category] = 0;
//         }
//         categoriesMapped[categories.category] += categories.product;
//     });
//     console.log(categoriesMapped);
//     return categoriesMapped;
//
// }
//

// exports.mostPopularCategory = function(category) {
//
//
//     var max = 0;
//     var mostPopularCata = {};
//
//     for (var prop in category) {
//         if (category[prop] > max) {
//             max = category[prop];
//
//             mostPopularCata = {
//
//                 amount: parseInt(max),
//                 item: prop
//
//             }
//         }
//     }
//     console.log(mostPopularCata);
//     return mostPopularCata;
// }
//
//
//
// exports.leastPopularCategory = function(category) {
//
//
//         var min = 0;
//         var leastPopularCata = {};
//
//         for (var prop in category) {
//             if (category[prop] < min) {
//                 min = category[prop];
//
//                 leastPopularCata = {
//
//                     amount: parseInt(min),
//                     item: prop
//
//                 }
//
//             }
//         }
//
//         console.log(leastPopularCata);
//         return leastPopularCata;
