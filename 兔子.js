// Recursion递归

//假定一对大兔子每月能生一对小兔子 每对小兔子经过一个月能长成一对大兔子具备繁殖能力
//不发生死亡 每次均生下一公一母
//问最初有一对小兔子 n个月后有多少对兔子
// let rabbitNum = 1;
// 月份 0 1 2 3 4 5
//  大  0 1 1 2 3 5
//  小  1 0 1 1 2 3
//  总  1 1 2 3 5 8
// 总结可知 第三个月的总兔子数等于前两个月的兔子数之和
// 即rabbit(m) = rabbit(m-1) + rabbit(m-2)
function rabbit(n) {
  let rabbitNum = 1;
  if (n === 0) {
    rabbitNum = 1;
  } else if (n === 1) {
    rabbitNum = 1;
  } else {
    rabbitNum = rabbit(n - 2) + rabbit(n - 1);
  }
  return rabbitNum;
}
