//console.log(fib(4)) // 3
//fib(10) // 55

// fib(35) // 9227465

function fib(no, memo = []) {
  if (memo[no] !== undefined) return memo[no];
  if (no <= 3) {
    return 1;
  }

  var res = fib(no - 1, memo) + fib(no - 2, memo);
  memo[no] = res;
  console.log(memo[no]);
  return res;
}

fib(6); // 317811
