function isPrime(n) {
  let r = false;

  for (i = 2; i < n; i++) {
    if (Number.isInteger(n / i)) {
      break;
    }
    r = true;
  }

  return r;
}
