document.addEventListener("DOMContentLoaded", function () {
    const storedProductsData = localStorage.getItem('productsData');
    if (storedProductsData) {
        const productsData = JSON.parse(storedProductsData);
        const listCartHTML = document.querySelector('.listCart');
        const cartTotalSpan = document.querySelector('#total');
        const iconCartSpan = document.querySelector('#icon-cart span');
        const paymentContainer = document.querySelector('.cart-container');
        const totalQuantityCheckout = document.querySelector('#total-quantity');
        const totalPriceCheckout = document.querySelector('#total-price');

        const displayCartItems = () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            listCartHTML.innerHTML = '';
            paymentContainer.innerHTML = '';
            let totalQuantity = 0;
            let sum = 0;

            if (cart.length > 0) {
                cart.forEach(item => {
                    totalQuantity += item.quantity;

                    let positionProduct = productsData.findIndex((value) => value.id == item.product_id);
                    let info = productsData[positionProduct];

                    sum += info.price * item.quantity;

                    let newItem = document.createElement('div');
                    newItem.classList.add('item');
                    newItem.dataset.id = item.product_id;

                    listCartHTML.appendChild(newItem);
                    newItem.innerHTML = `
                        <div class="image">
                            <img src="${info.imgSrc}">
                        </div>
                        <div class="name">
                            ${info.name}
                        </div>
                        <div class="totalPrice">${(info.price * item.quantity).toLocaleString()} VNĐ</div>
                        <div class="quantity">
                            <span class="minus"><</span>
                            <span>${item.quantity}</span>
                            <span class="plus">></span>
                        </div>
                    `;

                    let newItemPayment = document.createElement('div');
                    newItemPayment.classList.add('payment-item');

                    paymentContainer.appendChild(newItemPayment);
                    newItemPayment.innerHTML = `
                        <div class="img">
                            <img src="${info.imgSrc}">
                        </div>
                        <div class="price">${info.price.toLocaleString()} VNĐ</div>
                        <div class="quantity">
                            <span>${item.quantity}</span>
                        </div>
                        <div class="total-price">${(info.price * item.quantity).toLocaleString()} VNĐ</div>
                    `;
                });

                iconCartSpan.innerText = totalQuantity;
                totalQuantityCheckout.innerHTML = totalQuantity;
                cartTotalSpan.innerHTML = `<span> Tổng tiền: ${sum.toLocaleString()} VNĐ </span>`;
                totalPriceCheckout.innerHTML = sum.toLocaleString() + ' VNĐ';
            }
        };

        listCartHTML.addEventListener('click', (event) => {
            let positionClick = event.target;
            if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
                let product_id = positionClick.parentElement.parentElement.dataset.id;
                let type = 'minus';
                if (positionClick.classList.contains('plus')) {
                    type = 'plus';
                }
                changeQuantityCart(product_id, type);
            }
        });

        const changeQuantityCart = (product_id, type) => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);

            if (positionItemInCart >= 0) {
                switch (type) {
                    case 'plus':
                        cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                        break;
                    default:
                        let changeQuantity = cart[positionItemInCart].quantity - 1;
                        if (changeQuantity > 0) {
                            cart[positionItemInCart].quantity = changeQuantity;
                        } else {
                            cart.splice(positionItemInCart, 1);
                        }
                        break;
                }
            }

            displayCartItems();
        };
        displayCartItems();
    }
});
