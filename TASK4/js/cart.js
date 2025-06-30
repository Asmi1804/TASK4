function updateTotal() {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.price').textContent);
    const qty = parseInt(item.querySelector('.qty').value);
    total += price * qty;
  });
  document.getElementById('total-price').textContent = total;
}

function attachEvents() {
  document.querySelectorAll('.qty').forEach((input, index) => {
    input.addEventListener('change', function () {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart[index].qty = parseInt(this.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateTotal();
    });
  });

  document.querySelectorAll('.remove-btn').forEach((btn, index) => {
    btn.addEventListener('click', function () {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartContainer");
  container.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<h4>🛒 Your cart is empty 😔.</h4>";
    document.getElementById('total-price').textContent = "0";
    return;
  }

  cart.forEach((item, index) => {
    const subtotal = item.price * (item.qty || 1);
    total += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
        <h4>${item.name}</h4>
        <p>₹ <span class="price">${item.price}</span></p>
        <label>Qty:
          <input type="number" class="qty" value="${item.qty || 1}" min="1">
        </label>
        <button class="remove-btn">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById('total-price').textContent = total;
  attachEvents();
}

renderCart();
