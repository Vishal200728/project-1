// =================================================================
// 0. GLOBAL SHOP STATE AND UTILITIES
// =================================================================

// 1. Array to hold all products displayed in the shop grid
let shopProducts = []; 
// Store the full, unfiltered list of products globally for filtering reference
let allProducts = []; 

// 2. Cart state
let cart = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
};

// --- DOM REFERENCES ---
const productGrid = document.getElementById('products');
const cartCountElement = document.querySelector('.site-header .tag');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-footer .cart-total');
const cartToggleCheckbox = document.getElementById('cart-toggle');
const addProductForm = document.querySelector('.modal-box .form'); 
const body = document.body; 

// --- NEW DOM REFERENCES FOR FILTERING (MATCHES REQUIRED HTML IDs) ---
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');

// Global counter for newly added products
let productIdCounter = 19; 

// --- UTILITY: Format Price (e.g., 5999 -> ₹ 5,999)
const formatPrice = (price) => `₹ ${parseFloat(price).toLocaleString('en-IN')}`;


// =================================================================
// 1. PRODUCT INITIALIZATION & RENDERING
// =================================================================

/**
 * Reads existing product cards from the HTML structure and initializes the
 * shopProducts array.
 */
function initializeShopProductsFromHTML() {
    if (shopProducts.length > 0) return; 
    
    const cards = productGrid.querySelectorAll('.card');
    const tempProducts = []; 

    cards.forEach((card, index) => {
        const id = `${index + 1}`; 
        const metaText = card.querySelector('.meta').textContent;
        const priceElement = card.querySelector('.price');
        
        let price = 0;
        if (priceElement) {
            const priceText = priceElement.textContent.replace('₹', '').replace(/,/g, '').trim();
            price = parseInt(priceText) || 0;
        }

        tempProducts.push({
            id: id,
            name: card.querySelector('h3').textContent.trim(),
            // Assumes meta format is "Model: X • Category"
            model: metaText.split('•')[0].replace('Model:', '').trim(),
            category: metaText.split('•')[1].trim(),
            price: price,
            image: card.querySelector('img').getAttribute('src'),
        });
    });
    
    // Assign the list to both current (displayed) and master (unfiltered) list
    shopProducts = tempProducts;
    allProducts = [...tempProducts]; 

    // Clear the static HTML content so only the dynamic renderShopGrid output is shown
    const gridContainer = productGrid.querySelector('.grid');
    if (gridContainer) {
        gridContainer.innerHTML = '';
    }
}


/**
 * Renders the products in the current 'shopProducts' array to the main grid.
 * NOTE: Product removal checkbox HTML has been removed here.
 */
function renderShopGrid() {
    const gridContainer = productGrid.querySelector('.grid');
    if (!gridContainer) return;

    const cardsHtml = shopProducts.map(product => `
        <article class="card" data-id="${product.id}">
            
            <a href="#view-${product.id}" class="thumb">
                <img src="${product.image}" alt="${product.name}" />
            </a>
            
            <h3>${product.name}</h3>
            <div class="meta">Model: ${product.model} • ${product.category}</div>
            <div class="price">${formatPrice(product.price)}</div>
            <div class="card-actions">
                <a href="#detail-${product.id}" class="btn primary">View details</a>
                <span class="btn ghost quick-buy" data-id="${product.id}">Quick buy</span>
            </div>
        </article>
    `).join('');

    gridContainer.innerHTML = cardsHtml;
}


// =================================================================
// 2. SEARCH AND FILTERING
// =================================================================

/**
 * Populates the category filter dropdown based on unique categories in allProducts.
 */
function populateCategories() {
    if (!categorySelect) return;
    
    // Get unique categories from the master list
    const categories = allProducts.map(product => product.category);
    const uniqueCategories = [...new Set(categories)].sort();

    let optionsHtml = '<option value="all">All Categories</option>';
    
    // Build option HTML
    uniqueCategories.forEach(category => {
        optionsHtml += `<option value="${category}">${category}</option>`;
    });

    categorySelect.innerHTML = optionsHtml;
}


/**
 * Filters the products based on the current search term and selected category.
 */
