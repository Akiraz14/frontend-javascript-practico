const menuIcon = document.querySelector(".menu")
const emailIcon = document.querySelector(".navbar-email")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
//const productDetailCloseIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
const desktopMenu = document.querySelector(".desktop-menu")
const shoppingCartMenu = document.querySelector(".shoppingCart-container")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector(".product-detail")

var productList = [];
var shoppingCartList = [];

menuIcon.addEventListener("click", toggleMobileMenu)
emailIcon.addEventListener("click", toggleDesktopMenu)
shoppingCartIcon.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu() {
    hideOthersMenus("Desktop")
    desktopMenu.classList.toggle("hide")
}

function toggleMobileMenu() {
    hideOthersMenus("Mobile")
    mobileMenu.classList.toggle("hide")
}

function toggleShoppingCart() {
    hideOthersMenus("ShoppingCart")
    shoppingCartMenu.classList.toggle("hide")
}

function hideOthersMenus(menu) {
    switch (menu) {
        case "Desktop": 
            if (!mobileMenu.classList.contains("hide")) {
                mobileMenu.classList.toggle("hide")
            }
            if (!shoppingCartMenu.classList.contains("hide")) {
                shoppingCartMenu.classList.toggle("hide")
            }
            if (!productDetailContainer.classList.contains("hide")) {
                productDetailContainer.classList.toggle("hide")
            }
            break;
        case "Mobile":
            if (!desktopMenu.classList.contains("hide")) {
                desktopMenu.classList.toggle("hide")
            }
            if (!shoppingCartMenu.classList.contains("hide")) {
                shoppingCartMenu.classList.toggle("hide")
            }
            if (!productDetailContainer.classList.contains("hide")) {
                productDetailContainer.classList.toggle("hide")
            }
            break;
        case "ShoppingCart":
            if (!desktopMenu.classList.contains("hide")) {
                desktopMenu.classList.toggle("hide")
            }
            if (!mobileMenu.classList.contains("hide")) {
                mobileMenu.classList.toggle("hide")
            }
            if (!productDetailContainer.classList.contains("hide")) {
                productDetailContainer.classList.toggle("hide")
            }
            break;
        case "ProductDetail":
            if (!desktopMenu.classList.contains("hide")) {
                desktopMenu.classList.toggle("hide")
            }
            if (!mobileMenu.classList.contains("hide")) {
                mobileMenu.classList.toggle("hide")
            }
            if (!shoppingCartMenu.classList.contains("hide")) {
                shoppingCartMenu.classList.toggle("hide")
            }
            break;
    }
}

