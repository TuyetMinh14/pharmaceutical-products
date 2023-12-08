let menuBtns = document.getElementsByClassName('menu-btn');
Array.from(menuBtns).forEach(function (btn) {
    btn.addEventListener('click', function () {
        let id = this.id;
        let click = document.getElementById('list-items-'+id);
        let show = document.getElementsByClassName('show');
        if(click.classList.contains('show'))
        {
           click.classList.remove('show') 
        }
        else {
            Array.from(show).forEach(function (item){
                item.classList.remove('show');
            });

            click.classList.add('show')
        }

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productsData = [
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_1_l.webp",
            alt: "post",
            category:"Thuốc không kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147005 
        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P14798_1_l.webp",
            alt: "post",
            category:"Thuốc không kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147001 
        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26148_1.jpg",
            alt: "post",
            category:"Thuốc kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147002 

        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P26350_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147003 
        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08401_11-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147004 
        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P25117_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147012 

        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22985_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Dụng cụ sơ cứu",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147045 

        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P21744_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147076 

        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08241_3-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147021 
        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22015_1N-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147011 

        },
        {
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P07218_1_l-thumbnail-510x510.webp",
            alt: "post",
            category:"Chống muỗi",
                        name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147032 

        },
    ];

    const productContainer = document.getElementById("posts-main-container");
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sortSelect = document.getElementById("sort-items");


    function createProductElement(product) {
        const productDiv = document.createElement("div");
        productDiv.className = "product-container";

        const postImgDiv = document.createElement("div");
        postImgDiv.className = "post-img";

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.alt;
        postImgDiv.appendChild(img);

        const postContentDiv = document.createElement("div");
        postContentDiv.className = "post-content";

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price.toLocaleString() + ' VNĐ';

        const cartBtn = document.createElement("button");
        cartBtn.type = "button";
        cartBtn.className = "cart-btn";
        cartBtn.textContent = "Thêm vào giỏ hàng";

        postContentDiv.appendChild(productName);
        postContentDiv.appendChild(productPrice);

        productDiv.appendChild(postImgDiv);
        productDiv.appendChild(postContentDiv);
        productDiv.appendChild(cartBtn);

        return productDiv;
    }

    const itemsPerPage = 6;
    let currentPage = 1;
    let currentCategory = '';
    let link = document.getElementsByClassName('link');
    let currentValue = 1;

    function displayProductsByCategory(categoryName) {
        currentCategory = categoryName;
        currentPage = 1; 
        displayProductsOnPage(currentPage);
        generatePagination();
    }

    function displayProductsOnPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToDisplay = productsData.filter(product => {
            return currentCategory === '' || product.category === currentCategory;
        }).slice(startIndex, endIndex);
        displayProducts(productsToDisplay);
    }

    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });
    }

    function generatePagination() {
        const totalItems = productsData.filter(product => {
            return currentCategory === '' || product.category === currentCategory;
        }).length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;

            a.addEventListener('click', function () {
                currentPage = i;
                displayProductsOnPage(currentPage);
                highlightCurrentPage();
                setQueryParameters();
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }

        highlightCurrentPage();
    }

    function highlightCurrentPage() {
        const paginationLinks = document.querySelectorAll('.pagination a');
        paginationLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.textContent) === currentPage) {
                link.classList.add('active');
            }
        });
    }


    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const categoryId = this.id;
            displayProductsByCategory('');
            if (categoryId === 'all' || categoryId === '') {
                displayProductsByCategory('');
            } else {
                displayProductsByCategory(categoryId);
            }
        });
    });
    

    document.querySelectorAll('.list-items').forEach(list => {
        list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                const selectedCategory = event.target.innerText.trim();
                displayProductsByCategory(selectedCategory);
            }
        });
    });

    function sortProductsByPrice(order) {
        const sortedProducts = [...productsData];
        sortedProducts.sort((a, b) => {
            return order === "Giảm dần" ? b.price - a.price : a.price - b.price;
        });
        displayProducts(sortedProducts);
    }

    sortSelect.addEventListener('change', function () {
        const selectedOption = this.value;
        if (selectedOption === "Sắp xếp") {
            displayProducts(productsData);
        } else if (selectedOption === "Giảm dần" || selectedOption === "Tăng dần") {
            sortProductsByPrice(selectedOption);
        }
    });

    if (!currentCategory && currentPage === 1) {
        displayProductsOnPage(currentPage);
        generatePagination();
    }
    displayProductsByCategory('');
});







