
function promisepractice() {
    var pr = new Promise((resolve, reject) => {
        reject();
    })
    return pr;
}

promisepractice()
    .then(() => {
        console.log("Yes it has been resolve");
    })
    .catch(() => {
        console.log("Sorry Babes it did not get resolved");
    })


