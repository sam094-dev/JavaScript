let name1 = {
    firstname: "saurabh",
    lastname: "gupta"

}
let name2 = {
    firstname: "Shivam",
    lastname: "Kumar"
}

let printname = function (city, state) {
    console.log(this.firstname + " " + this.lastname);
    console.log("He is living in" + " " + city + " " + state)
}

// call method
printname.call(name2, "Ayodhya", "U.P");

// apply method
printname.apply(name2, ["Ayodhya", "U.P"]);

// bind method

let bindfunctionExample = printname.bind(name1, "Marathalli", "Banglore");
bindfunctionExample();



