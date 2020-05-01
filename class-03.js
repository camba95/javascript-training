// 1. Lexical scope


function requestUsers() {
  console.info(`${apiURL}/users`);
}

function requestVideos() {
  console.info(`${apiURL}/videos`);
}
const apiURL = 'http://amazon.com';

requestUsers();
requestVideos();

// 2. Closure

function multiply(multiplier) {
  return function(number) {
    return number * multiplier;
  }
}

const multiplyBy2 = multiply(2);
// console.info(multiplyBy2(4));
const multiplyBy5 = multiply(5);
// console.info(multiplyBy5(2));

// 3. Prototype and Prototype Chain

// function constructor, Object.create and new
