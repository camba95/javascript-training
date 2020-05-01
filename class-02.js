// 1. If else statement

var condition = true;
if (condition) {
  // console.info('condition is true');
} else {
  // console.info('condition is false');
}

// 1.1. Falsy and truthy

var falsyValues = ['', 0, null, undefined, NaN] // 0, null, undefined, NaN
var truthyValues = ['0', [], {}]

var arrayToIterate = falsyValues;
for (var i = 0; i < arrayToIterate; i++) {
  if (arrayToIterate[i]) {
    // console.info('truthy value');
  } else {
    // console.info('falsy value');
  }
}

// 2. Loops statements

var values = [1, 2, 3, 4];

for (var value of values) {
  // console.info(value);
}

// 3. Functions

function thisIsAFunction(parameter1, parameter2) {
  console.info(parameter1);
  console.info(parameter2);
  console.info(arguments);
}

thisIsAFunction(1, 2);

// 3.1. High order functions

// 4. ECMAScript

// 4.1. ES5

// 4.2. ES6

// 4.3. ES7

// 4.4. ES8

// 4.5. ES9

// 4.6. Babel
