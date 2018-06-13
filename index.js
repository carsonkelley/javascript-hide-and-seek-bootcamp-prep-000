function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector("#nested .target");
}
function deepestChild() {
  var top = document.querySelector("div#grand-node");
  console.log("what");
}