const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const emailIcon = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuIcon.addEventListener("click", toggleMobileMenu);
emailIcon.addEventListener("click", toggleDesktopMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
    hideOthersMenus("Desktop");
    desktopMenu.classList.toggle("hide");
}

function toggleMobileMenu() {
    hideOthersMenus("Mobile");
    mobileMenu.classList.toggle("hide");
}

function toggleShoppingCart() {
    hideOthersMenus("ShoppingCart");
    shoppingCartMenu.classList.toggle("hide");
}

function hideOthersMenus(menu) {
    switch (menu) {
        case "Desktop": 
            if (!mobileMenu.classList.contains("hide")) {
                mobileMenu.classList.toggle("hide");
            }
            if (!shoppingCartMenu.classList.contains("hide")) {
                shoppingCartMenu.classList.toggle("hide");
            }
            break;
        case "Mobile":
            if (!desktopMenu.classList.contains("hide")) {
                desktopMenu.classList.toggle("hide");
            }
            if (!shoppingCartMenu.classList.contains("hide")) {
                shoppingCartMenu.classList.toggle("hide");
            }
            break;
        case "ShoppingCart":
            if (!desktopMenu.classList.contains("hide")) {
                desktopMenu.classList.toggle("hide");
            }
            if (!mobileMenu.classList.contains("hide")) {
                mobileMenu.classList.toggle("hide");
            }
            break;
    }
}

var productList = []

function loadProductList() {
    productList.push(
        {
            category: "Clothes",
            name: "White dress",
            price: 40.0,
            image: "https://images.pexels.com/photos/3552358/pexels-photo-3552358.jpeg"
        });
    productList.push(
        {
            category: "Clothes",
            name: "Pink dress",
            price: 40.0,
            image: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Fridge",
            price: 1270.0,
            image: "https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Washer",
            price: 930.0,
            image: "https://images.pexels.com/photos/9720924/pexels-photo-9720924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Television",
            price: 600.0,
            image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Sofa",
            price: 1140.0,
            image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Table",
            price: 1600.0,
            image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Bed",
            price: 1400.0,
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Van and Wall-E",
            price: 20.0,
            image: "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Wood planes",
            price: 15.0,
            image: "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Animals",
            price: 25.0,
            image: "https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Car",
            price: 18.0,
            image: "https://images.pexels.com/photos/16060759/pexels-photo-16060759/free-photo-of-coche-vehiculo-vintage-prisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Bicycle",
            price: 120.0,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        });
    productList.push(
        {
            category: "Other",
            name: "Longboard",
            price: 230.0,
            image: "https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Guitar",
            price: 230.0,
            image: "https://images.pexels.com/photos/1624753/pexels-photo-1624753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Black Guitar",
            price: 430.0,
            image: "https://images.pexels.com/photos/1656415/pexels-photo-1656415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
}

loadProductList()


function renderProducts(productList) {
    for (product of productList) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.image);
        imgProduct.setAttribute("alt", product.name);
        productCard.appendChild(imgProduct);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productData = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$"+product.price
        const productName = document.createElement("p");
        productName.innerHTML = product.name
        productData.append(productPrice,productName);
        productInfo.appendChild(productData);
    
        const figureAdd = document.createElement("figure");
        const imgAddToCart = document.createElement("img");
        imgAddToCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
        imgAddToCart.setAttribute("alt", "Add to cart");
        figureAdd.appendChild(imgAddToCart);
        productInfo.appendChild(figureAdd);
        
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