function filterProducts() {
    if (!searchInput || !categorySelect) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value.toLowerCase();

    // Start with the full product list (allProducts)
    let filteredList = allProducts;
    
    // 1. Filter by Category
    if (selectedCategory !== 'all') {
        filteredList = filteredList.filter(product => 
            product.category.toLowerCase() === selectedCategory
        );
    }

    // 2. Filter by Search Term (Name, Model, or Category)
    if (searchTerm) {
        filteredList = filteredList.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.model.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // 3. Update the displayed products
    shopProducts = filteredList;
    renderShopGrid(); 

    // Optional: Add message if no products are found
    if (shopProducts.length === 0) {
        const gridContainer = productGrid.querySelector('.grid');
        if (gridContainer) {
            gridContainer.innerHTML = '<p style="text-align:center; padding: 20px;">No products found matching your criteria.</p>';
        }
    }
}


// =================================================================
// 3. PRODUCT ADDITION
// =================================================================

/**
 * Creates the required static HTML overlay section for a dynamically added product.
 */
function createStaticDetailOverlay(product) {
    const detailHtml = `
        <section id="detail-${product.id}" class="overlay dynamic-detail-overlay" aria-hidden="true">
            <div class="detail-box">
                <div class="detail-left">
                    <div class="big"><img src="${product.image}" alt="${product.name}" /></div>
                    <div style="font-size:.95rem;color:#556074;margin-top:.5rem">${product.model} </div>
                </div>
                <div class="detail-right">
                    <h2>${product.name}</h2>
                    <a class="close-link btn small" href="#products">Close</a>
                    <div class="meta"><strong>Category:</strong> ${product.category}</div>
                    <div class="desc">
                        Dynamically added product: ${product.name} - Model ${product.model}.
                    </div>
                    <div class="price">${formatPrice(product.price)}</div>

                    <div style="margin-top:auto;display:flex;gap:.6rem">
                        <a class="btn primary" href="#products">Add to cart</a>
                        <a class="btn ghost buy-now" href="#products">Buy now</a>
                    </div>
                </div>
            </div>
        </section>
    `;
    body.insertAdjacentHTML('beforeend', detailHtml);
}

/**
 * Handles product creation from the modal form.
 */
function handleAddProduct(event) {
    event.preventDefault();

    const form = event.target;
    
    const inputs = form.querySelectorAll('input:not([type="submit"])');
    
    const newId = productIdCounter++;

    const newProduct = {
        id: `${newId}`, 
        name: inputs[0].value.trim() || `New Product ${newId}`,
        model: inputs[1].value.trim() || 'N/A',
        category: inputs[2].value.trim() || 'Uncategorized',
        price: parseInt(inputs[3].value) || 0,
        image: inputs[5].value.trim() || 'https://picsum.photos/300', 
    };
    
    // Add to master list
    allProducts.push(newProduct);

    createStaticDetailOverlay(newProduct); 
    populateCategories(); // Update the filter dropdown
    filterProducts(); // Re-render the grid based on current filters (if any)

    form.reset();
    document.getElementById('add-toggle').checked = false;
    
    console.log(`Product "${newProduct.name}" added to the shop.`);
}

// =================================================================
// 4. CART MANAGEMENT LOGIC
// =================================================================

function updateCartUI() {
    let newTotalCount = 0;
    let newTotalPrice = 0;

    cart.items.forEach(item => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('₹', '').replace(/,/g, '').trim()) : item.price;
        newTotalCount += item.quantity;
        newTotalPrice += price * item.quantity;
    });

    cart.totalCount = newTotalCount;
    cart.totalPrice = newTotalPrice;

    if (cartCountElement) {
        cartCountElement.textContent = cart.totalCount;
    }
    if (cartTotalElement) {
        cartTotalElement.textContent = `Subtotal: ${formatPrice(newTotalPrice)}`;
    }

    renderCartItems();
}

