// ================= SEARCH FUNCTION =================

const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter something to search.");
    } else {
        alert(`Searching for: ${value}`);
        searchInput.value = "";
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchIcon.click();
    }
});

// ================= LOCATION UPDATE =================

const locationBox = document.querySelector(".nav-address");
const locationText = document.querySelector(".add-first");

locationBox.addEventListener("click", () => {
    let city = prompt("Enter your city:");

    if (city && city.trim() !== "") {
        locationText.innerText = `Delivering to ${city}`;
    }
});

// ================= CART COUNTER =================

let cartCount = 0;

const cart = document.querySelector(".nav-cart");

const productBoxes = document.querySelectorAll(".box");

productBoxes.forEach(box => {
    box.addEventListener("click", () => {
        cartCount++;
        cart.innerHTML =
            `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });
});

// ================= SIGN IN BUTTON =================

const signIn = document.querySelector(".nav-signin");

signIn.addEventListener("click", () => {
    alert("Sign In functionality coming soon!");
});

// ================= BACK TO TOP =================

const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= PRODUCT HOVER EFFECT =================

productBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.03)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// ================= SEE MORE BUTTONS =================

const seeMoreButtons = document.querySelectorAll(".anchor-see");

seeMoreButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const category =
            button.parentElement.querySelector("h3").innerText;

        alert(`Opening ${category}`);
    });
});