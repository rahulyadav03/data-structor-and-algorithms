console.log(factorial(4));
function factorial(value) {
  if (value <= 0) {
    return 1;
  }
  return value * factorial(value - 1);
}
