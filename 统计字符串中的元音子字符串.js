//leetCode 2062

// 子字符串是字符串中的一个连续(非空)的字符序列。
// 元音子字符串是仅由元音（'a'、'e'、'i'、'o' 和 'u'）组成的一个子字符串，且必须包含全部五种元音。
// 传入一个字符串word,统计并返回word中元音子字符串的数目

// 示例 1：
// 输入：word = "aeiouu"
// 输出：2

// 示例 2：
// 输入：word = "unicornarihan"
// 输出：0

// 示例 3：
// 输入：word = "cuaieuouac"
// 输出：7

// 示例 4：
// 输入：word = "bbaeixoubb"
// 输出：0

//  1 <= word.length <= 100
// word 仅由小写英文字母组成

var countVowelSubstrings = function (word) {
  let wordArr = word.split("");
  wordArr.forEach((element, index, array) => {
    array[index] = element.charCodeAt();
  });
  const wALen = wordArr.length;
  if (wALen < 5) {
    return 0;
  }
  const judge = [101, 105, 111, 117, 97];
  const judgeStr = judge.toString();
  let result = 0;
  for (let index = 0; index <= wALen - 4; index++) {
    for (let j = wALen; j >= index + 4; j--) {
      let sonWA = wordArr.slice(index, j);
      let allIsVowel = true;
      for (const iter of sonWA) {
        if (judge.indexOf(iter) < 0) {
          allIsVowel = false;
          break;
        }
      }
      if (
        allIsVowel &&
        Array.from(new Set(sonWA)).sort().toString() === judgeStr
      ) {
        result++;
      }
    }
  }
  return result;
};
