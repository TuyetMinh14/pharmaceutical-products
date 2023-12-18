document.addEventListener("DOMContentLoaded", function () {
    const storedProductsData = localStorage.getItem('productsData');
    if (storedProductsData) {
        const productsData = JSON.parse(storedProductsData);
        const listCartHTML = document.querySelector('.listCart');
        const cartTotalSpan = document.querySelector('#total')||[];
        const iconCartSpan = document.querySelector('#icon-cart span');
        const paymentContainer = document.querySelector('.cart-container');
        const totalQuantityCheckout = document.querySelector('#total-quantity');
        const totalPriceCheckout = document.querySelector('#total-price');
        const discountInput = document.getElementById('sale');
        const applyDiscountBtn = document.getElementById('apply-discount-btn');
        const paySuccessful = document.getElementById('pay-successful');
        const paySuccessfulOnline = document.getElementById('pay-successful-online');
        const checkOutBtn = document.getElementById('button-checkout');
        const acceptCheckOutBtn = document.getElementById('accept-payment');
        const acceptCheckOutBtnOnline = document.getElementById('accept-payment-online');


        // Đưa biến cart ra khỏi hàm để nó có thể được sử dụng ở các hàm khác
        // let cart = [];
        const user = JSON.parse(localStorage.getItem('dangnhap'))|| []
        const a = user.usernames + 1 ||[]    

        const displayCartItems = () => {
            cart = JSON.parse(localStorage.getItem(a)) || [];
            listCartHTML.innerHTML = '';
            paymentContainer.innerHTML = '';
            let totalQuantity = 0;
            let sum = 0;
            let shipFee = 30000;
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
                        <div class="total-price">${((info.price * item.quantity)).toLocaleString()} VNĐ</div>
                    `;
                });

                // iconCartSpan.innerText = totalQuantity;
                totalQuantityCheckout.innerHTML = totalQuantity;
                // cartTotalSpan.innerHTML = `<span> Tổng tiền: ${sum.toLocaleString() } VNĐ </span>`;
                totalPriceCheckout.innerHTML = (sum + shipFee).toLocaleString() + ' VNĐ';
            } else {
                iconCartSpan.innerText = 0;
                cartTotalSpan.innerHTML = '<strong>Giỏ hàng trống</strong>';
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

        applyDiscountBtn.addEventListener('click', () => {
            let discountCode = discountInput.value;
            const discountCodeDefault = "choem10diemnhathay";
            const discountPercentage = 10;
          
            if (discountCode === discountCodeDefault) {
              const finalTotal = calculateDiscountedTotal(discountPercentage);
          
              // Hiển thị tổng tiền sau khi giảm giá
              totalPriceCheckout.innerHTML = `<span>Tổng tiền (giảm ${discountPercentage}%): ${finalTotal.toLocaleString()} VNĐ</span>`;
            } else {
              alert('Mã giảm giá không hợp lệ');
            }
        });

        

        const calculateDiscountedTotal = (discountPercentage) => {
            let sum = calculateSum(); 
            let discountAmount = (discountPercentage / 100) * sum;
            return sum - discountAmount;
        };

        const calculateSum = () => {
            let sum = 0;
            if (cart.length > 0) {
                cart.forEach(item => {
                    let positionProduct = productsData.findIndex((value) => value.id == item.product_id);
                    let info = productsData[positionProduct];
                    sum += info.price * item.quantity + 30000;
                });
            }
            return sum;
        };
        checkOutBtn.addEventListener('click', () => {
            const ten = document.getElementById('name').value;
            const sdt = document.getElementById('phone').value;
            const thanhpho = document.getElementById('thanhpho').value;
            const quan = document.getElementById('quan').value;
            const soduong = document.getElementById('soduong').value;
            const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked');
            const phoneRegex = /^(0|84)([0-9]{9,10})$/;
            const isValidPhone = phoneRegex.test(sdt);
            console.log(thanhpho);
            if (ten === "" || sdt === "" || thanhpho === "" || quan === "" || soduong === "") {
                alert('Bạn chưa điền đầy đủ thông tin đặt hàng!');
                return;
            }  
            if(!isValidPhone){

            }
            else {
                if (selectedPaymentMethod) {
                    const paymentMethod = selectedPaymentMethod.value;
    
                    if (paymentMethod === 'online') {
                        paySuccessfulOnline.classList.add('checkOut-online')
                    } else if (paymentMethod === 'offline') {
                        paySuccessful.classList.add('checkOut');
                    }
                    
                } else {
                    alert('Vui lòng chọn loại thanh toán');
                }
            }
        });
        acceptCheckOutBtn.addEventListener('click', () => {
            localStorage.removeItem(a);
            displayCartItems();
            paySuccessful.classList.remove('checkOut');
            window.location.href = "index-login.html";
        });
        acceptCheckOutBtnOnline.addEventListener('submit', () => {
            paySuccessfulOnline.classList.remove('checkOut-online');
            localStorage.removeItem(a);
            displayCartItems();
            alert('Bạn đã thanh toán thành công!')
            window.location.href = "index-login.html";
        });
        displayCartItems();
    }
});
