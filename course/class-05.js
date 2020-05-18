// Async/await

function requestUsers() {
  return Promise.resolve(['Jhon', 'Aria']);
}

const myRequestUsers = async() => {
  const users = await requestUsers();
  console.info(users);
};

// console.info(myRequestUsers());
// myRequestUsers()
// console.info(await requestUsers());
