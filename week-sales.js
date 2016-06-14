var fs = require('fs');


exports.weekSalesSorted = function(filePath) {
    var weekInfo = fs.readFileSync(filePath, 'utf-8');

    var newWeekInfo = weekInfo
        .split('\n')
        .filter(Boolean)
        .splice([1]);

    for (var i = 0; i < newWeekInfo.length; i++) {
        newWeekInfo[i] = newWeekInfo[i]
            .split(',')
            .splice(1);

    }
  //  console.log(newWeekInfo);

    var weekSales = newWeekInfo.map(function(items) {

            return {
                date: items[0],
                product: items[1],
                price: parseInt(items[3].replace(/R/, ""))
            }
        })
        // console.log(weekSales);
         return weekSales;
}
