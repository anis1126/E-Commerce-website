// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Add to Cart Counter no
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");

document.querySelectorAll(".cart-button").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
  });
});

// Searching
const searchBox = document.getElementById("search-box");
const productCards = document.querySelectorAll(".product-card");

searchBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Enter na dile form submit hobe na

    const searchText = searchBox.value.toLowerCase();

    productCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      if (title.includes(searchText)) {
        card.style.display = "block"; // match hole product show korbe
      } else {
        card.style.display = "none";  // match hole product show korbe
      }
    });
  }
});

