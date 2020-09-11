validAnagram("anagran", "nagaram");

function validAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let strObj = {};
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    strObj[char] = ++strObj[char] || 1;
  }
  for (let j = 0; j < str2.length; j++) {
    let char = str2[j];
    if (strObj[char]) {
      strObj[char]--;
      count++;
    }
  }
  if (count == str1.length) {
    return true;
  } else {
    return false;
  }
}
