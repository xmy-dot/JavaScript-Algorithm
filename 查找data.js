// Recursion递归

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

const res = findObj(data, 1);
// console.log(res);
