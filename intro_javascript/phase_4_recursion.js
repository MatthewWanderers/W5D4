function range (start, end) {

  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);
    r.push(end - 1);
    return r;
}

function sumRec (arr) {
  if (arr.length < 1) {
    return 0;
  }

  let sums = sumRec(arr.slice(0, arr.length - 1));
    sums = sums + arr[arr.length - 1];
      return sums;
}
