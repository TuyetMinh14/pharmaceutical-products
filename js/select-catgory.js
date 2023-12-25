
const menuButtons = document.querySelectorAll('.menu-btn');
const itemsPerPage = 6;
    let currentPage = 1;
    let currentCategory = '';
    let currentSortOrder = ''; 

    
menuButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (event.target) {
            displayProductsByCategory(event.target.innerText.trim());
        }
    });
});


document.getElementById('all').addEventListener('click', function (event) {
    if (event.target) {
        displayProductsByCategory('');
    }
});

function displayProductsByCategory(categoryId) {
    currentCategory = categoryId;
    currentPage = 1;
    displayProductsOnPage(currentPage);
    generatePagination();
}


function displayProductsOnPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedProducts = sortProducts(productsData, currentSortOrder);
    const productsToDisplay = sortedProducts.filter(product => {
        return currentCategory === '' || product.category === currentCategory || product.categoryName === currentCategory;
    }).slice(startIndex, endIndex);
    displayProducts(productsToDisplay);
}

function displayProducts(products) {
    productContainer.innerHTML = '';
    products.forEach(product => {
        productElement = createProductElement(product);
        productContainer.appendChild(productElement);
    });
}
if (!currentCategory && currentPage === 1) {
    displayProductsOnPage(currentPage);
    generatePagination();
}
displayProductsByCategory('');