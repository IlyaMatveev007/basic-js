const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  if(matrix.length === 0){
    return 0;
  }
  var count = 0;
  for(var i = 0;i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length;j++){
      if(matrix[i][j] === '^^'){
        count += 1;
      }
    }
  }
  return count;
};
