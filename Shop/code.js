document.addEventListener("DOMContentLoaded", function() {
    var cart = []; //waits here till all the fileelements loaded to execute the function
    sessionStorage.setItem('cartdetails', JSON.stringify(cart));//creates to keep the data move to next session
});

function addToCart(elem) {
    var selectedProductId = elem.parentElement.id;
    var selectedProduct = document.getElementById(selectedProductId);
    var itemObj = {};// gets the releveant information of clicked item  
    itemObj.name = selectedProduct.querySelector('.product_title').textContent.trim();
    itemObj.img = selectedProduct.querySelector('.product_image img').getAttribute('src');
    itemObj.desc = selectedProduct.querySelector('.product_desc').textContent.trim();
    itemObj.price = selectedProduct.querySelector('.product_price_num').textContent.trim();

    //retrieves the current subtotal from the cart
    var currentCartSubTotal = parseFloat(document.getElementById('cart_subtotal').querySelector('.val').textContent);
    //retrieves the current shipping cost 
    var currentCartShippingCost = parseFloat(document.getElementById('cart_shippingcost').querySelector('.val').textContent);
    //calculates the new subtotal 
    var newCartSubTotal = currentCartSubTotal + parseFloat(itemObj.price);
    //updates the grand total displayed in the cart.
    document.getElementById('cart_grand_total').querySelector('.val').textContent = newCartSubTotal + currentCartShippingCost;
    document.getElementById('cart_subtotal').querySelector('.val').textContent = newCartSubTotal;//updates subtotal

    var currentCartCount = parseInt(document.querySelector('.cartcount').textContent);
    document.querySelector('.cartcount').textContent = currentCartCount + 1;

    var currentCartJson = JSON.parse(sessionStorage.getItem('cartdetails'));
    currentCartJson.push(itemObj);//adds the newly selected item to the cart details array.
    sessionStorage.setItem('cartdetails', JSON.stringify(currentCartJson));//converts the JavaScript object to JSON STring
}
