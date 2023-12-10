// OBJECT ITERATION

const obj = {
    first: "saurabh",
    last: "gupta",
    age: 10,
    city: "ayodhya"
}

for (let property in obj) {
    console.log(property);
}

const arr = Object.keys(obj);
console.log(arr);



// ARRAY ITERATION METHOD

let dummyarr = [1, 2, 3, 4, 5, 6, 7, 8];

// METHOD-1 

for (let i = 0; i < dummyarr.length; i++) {
    console.log(dummyarr[i]);
}

// METHOD-2

for (let ele of dummyarr) {
    console.log(ele);
}

// METHOD-3

dummyarr.forEach((e) => console.log(e));