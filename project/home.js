// Scroll Down Button - Scroll to bottom
const scrollDownBtn = document.getElementById("scrollDownBtn");
scrollDownBtn.addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// Scroll Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  // Show/Hide Scroll Top Button
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Show/Hide Scroll Down Button
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.scrollHeight;

  if (scrollPosition >= pageHeight - 50) {
    // Close to bottom → hide scroll down
    scrollDownBtn.style.display = "none";
  } else {
    scrollDownBtn.style.display = "block";
  }
};

// Scroll to Top
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Search Filter
function filterProducts() {
  const input = document.getElementById("productSearch").value.toLowerCase();
  const cards = document.getElementById("productList").getElementsByClassName("search-product-card");

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    const description = cards[i].getElementsByTagName("p")[0].innerText.toLowerCase();

    if (title.includes(input) || description.includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Example: Function to render products with ₹ sign
function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "search-product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price.toLocaleString('en-IN')}</p>
    `;

    productList.appendChild(productCard);
  });
}

let currentIndex = 0;

function showSlide(index) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Optional: Auto Slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);

