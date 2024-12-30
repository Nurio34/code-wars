function isPowerOfN(number, power) {
  while (number > power) {
    if ((number / power) % power !== 0) {
      return false;
    }
    number = number / power;
    console.log(number);
  }
  return true;
}
