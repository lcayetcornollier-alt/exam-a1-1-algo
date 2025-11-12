// ex08.js

function isUsernameValid(username) {
  if (
    username == "" ||
    username == "root" ||
    username[4] == "" ||
    username[0] == " "
  ) {
    return false;
  }
  return true;
}

console.log(isUsernameValid("")); // false
console.log(isUsernameValid("Matsara")); // true
console.log(isUsernameValid("root")); // false
console.log(isUsernameValid("Dan")); // false
console.log(isUsernameValid("John")); // true
console.log(isUsernameValid(" Wiliam")); // false
