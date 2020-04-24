// 1. Console, comments and semicolon

console.info('hello world');

// single line comment
/**
 * multiline comment
 */

// 2. Values

// 2.1. Number

var number1 = 42;
var number2 = 42.15;

// 2.2. String + quotes

var string1 = "Hello World";
var string2 = 'Hello World';

// 2.3. Boolean

var flag1 = true;
var flag2 = false;

// 2.4. Array

var array1 = [1, 2, 3];

// 2.5. Object

var object1 = {
  name: 'Jhon'
};

// 2.6. Null and undefined

var emptyVariable1 = null;
var emptyVariable2 = undefined;

// 3. Operations

// 3.1 Math operators

var operation1 = 3 + 4;
var operation2 = 11 - 5;

// 3.2. String operators

var finalString = 'Hello' + 'World';

// 3.5. Unary operators

var finalFlag = !true;
typeof finalFlag;

// 3.3. Comparison operators

var comparison1 = 4.0 == 4;
var comparison2 = 4.0 === 4;
var comparison3 = 4.0 >= 4;

// 3.4. Logical operators

var logicalResult = true || false;

// 3.5. Other operators

var count = 20;
count++;
count += 23; // this one works with string as well

// 4. Variables

var variable = 1;
variable = 'Hello';
variable = true;
variable = { name: 'Jhon' };
variable = [1, 2, 3];
var otherVariable;

// Next line raises an error, undefined variable
// console.info(noExistingVariable);
console.info('console is a variable as well');

// 4.1. Variables and interpolated string

// 5. Naming
