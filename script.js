
// Looping Over Objects Javascript Tutorial
// https://youtu.be/tVq4L8tnWuA
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//Object.keys()
//Object.values()
//Object.entries()

const user = {
  name: "Randy",
  age: 34,
  occupation: "Web Developer"

};
//Object.keys()
/*

for (const key of Object.keys(user)) {
  console.log(`${key} => ${user[key]}`);
}
*/
//Object.values()

//console.log(Object.values(user));

//Object.entries()
//console.log(Object.entries(user));
/*
for (const entry of Object.entries(user)) {
  console.log(`${entry[0]}=> ${entry[1]}`);
}
*/
// Tutorial Says this is the way to go!!

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} => ${value}`);
}