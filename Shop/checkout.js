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

        if(subtotal===0){
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: "Buy at least One Item",  // implements the alert library by SWEETALERT2 
              });
        }else{
            var checkoutBtn = document.getElementById('checkout_btn');
            checkoutBtn.addEventListener('click', function(event) {
                Swal.fire({
                    title: "Your Oder is complete",
                    text: "Visit again",
                    icon: "success"
                  });
            });
        }
    });
});



