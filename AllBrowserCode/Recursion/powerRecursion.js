console.log(power(2, 4));

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}
