var fs = require('fs');

exports.linesInFiles = function(filePath) {
  var data = fs.readFileSync(filePath, 'utf-8');
    var data = data
        .split('\n')
        .filter(Boolean)
        .splice([1]);


    for (var i = 0; i < data.length; i++) {
        data[i] = data[i]
            .split(',')
            .splice(1)
            .splice(-3);

    }
    var productsList = data.map(function(x) {
        return ({
            product: x[0],
            quantity: parseInt(x[1])

        })
    })

console.log(productsList);


}








































// var colorCounts = {};
//
// //loop through all the colors
// colors.forEach(function(color){
//
//     //initialize the value in the map/object
//     if(colorCounts[color] === undefined){
//         colorCounts[color] = 0;
//     }
//
//     // increment the counter for each color in the Map
//     colorCounts[color] = colorCounts[color] + 1;
// });
//
// console.log((colorCounts));
// // {"blue" : 3, "red" : 2, "green" : 2, "orange" : 1 }
//
// //access colors count
// console.log(colorCounts["green"]);
//
//
//     var mostPopularItem = {};
//
//       var max = 0;
//       for(var key in productsList) {
//           var value = mostPopularItem[key];
//
//           if(mostPopularItem[key] > max) {
//           max = mostPopularItem[key];
//           mostPopularItem = {
//                   productItem: key,
//                       amount: max
//               }
//          }
//       }
//        console.log(mostPopularItem)
//       return mostPopularItem;
//   }
