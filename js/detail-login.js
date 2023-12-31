document.addEventListener("DOMContentLoaded", function () {
    const storedProductsData = localStorage.getItem('productsData');
    if (storedProductsData) {
        const productsData = JSON.parse(storedProductsData);

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');


        if (productId) {
            const product = productsData.find(item => item.id == productId);
            if (product) {
                const productImg = document.querySelector('.main-img');
                const productSubImg = document.querySelector('.sub-img');
                const productName = document.querySelector('.name-detail');
                const productPrice = document.querySelector('.price-detail');
                const infoDetail = document.querySelector('.info-detail');
                const productDescription = document.getElementById('description');
                // const productaddDescription = document.getElementById('add-description');

                 
                if (product.info) {
                    const infoLines = product.info.split('. ');
                    let infoHTML = '';
                    infoLines.forEach(line => {
                        infoHTML += `<p>${line}</p>`;
                    });
                    infoDetail.innerHTML = infoHTML;
                };
                if (product.description) {
                    const descriptionLines = product.description.split('. ');

                    let descriptionHTML = '';

                    descriptionLines.forEach(line => {
                        descriptionHTML += `${line} <br>`;
                    });
                    productDescription.innerHTML = descriptionHTML;
                };
                productImg.innerHTML = `<img src="${product.imgSrc}" alt="${product.alt}" class="img-detail">`;
                productSubImg.innerHTML =`
                <div ><img src="${product.imgSrc}" alt="${product.alt}" class="main-sub"></div>
                <div ><img src="${product.subImg}" alt="${product.alt}" class="sub"></div>
                `;
                const subImages = document.querySelectorAll('.sub');
                const mainSubImage = document.querySelector('.main-sub');
                subImages.forEach(subImg => {
                    subImg.addEventListener('click', function () {
                        subImages.forEach(sub => mainSubImage.classList.remove('active'));
                        productImg.innerHTML = `<img src="${subImg.src}" alt="${product.alt}" class="img-detail">`;
                        subImg.classList.add('active');
                    });
                });

                mainSubImage.addEventListener('click', function () {
                    subImages.forEach(sub => sub.classList.remove('active'));
                    productImg.innerHTML = `<img src="${product.imgSrc}" alt="${product.alt}" class="img-detail">`;
                    mainSubImage.classList.add('active');
                });
                productName.textContent = product.name;
                // document
                    document.title = product.name;
                productPrice.textContent = product.price.toLocaleString() + ' Đ';

                const descriptionTab = document.getElementById("description-tab");
                const infoTab = document.getElementById("info-tab");
                const descriptionDetail = document.getElementById('description');
                const info = document.getElementById('info');
                const moreDetail = document.getElementById('more-detail');

                descriptionDetail.style.display = 'block';
                info.style.display = 'none';

                descriptionTab.addEventListener('click', function () {
                    info.style.display = 'none';
                    descriptionDetail.style.display = 'block';
                    moreDetail.style.display = 'block';
                });

                infoTab.addEventListener('click', function () {
                    info.style.display = 'block';
                    descriptionDetail.style.display = 'none';
                    moreDetail.style.display = 'none';
                });

            }

            const addToCartButton = document.querySelector('.cart-btn');
            addToCartButton.addEventListener('click', function (event) {
                event.preventDefault();
                addToCart(product.id);
            });
            const buyNowButton = document.getElementById('buyNow-btn');
            buyNowButton.addEventListener('click', function () {
                addToCart(product.id);
                window.location.href = 'payment-login.html' ;
            });

            function createProductElement(product) {   
                const productDiv = document.createElement("a");
                if (localStorage.getItem('dangnhap')) {
                    productDiv.href = 'detail-login.html?id=' + product.id;
 
                }
                else{
                    productDiv.href = 'detail.html?id=' + product.id;

                }
                productDiv.classList.add("product-container");
                productDiv.innerHTML = `
                    <div class="post-img">
                        <img src="${product.imgSrc}" alt="${product.alt}">
                    </div>
                    <div class="post-content">
                        <h3>${product.name}</h3>
                        <p>${product.price.toLocaleString()} VNĐ</p>
                        <button type="button" class="cart-btn">Thêm vào giỏ hàng</button>
                    </div>
                `;
                const popuplogin1 = document.querySelector(".login");
                const cartBtn = productDiv.querySelector(".cart-btn");
                productDiv.dataset.id = product.id;
                cartBtn.addEventListener('click', function (event) {

                    if( window.location.href.includes('login'))
                    {
                        
                    event.preventDefault();

                    let positionClick = event.target;

                    if(positionClick.classList.contains('cart-btn')){
                        let id_product = productDiv.dataset.id;
                        console.log(id_product);
                        addToCart(id_product);
                    }
                }
                else
                {
                    popuplogin1.style.display = "block";
                    event.preventDefault();
                }}
                );
                addCartToHTML();
                return productDiv;
            }
             // CART
             const user = JSON.parse(localStorage.getItem('dangnhap'))
                const a = user.phone
             let listCartHTML = document.querySelector('.listCart');
             let iconCartSpan = document.querySelector('#icon-cart span') || document.querySelector('#cart-item-count');
             let body = document.querySelector('body');
             let cartTotalSpan = document.querySelector('#total')
            const cart = JSON.parse(localStorage.getItem(a));





            const addToCart = (product_id) => {
                let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
                
                if (cart.length <= 0) {
                    cart = [{
                        product_id: product_id,
                        quantity: 1
                    }];
                } else if (positionThisProductInCart < 0) {
                    cart.push({
                        product_id: product_id,
                        quantity: 1
                    });
                } else {
                    cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
                }
            
                addCartToHTML();
                addCartToMemory();
            };
            const addCartToMemory = () => {
                localStorage.setItem(a, JSON.stringify(cart));
            };
            const addCartToHTML = () => {
                listCartHTML.innerHTML = '';
                let totalQuantity = 0;
                let sum = 0;
            
                if (cart.length > 0) {
                    cart.forEach(item => {
                        totalQuantity += item.quantity;
                        let newItem = document.createElement('div');
                        newItem.classList.add('item');
                        newItem.dataset.id = item.product_id;
            
                        let positionProduct = productsData.findIndex((value) => value.id == item.product_id);
                        let info = productsData[positionProduct];
                        sum += info.price * item.quantity;
                        
                        listCartHTML.appendChild(newItem);
                        newItem.innerHTML = `
                            <div class="image">
                                <img src="${info.imgSrc}" >
                            </div>
                            <div class="name">
                                ${info.name}
                            </div>
                            <div class="totalPrice">${(info.price * item.quantity).toLocaleString()}</div>
                            <div class="quantity">
                                <span class="minus"><</span>
                                <span>${item.quantity}</span>
                                <span class="plus">></span>
                            </div>
                        `;
                    });
            
                    iconCartSpan.innerText = totalQuantity;
            
                    cartTotalSpan.innerHTML = `<span> Tổng tiền: ${sum.toLocaleString()} VNĐ </span>`;
                } 
                else{
                    iconCartSpan.innerText = 0;
                    totalQuantity=0;
                    cartTotalSpan.innerHTML ="Gio hang trong"
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
                addCartToHTML();
                addCartToMemory();
            };



            function displaySubProducts(category, productId) {
                const subProducts = productsData.filter(product => product.category === category && product.id !== productId);

                const subProductsContainer = document.querySelector('.sub-products');

                subProductsContainer.innerHTML = '';

                subProducts.forEach(product => {
                    const productElement = createProductElement(product);
                    subProductsContainer.appendChild(productElement);
                });
            }
            // buyNowButton.addEventListener('click', function (event) {
            //     event.preventDefault();
            //     addToCart(product.id); // Add to cart before redirecting
            //     // window.location.href = `payment-login.html?id=${productId}`;
            // });
            const currentProductCategory = product.category;
            const currentProductId = product.id;
            displaySubProducts(currentProductCategory, currentProductId);
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử img có class là "sub"
    const subImages = document.querySelectorAll("img.sub");

    // Lặp qua từng phần tử img
    subImages.forEach((img) => {
        // Kiểm tra xem ảnh có load được không
        img.addEventListener("error", function () {
            // Nếu không tải được, đặt thuộc tính display thành "none"
            img.style.display = "none";
        });
    });
});
