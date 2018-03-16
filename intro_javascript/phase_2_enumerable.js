Array.prototype.myEach = function (callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {

  let resArr = [];

  for (let i = 0; i < this.length; i++) {
    resArr.push(callback(this[i]));
  }
  return resArr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let i = 0;
  let returnVal = initialValue;

  if (!returnVal) {
    returnVal = this[0];
    i = 1;
  }

  for (i; i < this.length; i++) {
    returnVal = callback(returnVal, this[i]);
  }
  return returnVal;
};
