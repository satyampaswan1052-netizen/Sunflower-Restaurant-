let cartCount = 0;
let cartTotal = 0;


/* =========================
   ADD TO CART
========================= */

function addToCart() {

  cartCount++;

  cartTotal += 299;

  document.getElementById("cartCount").innerText = cartCount;

  document.getElementById("cartTotal").innerText =
    "₹" + cartTotal;

  document.getElementById("emptyCart").style.display = "none";

  document.getElementById("cartItems").innerHTML = `
    <div style="
      padding:20px;
      background:#f1f4df;
      border-radius:18px;
      text-align:left;
    ">
      <strong>Delicious Food Item</strong>

      <p style="
        margin-top:8px;
        color:#71816c;
      ">
        Quantity: ${cartCount}
      </p>

      <p style="
        margin-top:8px;
        color:#c5930e;
        font-weight:bold;
      ">
        ₹${cartTotal}
      </p>
    </div>
  `;

  openCart();
}


/* =========================
   CART OPEN
========================= */

function openCart() {

  document
    .getElementById("cartPanel")
    .classList.add("active");

  document
    .getElementById("overlay")
    .classList.add("active");
}


/* =========================
   CART CLOSE
========================= */

function closeCart() {

  document
    .getElementById("cartPanel")
    .classList.remove("active");

  document
    .getElementById("overlay")
    .classList.remove("active");
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

  const menu =
    document.getElementById("mobileNav");

  if (menu.style.display === "block") {

    menu.style.display = "none";

  } else {

    menu.style.display = "block";

  }
}


/* =========================
   CHECKOUT
========================= */

function checkout() {

  if (cartCount === 0) {

    alert("Please add some food to your cart first.");

    return;
  }

  alert(
    "Checkout system will be connected in the next step."
  );
      }

function openLogin() {

const welcomeScreen =
document.getElementById("welcomeScreen");

// Welcome screen ko temporarily hide rakho
if (welcomeScreen) {
welcomeScreen.classList.remove("active");
welcomeScreen.classList.remove("leaving");
}

document.body.style.overflow = "";

const loginModal =
document.getElementById("loginModal");

loginModal.classList.add("active");

}

function closeLogin() {

const loginModal =
document.getElementById("loginModal");

loginModal.classList.remove("active");

}

function sendOTP() {
  const phone = document.getElementById("phoneNumber").value;

  if (phone.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  document.getElementById("phoneStep").style.display = "none";
  document.getElementById("otpStep").style.display = "block";
}

function verifyOTP() {

const otp =
document.getElementById("otpCode").value.trim();

if (!/^\d{6}$/.test(otp)) {

alert("Please enter the 6-digit OTP.");

return;

}

// Save login state
localStorage.setItem(
"sunflowerLoggedIn",
"true"
);

// Close login modal
closeLogin();

// Clear OTP field
document.getElementById("otpCode").value = "";

// Show premium welcome experience
setTimeout(() => {

const welcomeScreen =
  document.getElementById("welcomeScreen");

welcomeScreen.classList.add("active");

document.body.style.overflow = "hidden";

}, 450);
}

/* =========================
ENTER SUNFLOWER
========================= */

function enterSunflower() {

const welcomeScreen =
document.getElementById("welcomeScreen");

welcomeScreen.classList.add("leaving");

setTimeout(() => {

welcomeScreen.classList.remove("active");
welcomeScreen.classList.remove("leaving");

document.body.style.overflow = "";

window.scrollTo({
  top: 0,
  behavior: "smooth"
});

}, 700);
}
  }

  localStorage.setItem("sunflowerLoggedIn", "true");

  closeLogin();

  alert("Welcome to Sunflower 🌻");
}

function backToPhone() {
  document.getElementById("otpStep").style.display = "none";
  document.getElementById("phoneStep").style.display = "block";
}

function continueAsGuest() {
  closeLogin();
}
