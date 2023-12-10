var pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yes! Promise has been resolved")
    }, 8000);
})

var pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yes! Promise has been resolved")
    }, 4000);
})


async function getdata() {
    // overThis js will wait to resolve this promise

    // const data2 = await pr2;
    // console.log(data2);
    // console.log("pr2 Call");


    const data = await pr1;
    console.log(data);
    console.log("pr1 Call");

    const data2 = await pr2;
    console.log(data2);
    console.log("pr2 Call");
}
getdata();


