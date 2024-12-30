function findIndexOf(arr, target) {
  arr.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    const middleElement = arr[middleIndex];

    if (middleElement === target) return middleIndex;

    if (middleElement < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

const arr1 = [-2, 3, 4, 5, 9, 15, 44];
