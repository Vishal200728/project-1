const products = [

{ "id": 1, "name": "Sony Bravia 32-Inch HD Ready Smart LED TV", "price": 199.99, "category": "Television", "image": "Sony Bravia 32-Inch HD Ready Smart LED TV.webp" },
 { "id": 2, "name": "Sony Bravia 43-Inch 4K Ultra HD Smart TV", "price": 349.99, "category": "Television", "image": "Sony Bravia 43-Inch 4K Ultra HD Smart TV.webp" },
 { "id": 3, "name": "Sony 55-Inch 4K OLED TV", "price": 899.99, "category": "Television", "image": "Sony 55-Inch 4K OLED TV.webp" },
 { "id": 4, "name": "Sony Bravia 65-Inch 4K Google TV", "price": 1199.99, "category": "Television", "image": "Sony Bravia 65-Inch 4K Google TV.webp" },
 { "id": 5, "name": "Sony XR-75Z9J 75-Inch 8K Smart TV", "price": 2999.99, "category": "Television", "image": "Sony XR-75Z9J 75-Inch 8K Smart TV.webp" },
 { "id": 6, "name": "Sony 40-Inch Full HD Smart LED TV", "price": 279.99, "category": "Television", "image": "Sony 40-Inch Full HD Smart LED TV.webp" },
 { "id": 7, "name": "Sony Bravia 50-Inch 4K LED TV", "price": 599.99, "category": "Television", "image": "Sony Bravia 50-Inch 4K LED TV.webp" },
 { "id": 8, "name": "Sony 75-Inch XR OLED 4K TV", "price": 2199.99, "category": "Television", "image": "Sony 75-Inch XR OLED 4K TV.webp" },
 { "id": 9, "name": "boAt Smart TV 43-Inch Full HD Android TV", "price": 239.99, "category": "Television", "image": "boAt Smart TV 43-Inch Full HD Android TV.webp" },
 { "id": 10, "name": "boAt 50-Inch 4K Android LED TV", "price": 349.99, "category": "Television", "image": "boAt 50-Inch 4K Android LED TV.webp" },
{ "id": 11, "name": "boAt 32-Inch HD Ready Smart TV", "price": 159.99, "category": "Television", "image": "boAt 32-Inch HD Ready Smart TV.webp" },
{ "id": 12, "name": "boAt 43-Inch Ultra HD Smart LED TV", "price": 269.99, "category": "Television", "image": "boAt 43-Inch Ultra HD Smart LED TV.webp" },
{ "id": 13, "name": "boAt 55-Inch 4K Smart Android TV", "price": 399.99, "category": "Television", "image": "boAt 55-Inch 4K Smart Android TV.webp" },
{ "id": 14, "name": "boAt 40-Inch Full HD Smart TV", "price": 209.99, "category": "Television", "image": "boAt 40-Inch Full HD Smart TV.webp" },
 { "id": 15, "name": "boAt 60-Inch Smart 4K TV with Voice Assistant", "price": 499.99, "category": "Television", "image": "boAt 60-Inch Smart 4K TV with Voice Assistant.webp" },
 { "id": 16, "name": "boAt 75-Inch 4K UHD Smart LED TV", "price": 699.99, "category": "Television", "image": "boAt 75-Inch 4K UHD Smart LED TV.webp" },
 { "id": 17, "name": "Apple 32-Inch Smart Monitor TV", "price": 399.99, "category": "Television", "image": "Apple 32-Inch Smart Monitor TV.webp" },
 { "id": 18, "name": "Apple TV 4K 3rd Generation", "price": 129.99, "category": "Television", "image": "Apple TV 4K 3rd Generation.webp" },
 { "id": 19, "name": "Apple 50-Inch 4K Pro Display", "price": 1099.99, "category": "Television", "image": "Apple 50-Inch 4K Pro Display.webp" },
 { "id": 20, "name": "Apple Smart TV 65-Inch UHD", "price": 1499.99, "category": "Television", "image": "Apple Smart TV 65-Inch UHD.webp" },
 { "id": 21, "name": "Apple OLED TV 55-Inch 4K", "price": 1699.99, "category": "Television", "image": "Apple OLED TV 55-Inch 4K.webp" },
 { "id": 22, "name": "Apple 75-Inch Mini-LED Smart TV", "price": 2299.99, "category": "Television", "image": "Apple 75-Inch Mini-LED Smart TV.webp" },
 { "id": 23, "name": "Apple TV Display XDR 6K", "price": 4999.99, "category": "Television", "image": "Apple TV Display XDR 6K.webp" },
 { "id": 24, "name": "Apple 40-Inch Full HD TV with Siri Remote", "price": 899.99, "category": "Television", "image": "Apple 40-Inch Full HD TV with Siri Remote.webp" },

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render all products (no search, no filter)
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  saveCart();
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const cartCount = document.getElementById("cart-count");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalDisplay.textContent = `Total: ₹0.00`;
    cartCount.textContent = `Cart: 0`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price.toFixed(2)} × ${item.quantity}
      <button class="increase-btn" onclick="increaseQuantity(${index})">+</button>
      <button class="decrease-btn" onclick="decreaseQuantity(${index})">-</button>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  cartCount.textContent = `Cart: ${cart.length}`;
  totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Event listener for clear cart button
document.getElementById("clear-cart").addEventListener("click", clearCart);

// Initialize
renderProducts();
updateCart();