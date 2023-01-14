// Recursion递归

// 取0到20中的一个随机整数
function randomNum() {
    return Math.floor(Math.random() * 20);
  }
  const ranNum = randomNum();
  //递归求随机数ranNum的阶乘
  function factorial(ranNum) {
    if (ranNum === 0 || ranNum === 1) {
      return 1;
    } else {
      return factorial(ranNum - 1) * ranNum;
    }
  }
  const result = factorial(ranNum);
  // console.log("ranNum", ranNum);
  // console.log("result", result);