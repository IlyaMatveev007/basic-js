module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  if (members === null || members === undefined){
    return '';
  }
  for(var i = 0; i < members.length; i++){
    if(typeof members[i] !== 'string'){
      members.splice(i, 1); i--;
    }
  }
  if(members.length === 0){
    return 'empty';
  }
  var arr = [];
  for (var i = 0;  i < members.length; i++){
    var str1 = members[i];
    if(str1[0] === ' '){
      var j = 0;
      while (str1[j] === ' '){
        j++;
      }
      arr.push(str1[j].toUpperCase());
    }
    else{
      arr.push(str1[0].toUpperCase());
    }
    
  }
  arr = arr.sort();
  var str = '';
  for (var i = 0; i < arr.length;i++){
    str += arr[i];
  }
  return str;
};
