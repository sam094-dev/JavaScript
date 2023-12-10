const cart = ["phone", "watch"];
// createOrder
// proceedPayment
//showOrderSummary
// updateWallet
var orderId = "12345";
createOrder(cart)
    .then(function (orderId) {
        console.log("Saurabh");
        return orderId;
    })
    .catch(function (err) {
        console.log("there is Something Error");
    })
    .then(function () {
        return proceedToPayment(orderId);
    })
    .then(function () {
        console.log("proceedToPayement");
        return showOrderSummary(orderId);
    })
    .catch(function (err) {
        console.log(err);
    });
function proceedToPayment(orderId) {
    var pr = new Promise(function (resolve, reject) {
        resolve();
    });
    return pr;
};
function showOrderSummary(orderId) {
    var pr = new Promise(function (resolve, reject) {
        resolve();
    });
    return pr;
};
function createOrder(cart) {
    var pr = new Promise(function (resolve, reject) {
        reject();
    });
    return pr;
};