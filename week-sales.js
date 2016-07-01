var fs = require('fs');

exports.weekSalesGrouped = function(filePath) {
    var weekInfo = fs.readFileSync(filePath, 'utf-8');

    var newWeekInfo = weekInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    var weekSales = [];

    for (var i = 0; i < newWeekInfo.length; i++) {
        newWeekInfo[i] = newWeekInfo[i]
            .split(',')
            .splice(1);

        weekSales.push({
            date: newWeekInfo[i][0] + '-2016',
            product: newWeekInfo[i][1],
            quantity: parseInt(newWeekInfo[i][2]),
            price: parseInt(newWeekInfo[i][3].replace(/R/, ""))
        })

    }

    var groupedWeekSales = {};

    weekSales.forEach(function(products) {

        if (!groupedWeekSales.hasOwnProperty(products.product)) {
            groupedWeekSales[products.product] = 0;
        }
        groupedWeekSales[products.product] += products.quantity * products.price;
    });

    return groupedWeekSales;

}
