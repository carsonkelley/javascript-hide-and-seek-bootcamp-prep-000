function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector("#nested .target")
}
function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list")
  for(let i = 0;i < list.length; i++) {
    list[i].innerHTML = list[i].innerHTML + n
  }
}
function deepestChild() {
  var top = document.querySelectorAll("div#grand-node div")
  return top[top.length - 1]
}