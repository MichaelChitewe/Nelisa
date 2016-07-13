var fs = require('fs');
var Handlebars = require('handlebars');

var products = require('./sales');
var categories = require('./categories');
var purchases = require('./most-profitable-product');


var salesListData = products.dataFromSales('./input/week1.csv');
var groupedProducts = products.groupedSales(salesListData);
var leastPopular = products.leastPopularItem(groupedProducts);
var mostPopular = products.mostPopularItem(groupedProducts);


// var productCategoryMapping = categories.categoriesMapped('./input/categories.csv');
// var categoriesTotalled = categories.categoriesSummed(groupedProducts, productCategoryMapping);
// var mostPopularCata =  categories.mostPopularCategory(categoriesTotalled);
// var leastPopularCata = categories.leastPopularCategory(categoriesTotalled);
// var x = categories.totalCostsCategories(costs, map);
// var mostProfCat= categories.mostProfitableCategory(categoriesTotals);

// var purchasesData = purchases.weekPurchasesData('./input/purchases.csv');
// var costs = purchases.weekPurchasesInfo(purchasesData, initialDate, lastDate);
// var costsMapped = purchases.mappedPurchases(costs);
// var productsMap = purchases.salesPurchasesCalculation(costsMapped, salesMapped);
// var mostProfitable = purchases.mostProfitableProduct(productsMap);


var result = {data:[mostPopular, leastPopular]};

var source = fs.readFileSync('./index.handlebars', 'utf-8');
var template = Handlebars.compile(source);
var htmlString = template(result);

var weekStatistics = function(filePath){
  fs.writeFileSync(filePath + '.html', htmlString);

};

weekStatistics('week1');
weekStatistics('week2');
weekStatistics('week3');
weekStatistics('week4');
