document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart details from the second JavaScript file
    var cart = JSON.parse(sessionStorage.getItem('cartdetails'));
    var subtotal = 0;

    // Calculates subtotal
    cart.forEach(function(item) {
        subtotal += parseFloat(item.price);
    });

    // Update subtotal in the checkout view
    var cartSubtotal = document.getElementById('cart_subtotal').querySelector('.val');
    cartSubtotal.textContent = subtotal;

    // Calculate and update grand total in the checkout view
    var cartShippingCost = document.getElementById('cart_shippingcost').querySelector('.val').textContent;
    var cartGrandTotal = document.getElementById('cart_grand_total').querySelector('.val');
    cartGrandTotal.textContent = parseFloat(subtotal) + parseFloat(cartShippingCost);



    var checkoutBtn = document.getElementById('checkout_btn');
    checkoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        

        var inputFName = document.getElementById("inputFName");
        var inputLName = document.getElementById("inputLName");
        var cardNo = document.getElementById("inputCardNo");
        var ExpNo = document.getElementById("inputExp");

        if(subtotal===0){
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: "Buy at least One Item",  // implements the alert library by SWEETALERT2 
              });
        }else if(subtotal>=0){
            console.log(inputFName.value.trim());
            console.log(inputLName.value.trim())
            console.log(cardNo.value.trim())
            console.log(ExpNo.value.trim())
            if (inputFName.value.trim()!='' && inputLName.value.trim()!='' && cardNo.value.trim()!='' && ExpNo.value.trim()!='') {
                Swal.fire({
                    title: "Your Oder is complete",
                    text: "Visit again",
                    icon: "success"
                  });
                
            }else if(inputFName.value.trim()==='' || inputLName.value.trim()==='' || cardNo.value.trim()==='' || ExpNo.trim()===''){
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    text: "Please fill All the Feilds",  // implements the alert library by SWEETALERT2 
                  });
            }

        }

    });
});



