// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;