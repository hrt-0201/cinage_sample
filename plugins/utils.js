let t = 0;
var tmax = 15;

const count = () => {
  console.log(t)
  t++;
  if (t > tmax) location.href = "/ad";
  setTimeout(() => {count()}, 1000);
};

// デバッグ用、アラートを出してしまうので基本は使わない
const start_view = () => {
  alert("ページが読み込まれました！");
};

const reset = () => {
  t = 0;
};

export default ({}, inject) => {
  inject("start_view", start_view);
  inject("count", count);
  inject("reset", reset);
};
