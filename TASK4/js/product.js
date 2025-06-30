const products = [
  { id: 1, name: "Watch", price: 1200, image: "./img/Watch.jpg" },
  { id: 2, name: "Shoe", price: 2200, image: "./img/Shoes.webp" },
  { id: 3, name: "Bagpack", price: 1800, image: "./img/Bagpack.webp" },
  { id: 4, name: "sport shoe", price: 2500, image: "./img/sportshoes.jpeg" },
  { id: 5, name: "wallet", price: 1500, image: "./img/wallet.webp" },
  { id: 6, name: "sunglass", price: 1900, image: "./img/sunglass2.webp" },
   { id: 7, name: "wireless headphones", price: 2900, image: "./img/headphones.webp" }
];

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function renderProducts() {
  const container = document.getElementById("productContainer");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

renderProducts();
