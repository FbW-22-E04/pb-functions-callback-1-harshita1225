// callbacks

function greetMessage(name) {
  console.log(`Good morning`, name);
}

function greetUsers(arr, cb) {
  return arr.map((item) => cb(item));
}

greetMessage("John"); // print "Good Morning, John"
console.log(`-----------------------`);
greetUsers(["John", "Peter", "Mark"], greetMessage);
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"
