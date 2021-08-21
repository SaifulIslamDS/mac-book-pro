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

// Function: Update cart total
function updateCartTotal() {
    const productPrice =  parseFloat(macbookPrice.innerText);
    const memoryPrice = parseFloat(extraMemoryPrice.innerText);
    const storagePrice = parseFloat(extraStoragePrice.innerText);
    const dliveryCost = parseFloat(deliveryCharge.innerText);
    cartTotal.innerText = productPrice + memoryPrice + storagePrice + dliveryCost;
}

// Event listeners: Memory
memory8.addEventListener("click", function(){
    extraMemoryPrice.innerText =  0;
    updateCartTotal()
});
memory16.addEventListener("click", function(){
    extraMemoryPrice.innerText =  180;
    updateCartTotal()
});

// Event listeners: Storage
storage256.addEventListener("click", function(){
    extraStoragePrice.innerText = 0;
    updateCartTotal();
});
storage512.addEventListener("click", function(){
    extraStoragePrice.innerText = 100;
    updateCartTotal();
});
storage1tb.addEventListener("click", function(){
    extraStoragePrice.innerText = 180;
    updateCartTotal();
});

// Event listeners: Delivery
freeDelivery.addEventListener("click", function(){
    deliveryCharge.innerText = 0;
    updateCartTotal();
});
expressDelivery.addEventListener("click", function(){
    deliveryCharge.innerText = 20;
    updateCartTotal();
    console.log(deliveryCharge.innerText);
});

// Coup



