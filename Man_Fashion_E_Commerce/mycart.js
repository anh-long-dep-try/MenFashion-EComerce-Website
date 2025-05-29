function updateQuantity(button, change) {
    const cartItem = button.closest('.cart-item');
    const quantityInput = cartItem.querySelector('.quantity-controls input');
    const price = parseFloat(cartItem.getAttribute('data-price'));

    let quantity = parseInt(quantityInput.value) + change;
    if (quantity < 1) quantity = 1;
    quantityInput.value = quantity;

    calculateTotal();
}

function calculateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity-controls input').value);
        totalPrice += price * quantity;
    });

    
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    const discount = totalPrice * 0;
    document.getElementById('discount').innerText = discount.toFixed(2);

    const finalTotal = totalPrice - discount;
    document.getElementById('final-total').innerText = finalTotal.toFixed(2);
}

    calculateTotal();
    function removeProduct(button) {
    const cartItem = button.closest('.cart-item');
    if (cartItem) {
        cartItem.remove();
    }

    updateTotalPrice();
    calculateTotal();
    }
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity-controls input').value);
            total += price * quantity;
        });
        document.getElementById('total-price').textContent = total.toFixed(2);
    }