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
          .split(';');
console.log(newPurchasesInfo[i]);
 purchasesMap[newPurchasesInfo[i][0]] = newPurchasesInfo[i][1];

};
console.log(purchasesMap);
 return purchasesMap;
}
