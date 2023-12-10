var pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yes! Promise has been resolved")
    }, 4000);
})

// TRADITIONAL WAY TO HANDLE PROMISES

// function getdata1() {
//     // overThis js will not wait to resolve this promise
//     pr.then((val) => console.log(val));
//     console.log("end Call");

// }
// getdata1();

async function getdata() {
    // overThis js will wait to resolve this promise
    const data = await pr;
    console.log(data);
    console.log("end Call");
}
getdata();


