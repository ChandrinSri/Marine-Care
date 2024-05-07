document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart details from the first JavaScript file
    var cart = JSON.parse(sessionStorage.getItem('cartdetails'));
    var subtotal = 0;

    // Loop through each item in the cart and populate the cart view
    var productTileFlex = document.getElementById('product_tile_flex');
    cart.forEach(function(item) {
        subtotal += parseFloat(item.price);
        var productTile = document.createElement('div');
        productTile.classList.add('product_tile');

        var productImageDiv = document.createElement('div');// creates a new <div> element assigns value 
        productImageDiv.classList.add('product_image');//This line adds a class for css
        var productImage = document.createElement('img');
        productImage.src = item.img;//
        productImage.alt = "";
        productImageDiv.appendChild(productImage);//appends the <img> element (productImage)

        var productDetailsDiv = document.createElement('div');
        var productTitle = document.createElement('a');
        productTitle.classList.add('product_title');
        productTitle.href = "";
        productTitle.textContent = item.name;
        var productDesc = document.createElement('p');
        productDesc.classList.add('product_desc');
        productDesc.textContent = item.desc;        //within these code lines what happpens creates a html element and releavtn styling for the selected element
        var productPrice = document.createElement('p');
        productPrice.classList.add('product_price');
        productPrice.innerHTML = `LKR <span class="product_price_num">${item.price}</span>`;
        productDetailsDiv.appendChild(productTitle);
        productDetailsDiv.appendChild(productDesc);
        productDetailsDiv.appendChild(productPrice);

        productTile.appendChild(productImageDiv);
        productTile.appendChild(productDetailsDiv);

        productTileFlex.appendChild(productTile);
    });

    // Update subtotal in the cart view
    var cartSubtotal = document.getElementById('cart_subtotal').querySelector('.val');
    cartSubtotal.textContent = subtotal;

    // Calculate and update grand total in the cart view
    var cartShippingCost = document.getElementById('cart_shippingcost').querySelector('.val').textContent;
    var cartGrandTotal = document.getElementById('cart_grand_total').querySelector('.val');
    cartGrandTotal.textContent = parseFloat(subtotal) + parseFloat(cartShippingCost);
});
