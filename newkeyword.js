function constructorfunction(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    return this;
}

let userone = new constructorfunction("saurabh", "gupta", 22);
let usertwo = new constructorfunction("aditya", "prajapati", 24);
console.log(userone);
console.log(usertwo);