function renderCartItems() {
    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Your cart is empty.</p>';
        return;
    }

    let itemsHtml = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div>
                <div class="cart-title">${item.name}</div>
                <div class="cart-meta">${formatPrice(item.price)} × ${item.quantity}</div>
            </div>
            <button class="btn small ghost remove-item" data-name="${item.name}">✕</button>
        </div>
    `).join('');

    cartItemsContainer.innerHTML = itemsHtml;
}

/**
 * Adds an item to the cart using data extracted from the closest product container.
 */
function addItemToCart(targetElement) {
    // Finds the parent card or detail box to extract product data
    const card = targetElement.closest('.card') || targetElement.closest('.detail-box');
    
    if (!card) return;

    // Use querySelector from the card/detail-box to get the correct data
    const name = card.querySelector('h3, h2').textContent.trim();
    // Clean price string
    const priceText = card.querySelector('.price').textContent.replace('₹', '').replace(/,/g, '').trim();
    const price = parseInt(priceText) || 0;
    
    // Attempt to find the image source
    let imageElement = card.querySelector('.thumb img') || card.querySelector('.detail-left .big img');
    let imageSrc = imageElement ? imageElement.getAttribute('src') : 'placeholder.webp';

    const existingItem = cart.items.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            name: name,
            price: price,
            quantity: 1,
            image: imageSrc 
        });
    }

    updateCartUI();

    if (cartToggleCheckbox) {
        cartToggleCheckbox.checked = true;
    }
    // Close the detail overlay if the action was triggered from there
    if (targetElement.closest('.overlay')) {
        window.location.hash = 'products';
    }
}


/**
 * Handles delegated click actions for Quick Buy, Add to Cart, Buy Now, Clear, and Checkout.
 */
function handleShopAction(event) {
    // 1. ADD TO CART / QUICK BUY
    const isAddToCart = (event.target.classList.contains('btn') || event.target.classList.contains('quick-buy')) &&
                        (event.target.textContent.includes('Quick buy') || event.target.textContent.includes('Add to cart'));

    if (isAddToCart) {
        event.preventDefault();
        addItemToCart(event.target);
        return;
    }
    
    // 2. BUY NOW (Instant Purchase from the detail overlay)
    const isBuyNow = event.target.textContent.includes('Buy now');
    if (isBuyNow) {
        event.preventDefault();
        
        // Add the item to the cart first to update cart state
        addItemToCart(event.target);
        
        // Execute simulated checkout
        if (cart.totalCount > 0) {
            alert(`✅ Initiating instant purchase with ${cart.totalCount} items (Total: ${formatPrice(cart.totalPrice)}).`);
            
            // Clear the cart after simulated purchase
            cart.items = [];
            updateCartUI();
        } else {
            alert("🛒 Could not process purchase: Cart is empty.");
        }
        return;
    }


    // 3. CLEAR CART (From the sidebar footer)
    if (event.target.textContent === 'Clear') {
        event.preventDefault();
        cart.items = [];
        updateCartUI();
        if (cartToggleCheckbox) cartToggleCheckbox.checked = false; 
        return;
    }

    // 4. CHECKOUT (From the sidebar footer)
    if (event.target.textContent === 'Checkout') {
        event.preventDefault();
        if (cart.totalCount > 0) {
            alert(`✅ Proceeding to checkout with ${cart.totalCount} items (Total: ${formatPrice(cart.totalPrice)}).`);
            cart.items = [];
            updateCartUI();
        } else {
            alert("🛒 Your cart is empty.");
        }
    }
}

// --- REMOVE FROM CART (Delegated) ---
function handleRemoveItem(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemName = event.target.getAttribute('data-name');
        cart.items = cart.items.filter(item => item.name !== itemName);
        updateCartUI();
        if (cart.totalCount === 0 && cartToggleCheckbox) {
            cartToggleCheckbox.checked = false;
        }
    }
}


// =================================================================
// 5. SIGN IN / SIGN UP TOGGLING LOGIC (For login.html)
// =================================================================

function initFormToggling() {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const formSwitchLinks = document.querySelectorAll('.form-switch a');

    if (!signupForm || !signinForm) return;

    formSwitchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.hash === '#signin') {
                signupForm.style.display = 'none';
                signinForm.style.display = 'flex';
            } else if (this.hash === '#signup') {
                signinForm.style.display = 'none';
                signupForm.style.display = 'flex';
            }
        });
    });

    if (window.location.hash === '#signin') {
        signupForm.style.display = 'none';
        signinForm.style.display = 'flex';
    } else {
        signinForm.style.display = 'none';
        signupForm.style.display = 'flex';
    }
}


// =================================================================
// 6. MASTER INITIALIZATION
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // A. Shop Page Initialization
    if (productGrid) {
        initializeShopProductsFromHTML(); 
        
        // --- Setup Search/Filter UI and Logic ---
        populateCategories();
        
        if (searchInput) {
            searchInput.addEventListener('input', filterProducts);
        }
        if (categorySelect) {
            categorySelect.addEventListener('change', filterProducts);
        }
        // --- End Search/Filter Setup ---
        
        // Render the initial grid
        renderShopGrid();

        // Setup listeners for the main grid actions (Delegation)
        productGrid.addEventListener('click', handleShopAction); 
        // NOTE: The 'change' listener for product removal has been removed.
        
        // Listen on the body for clicks originating from the detail overlays (Add/Buy)
        body.addEventListener('click', handleShopAction);

        // Setup listeners for cart controls
        const cartFooter = document.querySelector('.cart-footer');
        if (cartFooter) cartFooter.addEventListener('click', handleShopAction); 
        if (cartItemsContainer) cartItemsContainer.addEventListener('click', handleRemoveItem); 

        // Setup listener for the Add Product Form submission
        if (addProductForm) {
            addProductForm.addEventListener('submit', handleAddProduct);
        }

        // Initialize the Cart UI
        updateCartUI();
    }
    
    // B. Login Page Initialization
    if (document.getElementById('signup-form')) {
        initFormToggling();
    }
});