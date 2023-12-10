let user = {
    name: "saurabh",
    printname: function () {
        console.log(this.name);

    }
}


user.printname();


// function chai() {
//     let namenew = "sau";
//     console.log(this.namenew);
// }
// chai();

const chai = () => {
    let namenew = "sau";
    console.log(this);
}
chai();