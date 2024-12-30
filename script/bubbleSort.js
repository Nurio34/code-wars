function bubbleSort(arr) {
  let sorted = false;

  arr.forEach((num, ind) => {
    if (num > arr[ind + 1]) {
      arr.splice(ind, 1);
      arr.splice(ind + 1, 0, num);
      sorted = true;
    }
  });

  if (sorted) bubbleSort(arr);

  return arr;
}
const bubbleSortarr1 = [45, -6, 8, 3, 44, 20];

console.log(bubbleSort(bubbleSortarr1));
