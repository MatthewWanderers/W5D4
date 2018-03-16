Array.prototype.bubbleSort = function () {
  let arr = this;

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        sorted = false;
      }
    }
  }
  return arr;
};


String.prototype.subStrings = function () {
  let resultArr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      resultArr.push(
        this.slice(i,j)
      );
    }
  }
  return resultArr;
};
