function wayTo() {
  console.log("Hello World");
}
function solved(func) {
  func();
}
solved(wayTo);

function greet(name, callBack) {
  callBack(name);
}

function displayGreet(name) {
  console.log(`Hello ${name} ! `);
}

greet("Yohan", displayGreet);
 