function loadProductList() {
    productList.push(
        {
            category: "Clothes",
            name: "White dress",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 40.0,
            image: "https://images.pexels.com/photos/3552358/pexels-photo-3552358.jpeg"
        });
    productList.push(
        {
            category: "Clothes",
            name: "Pink dress",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 40.0,
            image: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Fridge",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 1270.0,
            image: "https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Washer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 930.0,
            image: "https://images.pexels.com/photos/9720924/pexels-photo-9720924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Electronics",
            name: "Television",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 600.0,
            image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Sofa",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 1140.0,
            image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Table",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 1600.0,
            image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Furniture",
            name: "Bed",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 1400.0,
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Van and Wall-E",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 20.0,
            image: "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Wood planes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 15.0,
            image: "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Animals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 25.0,
            image: "https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Toys",
            name: "Car",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 18.0,
            image: "https://images.pexels.com/photos/16060759/pexels-photo-16060759/free-photo-of-coche-vehiculo-vintage-prisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Bicycle",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 120.0,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        });
    productList.push(
        {
            category: "Other",
            name: "Longboard",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 230.0,
            image: "https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Guitar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 230.0,
            image: "https://images.pexels.com/photos/1624753/pexels-photo-1624753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
    productList.push(
        {
            category: "Other",
            name: "Black Guitar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum lectus vel accumsan facilisis. Suspendisse ultrices posuere risus sit amet euismod.",
            price: 430.0,
            image: "https://images.pexels.com/photos/1656415/pexels-photo-1656415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });
}

loadProductList()


function renderProducts(productListArray) {
    for (product of productListArray) {

        const div_ProductCard = document.createElement("div")
        div_ProductCard.classList.add("product-card")
    
        const img_Product = document.createElement("img")
        img_Product.setAttribute("src", product.image)
        img_Product.setAttribute("alt", product.name)
        img_Product.addEventListener("click", openProductDetail)
        div_ProductCard.appendChild(img_Product)
    
        const div_ProductInfo = document.createElement("div")
        div_ProductInfo.classList.add("product-info")
    
        const div_ProductData = document.createElement("div")
        const p_ProductPrice = document.createElement("p")
        p_ProductPrice.innerHTML = "$"+product.price
        const p_ProductName = document.createElement("p")
        p_ProductName.innerHTML = product.name
        div_ProductData.append(p_ProductPrice,p_ProductName)
        div_ProductInfo.appendChild(div_ProductData)
    
        const figure_AddToCart = document.createElement("figure")
        const img_AddToCart = document.createElement("img")
        img_AddToCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        img_AddToCart.setAttribute("alt", "Add to cart")
        figure_AddToCart.appendChild(img_AddToCart)
        div_ProductInfo.appendChild(figure_AddToCart)
        
        div_ProductCard.appendChild(div_ProductInfo)
        cardsContainer.appendChild(div_ProductCard)
    }
}

renderProducts(productList);

function openProductDetail(event) {
    hideOthersMenus("ProductDetail");

    //Clean the product detail container to place new elements
    productDetailContainer.innerHTML = ""

    const product = productList.find(prod => {
        return prod.image == event.srcElement.getAttribute("src")
    });

    //Create and add elements to its parents and the product detail container

    const div_CloseProductDetail = document.createElement("div")
    div_CloseProductDetail.classList.add("product-detail-close")
    const img_CloseIcon = document.createElement("img")
    img_CloseIcon.setAttribute("src", "./icons/icon_close.png")
    img_CloseIcon.setAttribute("alt", "close")
    div_CloseProductDetail.appendChild(img_CloseIcon)
    div_CloseProductDetail.addEventListener("click", closeProductDetail)

    productDetailContainer.appendChild(div_CloseProductDetail)

    const img_Product = document.createElement("img")
    img_Product.setAttribute("src", product.image)
    img_Product.setAttribute("alt", product.name)
    
    productDetailContainer.appendChild(img_Product)

    const div_ProductInfo = document.createElement("div")
    div_ProductInfo.classList.add("product-info")

    const div_ProductData = document.createElement("div")
    const p_ProductPrice = document.createElement("p")
    p_ProductPrice.innerHTML = "$"+product.price
    const p_ProductName = document.createElement("p")
    p_ProductName.innerHTML = product.name
    const p_ProductDescription = document.createElement("p")
    p_ProductDescription.innerHTML = product.description
    div_ProductData.append(p_ProductPrice,p_ProductName,p_ProductDescription)
    div_ProductInfo.appendChild(div_ProductData)

    const button_AddToCart = document.createElement("button")
    button_AddToCart.classList.add("primary-button", "add-to-cart-button")
    const img_AddToCart = document.createElement("img")
    img_AddToCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    img_AddToCart.setAttribute("alt", "Add to cart")
    button_AddToCart.appendChild(img_AddToCart)
    button_AddToCart.innerHTML += "Add to cart"
    button_AddToCart.addEventListener("click", function() {
        shoppingCartList.push(product)
        console.log(shoppingCartList)
    })
    div_ProductInfo.appendChild(button_AddToCart)
    
    productDetailContainer.appendChild(div_ProductInfo)

    productDetailContainer.classList.remove("hide")
}

function closeProductDetail() {
    productDetailContainer.classList.add("hide")
}

