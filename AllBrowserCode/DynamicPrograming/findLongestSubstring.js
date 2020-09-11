findLongestSubstring("longestsubstring");

// function findLongestSubstring(str) {
//     let start = 0;
//     let newStr = '';
//     let end = 0;
//     let obj = {};
//     let max = 0;

//     while(start < str.length) {
//         let temp = str[end];
//         if(!obj[temp]){
//             obj[temp] = ++obj[temp] || 1;
//             newStr += temp;
//             end++;
//         }else{
//             if(newStr.length > max){
//                 max = newStr;
//             }
//             newStr = newStr.slice()
//             break;
//         }
//     }
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
