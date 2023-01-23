// leetCode 2054

// 给你一个下标从 0 开始的二维整数数组 events
//其中 events[i] = [startTimei, endTimei, valuei]
//第 i 个活动开始于 startTimei ，结束于 endTimei
//如果你参加这个活动，那么你可以得到价值 valuei
//你最多可以参加两个时间不重叠的活动，使得它们的价值之和最大

// 请你返回价值之和的最大值 。

// 注意，活动的开始时间和结束时间是包括在活动时间内的
//也就是说，你不能参加两个活动且它们之一的开始时间等于另一个活动的结束时间
//更具体的，如果你参加一个活动，且结束时间为 t ，那么下一个活动必须在 t + 1 或之后的时间开始

// 提示：
// 2 <= events.length <= 10^5
// events[i].length == 3
// 1 <= startTimei <= endTimei <= 10^9
// 1 <= valuei <= 10^6

var maxTwoEvents = function (events) {
  const eventsLen = events.length;
  let value = Array(eventsLen).fill(0);
  for (let index = 0; index < eventsLen; index++) {
    value[index] = events[index][2];
    for (let j = index + 1; j < eventsLen; j++) {
      if (events[index][1] < events[j][0] || events[index][0] > events[j][1]) {
        value[index] = Math.max(events[index][2] + events[j][2], value[index]);
      }
    }
  }
  return Math.max(...value);
};

// 超时了T^T