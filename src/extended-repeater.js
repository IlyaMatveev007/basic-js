const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  var str1 = '';
  if(options.repeatTimes === undefined)
  {
    options.repeatTimes = 1;
  }
  if(options.separator === undefined)
  {
    options.separator = '+';
  }
  if(options.additionSeparator === undefined)
  {
    options.additionSeparator = '|';
  }
  if(options.addition === undefined)
  {
    options.addition = '';
  }
  if(options.additionRepeatTimes === undefined)
  {
    if(options.addition === undefined)
    {
      options.additionRepeatTimes = 0;
    }
    else
    {
      options.additionRepeatTimes = 1;
    }
  }

  for(var i = 0; i < options.repeatTimes; i++){
    str1 += '' + str;
    for(var j=0; j < options.additionRepeatTimes; j++)
    {
      str1 += '' + options.addition;
      if(j!=options.additionRepeatTimes - 1)
      {
        str1 += '' +options.additionSeparator;
      }
    }
    if(i!=options.repeatTimes-1)
    {
      str1 += '' + options.separator;
    }
  }
  if(str1 === ''){
    return str;
  }
  return str1;
};
  