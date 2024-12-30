function fibonacci(n) {
  const arr = [0, 1];
  if (n === 1) return [arr[0]];
  else if (n === 2) return arr;
  else {
    const t = n - 2;

    for (i = 0; i < t; i++) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr;
  }
}
