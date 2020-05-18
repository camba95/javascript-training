import { exportVariable } from './class-03';
// 1. Class

// function User(name) {
//   this.name = name;
// }

// User.prototype = {
//   sayHello: function() {
//     console.info(`Hi, I am ${this.name}`);
//   }
// };

// const user = new User('Jhon');
// user.sayHello();

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.info(`Hi, I am ${this.name}`);
  }
}

// 2. This

// default, implicit, explicit and new

const user = new User('Jhon');
// user.sayHello();

// call, apply

function sayHello() {
  console.info(`Hi, I am ${this.name}`);
}

const jhon = {
  name: 'Jhon'
};

const aria = {
  name: 'Aria'
};


// sayHello();
// sayHello.call(jhon, 10, 20);
// sayHello.apply(jhon, [10, 30]);
const jhonSayHello = sayHello.bind(jhon);
const ariaSayHello = sayHello.bind(aria);
// jhonSayHello();
// ariaSayHello();

const reSet = jhonSayHello.bind({});
// reSet();

// 3. var, const and let

// function scope: var
// block scope: const let

// function scopeExample() {
//   {
//     let foo = 123;
//   }
//   console.info(foo);
//   // for (let user of []) {

//   // }

//   // {

//   // }
// };

// scopeExample();

// let foo = 123;
// let foo = 'hola';

// 4. Hoisting

// declaration and initialization

// petName('Tito');

// const petName = (name) => {
//   console.info(`My pet's name is ${name}`);
// }

// console.info(pet);
// var pet = 'parrot';

// 5. Asynchronous Tasks

// setTimeOut

// setTimeout(function myCallback() {
//   console.info('hello from the future');
// }, 0);
// console.info('hello from the present');

// function requestUsers() {
//   // logic ajax
//   const users = ['Jhon', 'Aria']
//   return Promise.resolve(users);
// }

// function requestOrders(users) {
//   // logic with users
//   const orders = [123, 456];
//   return Promise.resolve(orders);
// }

// function requestInfo() {
//   requestUsers()
//   .then((users) => {
//     console.info(users);
//     return requestOrders(users)
//   })
//   .then((orders)=> {
//     console.info(orders);
//   });
// }

// logic
/**
 * script                           v8                               web api
 * settimeout(()=>{}, 5000)         settimeout -> func, delay     delayer + timer
 *
 * call
 * |    |
 * |func|
 *
 *
 * Console:
 * hello from the present
 * hello from the future
 */


// Promises -> objects

// My Library
function requestWebApi(func) {
  setTimeout(() => {
      func(['Jhon', 'Aria']);
  }, 0);
}

function request() {
  // return new Promise((resolve, reject) => {
  //   requestWebApi((response, error) => {
  //     if (error) {
  //       reject(error);
  //       return;
  //     }
  //     resolve(response);
  //   });
  // });
  return Promise.reject('adsdasd');
  // return Promise.resolve('adsdasd');
}

//---------------------------------
// My Code
// request

function requestUsers() {
  const promise = request(); // { value -> response, onSuccess } -> web api delayerForPromise
  return promise
  .then((response) => { // .then(func, undefined)
    console.info(response[0]);
  })
  .then((value)=>{
    console.info(value); // undefiened
  })
  .catch((error) => { // .then(undefined, func)
    console.info(error.message);
    throw new Error('I do not what happened');
  });
}
// call/apply/bind
// new
function makeRequestUntilSuccess() {
  return requestUsers()
  .then((response)=>{
    Promise.all([
      otherRequest(),
      response.length
    ]);
  })
  .then(([otherResponse, length]) => {
  })
  .catch((error)=> {
    console.info(error);
    return makeRequestUntilSuccess();
  })
}

// makeRequestUntilSuccess();

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve()
// .then(function() {
//   console.log('promise1');
// })
// .then(function() {
//   console.log('promise2');
// });
// console.info('script end');

// v8 -> chrome
// ? -> edge
// ? -> firefox
// script start
// script end
// script promise 1
// script promise 2
// setTimeout

// npm

// npm install <package> o npm install <package> --save -> dependencies
// npm install <package> --save-dev -> devDependencies
// npm install <package> -g -> global

// async / await

async function foo() {
  return 34;
}

async function bar() {
  console.info(await foo())
}

bar();
console.info(exportVariable);
