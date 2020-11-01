const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(springDate) {
  
  Date.prototype.isValid = function () {
      // An invalid date object returns NaN for getTime() and NaN is the only
      // object not strictly equal to itself.
      return this.getTime() === this.getTime();
  };  
  if(springDate == null) return 'Unable to determine the time of year!';
  if(springDate.isValid())
  {
    var month = springDate.getMonth();
    if(month === 11 || (month >= 0 && month < 2))
      return 'winter';
    if(month >= 2 && month < 5)
      return 'spring';
    if(month >= 5 && month < 8)
      return 'summer';
    if(month >= 8 && month < 11)
      return 'fall';
  }
  else
  {
    throw new Error('Unable to determine the time of year!');
  }
};
