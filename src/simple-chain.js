const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    //throw new CustomError('Not implemented');
    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    if( typeof position === 'number' )
    {
      this.chain.splice(position-1,1);
    } 
    else
    {
      this.chain = [];
      throw new Error('Wrong position');
    }
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    var chain1 = this.chain;
    this.chain = [];
    for (var i = chain1.length - 1; i > -1; i--){
      this.chain.push(chain1[i]);
    }
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    var ans = '';
    if(this.chain.length !== 0){
      for (var i = 0; i < this.chain.length; i++){
        if(ans.length === 0){
          ans += `( ${this.chain[i]} )`;
        }
        else{
          ans += `~~( ${this.chain[i]} )`;
        }
      }
    }
    this.chain = [];
    return ans;
  }
};

module.exports = chainMaker;
