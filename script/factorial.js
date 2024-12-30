async function factorial(n) {
  let r = n;

  for (let i = n - 1; i > 0; i--) {
    r *= i;
  }

  return BigInt(r).toString();
}
