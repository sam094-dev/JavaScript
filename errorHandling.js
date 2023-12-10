async function getdata() {
    try {
        const data = await fetch("https://api.github.com/feeds");
        console.log("saurabh");
        console.log(data);
    }
    catch (err) {
        console.log("there is something Issue");
    }

}
getdata();