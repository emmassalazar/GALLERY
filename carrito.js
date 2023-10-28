    // Define variables
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    let total = 0;
    
    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('p:nth-child(2)').textContent;
            const productPrice = parseFloat(button.getAttribute('data-price'));
    
            // Add item to cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);
    
            // Update total
            total += productPrice;
            cartTotal.textContent = total.toFixed(2);
        });
    });
    