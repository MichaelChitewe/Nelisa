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

        var dateData = newWeekInfo[i][0] + '-2016';
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

        weekSales.push({
            date: dates,
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
