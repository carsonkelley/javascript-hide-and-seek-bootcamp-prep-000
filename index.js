function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector("#nested .target")
}
function increaseRankBy(n) {
  
}
function deepestChild() {
  var top = document.querySelectorAll("div#grand-node div")
  return top[top.length - 1]
}