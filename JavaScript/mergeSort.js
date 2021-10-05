const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

mergeSort([7, 5, 2, 4, 3, 9]) // returns [2, 3, 4, 5, 7, 9]
mergeSort([9, 7, 5, 4, 3, 1]) // returns [1, 3, 4, 5, 7, 9]
mergeSort([1, 2, 3, 4, 5, 6]) // returns [1, 2, 3, 4, 5, 6]