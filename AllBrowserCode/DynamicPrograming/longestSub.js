findLongestSubstring("longestsubstring");

function findLongestSubstring(s) {
  let map = {};
  let start = 0;
  let maxLen = 0;

  for (i = 0; i < s.length; i++) {
    let current = map[s[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[s[i]] = i;
  }
}
