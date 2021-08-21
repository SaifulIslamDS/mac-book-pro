// Product name= Macbook Pro, Default price = $1299
const macbookPrice = document.getElementById("macbook-price");

// Extra memory part buttons 
const memory8 = document.getElementById("memory-8");
const memory16 = document.getElementById("memory-16");
const extraMemoryPrice = document.getElementById("extra-memory-price");

// Extra storage part buttons
const storage256 = document.getElementById("storage-256");
const storage512 = document.getElementById("storage-512");
const storage1tb = document.getElementById("storage-1tb");
const extraStoragePrice = document.getElementById("extra-storage-price");

// Delivery options part buttons
const freeDelivery = document.getElementById("free-delivery");
const expressDelivery = document.getElementById("express-delivery");
const deliveryCharge = document.getElementById("delivery-charge");

// Cart Total
const cartTotal = document.getElementById("cart-total");
// Grand total 
const grandTotal = document.getElementById("grand-total") ;
// Function: Update cart total
function updateCartTotal() {
    const productPrice =  parseFloat(macbookPrice.innerText);
    const memoryPrice = parseFloat(extraMemoryPrice.innerText);
    const storagePrice = parseFloat(extraStoragePrice.innerText);
    const dliveryCost = parseFloat(deliveryCharge.innerText);
    cartTotal.innerText = productPrice + memoryPrice + storagePrice + dliveryCost;
    grandTotal.innerText = cartTotal.innerText;
}
// Add and remove css class with function ifContains 
function ifContains(element){
    return element.classList.contains("active");
}

// Event listeners: Memory
memory8.addEventListener("click", function(){
    // Set css class while active
    if (!ifContains(memory8)) {
        memory8.classList.add("active");
        memory16.classList.remove("active");
    }
    extraMemoryPrice.innerText =  0;
    updateCartTotal();
});
memory16.addEventListener("click", function(){
    // Set css class while active
    if (!ifContains(memory16)) {
        memory16.classList.add("active");
        memory8.classList.remove("active");
    }
    extraMemoryPrice.innerText =  180;
    updateCartTotal();
});

// Event listeners: Storage
storage256.addEventListener("click", function(){
    if (!ifContains(storage256)) {
        storage256.classList.add("active");
        storage512.classList.remove("active");
        storage1tb.classList.remove("active");
    }
    extraStoragePrice.innerText = 0;
    updateCartTotal();
});
storage512.addEventListener("click", function(){
    if (!ifContains(storage512)) {
        storage512.classList.add("active");
        storage256.classList.remove("active");
        storage1tb.classList.remove("active");
    }
    extraStoragePrice.innerText = 100;
    updateCartTotal();
});
storage1tb.addEventListener("click", function(){
    if (!ifContains(storage1tb)) {
        storage1tb.classList.add("active");
        storage256.classList.remove("active");
        storage512.classList.remove("active");
    }
    extraStoragePrice.innerText = 180;
    updateCartTotal();
});

// Event listeners: Delivery
freeDelivery.addEventListener("click", function(){
    if (!ifContains(freeDelivery)) {
        freeDelivery.classList.add("active");
        expressDelivery.classList.remove("active");
    }
    deliveryCharge.innerText = 0;
    updateCartTotal();
});
expressDelivery.addEventListener("click", function(){
    if (!ifContains(expressDelivery)) {
        expressDelivery.classList.add("active");
        freeDelivery.classList.remove("active");
    }
    deliveryCharge.innerText = 20;
    updateCartTotal();
});

// Coupon code application
const promoCodeBtn = document.getElementById("promo-code-btn");
const promoCodeValue = document.getElementById("promo-code-value");

// Adding event listener for promocode 
promoCodeBtn.addEventListener("click", function(){
    if (promoCodeValue.value == "stevekaku") {
        grandTotal.innerText = cartTotal.innerText - (cartTotal.innerText * 20)/100;
    } else {
        const errorMsg = document.getElementById("error-msg");
        errorMsg.style.display = "block";
    }
});