const products = [
  {
    id: 1,
    name: "KVM Switch: A Monitor, Keyboard, Mouse for Two Computers",
    price: 5.000,
    image: "AVA004241-1900x1069.jpg",
    category: "computers"
  },
  {
    id: 2,
    name: "Best computers under ₹10000 for everyday use with reliable ",
    price: 49.99,
    image: "computer_under_Rs_10000_1753357132468_1753357138570.avif",
    category: "computers"
  },
  {
    id: 3,
    name: "Navigating the World of New Computer Systems ",
    price: 14.99,
    image: "Navigating-the-World-of-New-Computer-Systems.jpg",
    category: "computers"
  },
  {
    id: 4,
    name: "CHIST Core I5 Desktop Complete Computer System Full Setup ",
    price: 59.99,
    image: "Microsofts-Surface-Studio-Failed-to-Understand-the-Market-it-Was-Selling-To.jpg",
    category: "computers"
  },
  {
    id: 5,
    name: "GeForce 4GB GDDR5 Desktop Gaming Computer",
    price: 59.99,
    image: "Desktop-Computer-by-edit-micro.jpg",
    category: "computers"
  },
  {
    id: 6,
    name: "PC Gaming Computer Fisso Desktop Completo",
    price: 59.99,
    image: "desktop.jpg",
    category: "computers"
  },
  {
    id: 7,
    name: "WeBlog - tower powerfull pc in offerta a giugno 2025",
    price: 59.99,
    image: "NZVGFGtR5xgjTMoDWwYjQP.jpg",
    category: "computers"
  },
  {
    id: 8,
    name: "PC Gaming Computer Fisso Desktop Completo GT1030 ",
    price: 59.99,
    image: "MSFT-All-in-One_1040x585.avif",
    category: "computers"
  },
  {
    id: 9,
    name: "GT1030 Full Desktop PC Gaming Computer",
    price: 59.99,
    image: "pexels-designecologist-1779487.jpg",
    category: "computers"
  },
  {
    id: 10,
    name: "The Best All-in-One powerfull pc Computers for sales ",
    price: 59.99,
    image: "the-best-all-in-one-computers-for-2025_73yj.jpg",
    category: "computers"
  },
  {
    id: 11,
    name: "Restored Fast Gaming HP 600 G1 Desktop SFF  ",
    price: 59.99,
    image: "lenovo-ideacentre-aio-5i-27-gen7-review-10.avif",
    category: "computers"
  },
  {
    id: 12,
    name: "MEINPC AMD Ryzen 7 5700G 8x 4.6 GHz 32 GB RAM",
    price: 59.99,
    image: "best_tower_desktop_computers_1750152910753_1750152918307.avif",
    category: "computers"
  },
  {
    id: 13,
    name: "AWD-IT Gaming PC Bundle - AMD Ryzen 5 Pro 3350G Quad",
    price: 59.99,
    image: "best_tower_desktop_computers_1750152910753_1750152918307.avif",
    category: "computers"
  },
  {
    id: 14,
    name: "BEASTCOM Q3 Gaming PC Set Complete AMD ",
    price: 59.99,
    image: "computers_under_Rs_10000_1751609751440_1751609762564.avif",
    category: "computers"
  },
  {
    id: 15,
    name: "Amazon.com: BEASTCOM® Q3 Essential Gaming, ",
    price: 59.99,
    image: "hq720.jpg",
    category: "computers"
  },
  {
    id: 16,
    name: "HZG Gaming Computer PC Desktop" ,
    price: 59.99,
    image: "lenovo-ideacentre-aio-5i-27-gen7-review-10.avif",
    category: "computers"
  },
  {
    id: 17,
    name: "STGAubron Gaming PC Computer Desktop, Intel Core i7 up to 3.9G, Radeon RX 590 8G, 32G RAM, 1T SSD, 600M WiFi, BT 5.0, RGB Fan x 4,",
    price: 59.99,
    image: "new-02-1-600x600-1.jpg.webp",
    category: "computers"
  },
  {
    id: 18,
    name: "KOORUI 27 Inch Curved Monitor (1500R), Full HD (1920x1080), VA, 75Hz, 5ms, HDMI, VGA, Gaming Monitor, Eye Saver Mode, Flicker Safe",
    price: 59.99,
    image: "giant_240625.jpg",
    category: "computers"
  },
  {
    id: 19,
    name: "Gawfolk 27 Inch 100Hz Curved Gaming Monitor, Full HD 1080P PC Screen, Integrated Speaker Monitor 1800R Frameless flicker safe ",
    price: 59.99,
    image: "new-02-1-600x600-1.jpg.webp",
    category: "computers"
  },
  {
    id: 20,
    name: "GeForce 4GB GDDR5 Desktop Gaming Computer Complete Desktop – Keyboard – Mouse – Headphones – Windows 11 Pro – WiFi USB – HDMI (Ram: 16 GB – 32g ram",
    price: 59.99,
    image: "61j3otNa6sL._UF1000,1000_QL80_.jpg",
    category: "computers"
  },
  {
    id: 21,
    name: "T1030 Full Desktop PC Gaming Computer – Keyboard – Mouse – Headphones – Windows 11 Pro – WiFi USB – HDMI (CPU: I5 – RAM 16 GB -SSD 240 GB, 22 Full HD 1080P PC",
    price: 59.99,
    image: "41RbCADklWL._UF1000,1000_QL80_.jpg",
    category: "computers"
  },
  {
    id: 22,
    name: "PC Gaming Computer  Desktop Completo GeForce 4GB GDDR5 - Tastiera - Mouse - Cuffie - Windows 11 Full HD 1080P PC Screen, 32g",
    price: 59.99,
    image: "1-fron889-frontech-gaming-pc-original-imah5ttvmpfmz6sd.webp",
    category: "computers"
  },
  {
    id: 23,
    name: "ULTRA FAST i3 i5 i7 Desktop Gaming Computer PC 2TB 16GB RAM GTX 1660 Windows 10 | eBay UK Full HD 1080P PC Screen,",
    price: 59.99,
    image: "dd49eb5bf3a6c340588c19036b8eb1dc.jpg",
    category: "computers"
  },
  {
    id: 24,
    name: "Gaming PC Bundle i5 Computer Desktop 8GB RAM 1TB HDD Windows 10 GT 710 2GB WiFi | eBay UK Full HD 1080P PC Screen,",
    price: 59.99,
    image: "giant_240625.jpg",
    category: "computers"
  },
  
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
