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
