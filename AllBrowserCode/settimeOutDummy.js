// function printNum(num) {
//     console.log('num ', num);
// 	setTimeout(() => console.log(num), 5000);
// }

// for (let i = 1; i <= 5; i++) {
// 	printNum(i);
// }

// for(var i = 1; i < 6; i++) {
//   setTimeout(function() {
//      console.log(i); // 6 for 6 times
//   },1000);
// }

// for(let i = 1; i < 6; i++) {
//   setTimeout(function() {
//      console.log(i); // 1 to 5 for 6 times
//   },1000);
// }
// console.log('The loop is done!');

// for(let i = 1; i < 6; i++) {
//    setTimeout(()=>{
//       console.log(i);
//    },1000);
// }
// console.log('The loop is done!');

for (let i = 1; i < 6; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 5000); // multiple i by 1000
}
