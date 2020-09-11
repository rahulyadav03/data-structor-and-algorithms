function printNum(num) {
  let interval = setTimeout(() => {
    console.log(num);
    clearInterval(interval);
    num++;
    if (num <= 5) {
      printNum(num);
    }
  }, 5000);
}

printNum(1);
