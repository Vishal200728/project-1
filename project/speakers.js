const products = [
  {
    id: 1,
    name: "MarQ by Flipkart Thunder 160, 160 Watts, 2.1 Channel, I...",
    price: 5.000,
    image: "-original-imahed45pkjgs6yt.webp",
    category: "speakers"
  },
  {
    id: 2,
    name: "F FERONS Powerpact bass & stereo audio color changIng l...",
    price: 49.99,
    image: "stereo-audio-color-changing-led-light-wireless-portable-3-w-original-imah52u8qf3gbtyz.webp",
    category: "speakers"
  },
  {
    id: 3,
    name: "MZ M406SP (PORTABLE BLUETOOTH SPEAKER) Dynamic Thunder ..",
    price: 14.99,
    image: "m412sp-portable-dynamic-thunder-sound-with-high-bass-mz-original-imah77cxzzv4tbz8.webp",
    category: "speakers"
  },
  {
    id: 4,
    name: "F FERONS Wireless rechargeable portable Premium bass Mu...",
    price: 59.99,
    image: "brand-new-3d-sound-with-rock-beat-blast-stereo-deep-bass-original-imafvxczvzhcxcpp.webp",
    category: "speakers"
  },
  {
    id: 5,
    name: "F FERONS Wireless rechargeable portable Premium bass Mu...",
    price: 59.99,
    image: "firebar-12-2-infire-original-imah9kd9n8v5tfhp.webp",
    category: "speakers"
  },
  {
    id: 6,
    name: "iNFiRe Party Soundbar|upto 10 Hours PlayTime With TWS F...",
    price: 59.99,
    image: "m406sp-portable-bluetooth-speaker-dynamic-thunder-sound-1200mah-original-imah77ddwr2ynpfh.webp",
    category: "speakers"
  },
  {
    id: 7,
    name: "GOBOULT (previously Boult)Bassbox X160 2.1 Channel, 160...",
    price: 59.99,
    image: "-original-imaheqrrkqhfy6mk.webp",
    category: "speakers"
  },
  {
    id: 8,
    name: "F FERONS Wireless rechargeable portable Premium bass Mu...",
    price: 59.99,
    image: "brand-new-3d-sound-with-rock-beat-blast-stereo-deep-bass-original-imafvxczvzhcxcpp.webp",
    category: "speakers"
  },
  {
    id: 9,
    name: "MZ M423SP (PORTABLE HOME TV) Dynamic Thunder Sound 2400...",
    price: 59.99,
    image: "m423sp-portable-home-tv-dynamic-thunder-sound-2400mah-battery-mz-original-imahe2b4nxegrsay.webp",
    category: "speakers"
  },
  {
    id: 10,
    name: "iNFiRe FireBar 20 upto 8 Hours PlayTime, Surrounding So..",
    price: 59.99,
    image: "firebar-20-infire-original-imaha6ctaxz6ysjp.webp",
    category: "speakers"
  },
  {
    id: 11,
    name: "boAt Stone 135 with 5W RMS, upto 11 Hours Playback & TW...",
    price: 59.99,
    image: "-original-image9ezeb6yzyya.webp",
    category: "speakers"
  },
  {
    id: 12,
    name: "F FERONS Neuton Powered Dynamic Stereo Bass Audio Porta...",
    price: 59.99,
    image: "stone-1-f-ferons-original-imahdt3bdjep8pph.webp",
    category: "speakers"
  },
  {
    id: 13,
    name: "ZEBRONICS SOUND FEAST 40 (ZEB-PSPK 48) 8 W Bluetooth Pa...",
    price: 59.99,
    image: "zeb-sound-feast-40-zeb-pspk-48-zebronics-original-imah66wqjbgwzhfg.webp",
    category: "speakers"
  },
  {
    id: 14,
    name: "ZEBRONICS Zeb - Fame 5 watt Laptop/Desktop Speaker",
    price: 59.99,
    image: "zeb-fame-zebronics-original-imahddkwggqghwnq.webp",
    category: "speakers"
  },
  {
    id: 15,
    name: "ZEBRONICS PSPK9 (County) Built-in FM Radio , Aux input ...",
    price: 59.99,
    image: "-original-imahb5tghxwy25gw.webp",
    category: "speakers"
  },
  {
    id: 16,
    name: "ZEBRONICS Sound Feast 90 (PSPK 11), BTv5.0, TWS, 6.3mm ...",
    price: 59.99,
    image: "pspk11-zebronics-original-imahdg2wwbhmhhsn.webp",
    category: "speakers"
  },
  {
    id: 17,
    name: "F FERONS Powerpact Bass Stereo Audio spiral led lighting portable wireless Rechargeable 5 W Bluetooth Speaker  (Black, 5.0 Channel)",
    price: 59.99,
    image: "ultra-f-ferons-original-imah7fj4bjwtesk6.webp",
    category: "speakers"
  },
  {
    id: 18,
    name: "Vedanta SBT-917 20 W Bluetooth Speaker",
    price: 59.99,
    image: "sbt-917-vedanta-original-imah26jkt5nu44jt.webp",
    category: "speakers"
  },
  {
    id: 19,
    name: "Intex Beast 603 8 W Bluetooth Speaker",
    price: 59.99,
    image: "beast-603-portable-wireless-bt-speaker-with-8w-sound-output-up-original-imaghnwzc2h7egnp.webp",
    category: "speakers"
  },
  {
    id: 20,
    name: "MZ S653 (PORTABLE BLUETOOTH SPEAKER) Dynamic Thunder So...",
    price: 59.99,
    image: "s653-portable-bluetooth-speaker-dynamic-thunder-sound-with-high-original-imahe29gwgsmzkuk.webp",
    category: "speakers"
  },
  {
    id: 21,
    name: "ZEBRONICS Zeb-Sunshine 60 W Bluetooth Home Theatre",
    price: 59.99,
    image: "zeb-sunshine-zebronics-original-imafvzhfys5pjtmz.webp",
    category: "speakers"
  },
  {
    id: 22,
    name: "etmax NANO PLUS 30 W Bluetooth Home Theatre",
    price: 59.99,
    image: "nano-plus-et-1414-bluetooth-etmax-original-imagywjgsncxm3qy.webp",
    category: "speakers"
  },
  {
    id: 23,
    name: "ZEBRONICS ZEB-WARRIOR 10 W Laptop/Desktop Speaker ",
    price: 59.99,
    image: "zeb-warrior-zebronics-original-imah43f5jnzzhzsu.webp",
    category: "speakers"
  },
  {
    id: 24,
    name: "Mivi Paly 12HRS Playback, Bass Boosted,TWS Feature, IPX...",
    price: 59.99,
    image: "-original-imahc45csq5dc8tm.webp",
    category: "speakers"
  }
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
