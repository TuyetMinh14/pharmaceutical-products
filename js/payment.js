document.addEventListener("DOMContentLoaded", function () {
    const storedProductsData = localStorage.getItem('productsData');
    if (storedProductsData) {
        const productsData = JSON.parse(storedProductsData);
        // const listCartHTML = document.querySelector('.listCart');
        // const cartTotalSpan = document.querySelector('#total')||[];
        // const iconCartSpan = document.querySelector('#icon-cart span') || document.querySelector('#cart-item-count')
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
        const user = JSON.parse(localStorage.getItem('dangnhap'))
        const a = user.phone 
        console.log(a)
        const displayCartItems = () => {
            cart = JSON.parse(localStorage.getItem(a)) || [];
            // listCartHTML.innerHTML = '';
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

                totalPriceCheckout.innerHTML = (sum + shipFee).toLocaleString() + ' VNĐ';
            }
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
                event.preventDefault()
                    alert('Số điện thoại sai định dạng')
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
