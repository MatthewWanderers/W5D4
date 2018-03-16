Array.prototype.uniq = function() {
  let uniqArr = [];

  this.forEach(function (el) {
    if (!uniqArr.includes(el)) {
      uniqArr.push(el);
    }
  });

  return uniqArr;
};


Array.prototype.twoSum = function () {
  let resultArr = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        resultArr.push([i,j]);
      }
    }
  }
  return resultArr;
};

Array.prototype.transpose = function () {
  let resultArr = [];

  for (let i = 0; i < this.length; i++) {
    let subArr = [];

    for (let j = 0; j < this[i].length; j++) {
      subArr.push(this[j][i]);

    }
    resultArr.push(subArr);
  }
  return resultArr;
};
