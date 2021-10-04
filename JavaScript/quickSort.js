const swap = require("./helpers");

const quickSort = (arr, left, right) => {
  let pivot, partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const arrayItems = [7, 5, 2, 4, 3, 9]; // returns [2, 3, 4, 5, 7, 9]
// const arrayItems = [9, 7, 5, 4, 3, 1];      // returns [1, 3, 4, 5, 7, 9]
// const arrayItems = [1, 2, 3, 4, 5, 6];      // returns [1, 2, 3, 4, 5, 6]

quickSort(arrayItems, 0, arrayItems.length - 1);
