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


/* =========================
   LOGIN OPEN
========================= */

function openLogin() {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  if (welcomeScreen) {

    welcomeScreen.classList.remove("active");
    welcomeScreen.classList.remove("leaving");

  }

  document.body.style.overflow = "";

  const loginModal =
    document.getElementById("loginModal");

  if (!loginModal) {
    return;
  }

  loginModal.classList.add("active");

}


/* =========================
   LOGIN CLOSE
========================= */

function closeLogin() {

  const loginModal =
    document.getElementById("loginModal");

  if (!loginModal) {
    return;
  }

  loginModal.classList.remove("active");

}


/* =========================
   SEND OTP
========================= */

function sendOTP() {

  const phoneInput =
    document.getElementById("phoneNumber");

  const phone =
    phoneInput.value.trim();

  if (!/^\d{10}$/.test(phone)) {

    alert(
      "Please enter a valid 10-digit mobile number."
    );

    return;
  }

  document.getElementById("phoneStep").style.display =
    "none";

  document.getElementById("otpStep").style.display =
    "block";

}


/* =========================
   VERIFY OTP
========================= */

function verifyOTP() {

  const otpInput =
    document.getElementById("otpCode");

  const otp =
    otpInput.value.trim();

  if (!/^\d{6}$/.test(otp)) {

    alert(
      "Please enter the 6-digit OTP."
    );

    return;
  }

  /*
    Login successful
  */

  localStorage.setItem(
    "sunflowerLoggedIn",
    "true"
  );

  /*
    Close login popup
  */

  closeLogin();

  /*
    Clear OTP
  */

  otpInput.value = "";

  /*
    Show premium welcome screen
  */

  setTimeout(() => {

    const welcomeScreen =
      document.getElementById("welcomeScreen");

    if (!welcomeScreen) {
      return;
    }

    welcomeScreen.classList.add("active");

    document.body.style.overflow = "hidden";

  }, 400);

}


/* =========================
   ENTER SUNFLOWER
========================= */

function enterSunflower() {

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  if (!welcomeScreen) {
    return;
  }

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


/* =========================
   BACK TO PHONE
========================= */

function backToPhone() {

  document.getElementById("otpStep").style.display =
    "none";

  document.getElementById("phoneStep").style.display =
    "block";

}


/* =========================
   CONTINUE AS GUEST
========================= */

function continueAsGuest() {

  closeLogin();

}
