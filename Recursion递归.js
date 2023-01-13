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
const result1 = factorial(ranNum);
// console.log("ranNum", ranNum);
// console.log("result1", result1);

const data = [
  {
    id: 1,
    name: "饮品",
    goods: [
      {
        id: 11,
        gName: "可乐",
        goods: [{ id: 111, gName: "可口可乐" }],
      },
      { id: 12, gName: "茶" },
    ],
  },
  {
    id: 2,
    name: "蔬菜",
    goods: [
      {
        id: 21,
        gName: "蘑菇",
        goods: [
          { id: 211, gName: "金针菇" },
          { id: 212, gName: "杏鲍菇" },
        ],
      },
      { id: 22, gName: "土豆" },
    ],
  },
];
let result = {};
// 输入id号 返回data中的数据对象
function findObj(data, id) {
  data.forEach((element) => {
    if (element.id == id) {
      result = element;
    } else if (element.goods && element.goods.length > 0) {
      result = findObj(element.goods, id);
    }
  });
  return result;
}

const res = findObj(data, 211);
// console.log(res);

//假定一对大兔子每月能生一对小兔子 每对小兔子经过一个月能长成一对大兔子具备繁殖能力
//不发生死亡 每次均生下一公一母
//问最初有一对小兔子 n个月后有多少对兔子
// let rabbitNum = 1;
function rabbit(n) {
  let rabbitNum = 1;
  // 月份 0 1 2 3 4 5
  //  大  0 1 1 2 3 5
  //  小  1 0 1 1 2 3
  //  总  1 1 2 3 5 8
  // 总结可知 第三个月的总兔子数等于前两个月的兔子数之和
  // 即rabbit(m) = rabbit(m-1) + rabbit(m-2)
  if (n === 0) {
    rabbitNum = 1;
  } else if (n === 1) {
    rabbitNum = 1;
  } else {
    rabbitNum = rabbit(n - 2) + rabbit(n - 1);
  }
  return rabbitNum;
}
// console.log(rabbit(9));
