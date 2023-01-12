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
console.log("ranNum", ranNum);
console.log("result1", result1);

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

const res = findObj(data, 11);
console.log(res);
