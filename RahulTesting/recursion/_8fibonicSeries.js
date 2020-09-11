function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
//console.log(fib(4)); // 3
//console.log(fib(10)); // 55
console.log(fib(28)); // 317811
//fib(35); // 9227465
