const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  var ans = 0;
  if(+sampleActivity === NaN){
    return false;
  }
  if(sampleActivity/Math.floor(sampleActivity) !== 0){
    return false;
  }
  if(sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  if(MODERN_ACTIVITY/sampleActivity < 0){
    return false;
  }
  ans = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / sampleActivity);
  return ans;
  // remove line with error and write your code here
};