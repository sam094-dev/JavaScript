const obj = {
    firstname: "saurabh",
    lastname: "gupta",
    age: 20

}
const obj1 = {
    firstname: "aditya",
    lastname: "prajapati",
    age: 20

}

let getDetails = function () {
    console.log(`User Name is ${this.firstname} ${this.lastname} ans age is ${this.age}`);
}
// console.log(this);
getDetails.call(obj1);
