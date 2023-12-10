var image = document.getElementById("image");
image.addEventListener('click', function (e) {
    console.log("Image has been clicked");
}, false)

var owl = document.getElementById("owl");
owl.addEventListener('click', function (e) {
    console.log("Owl is being clicked");

    // e.stopPropagation();

    // owl.remove();
}, false)