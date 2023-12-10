createorder(cart, function () {
    proceedToPayment(function () {
        shoeOrderSummery(function () {
            updateWallet(function () {
                createInvoice(function () {
                    sendConfirmationMessage(function () {

                    })
                })
            })
        })
    })
})