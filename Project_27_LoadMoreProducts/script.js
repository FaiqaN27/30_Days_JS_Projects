const productContainer = document.getElementById('product-container');
const loadBtn = document.getElementById('load-more-btn');
const errorMsg = document.getElementById('error-msg');
const limitMsg = document.getElementById('limit-msg');
const loadingMsg = document.getElementById('loading-msg');

let count = 0;
let allProducts = [];

async function fetchProducts() {
  try {
    loadingMsg.style.display = "block";

    const skip = count * 20;
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
    const data = await res.json();

    if (data && data.products && data.products.length) {
      allProducts = allProducts.concat(data.products);
      renderProducts(data.products);
    }

    if (allProducts.length >= 194) {
      loadBtn.disabled = true;
      limitMsg.style.display = "block";
    }

    loadingMsg.style.display = "none";
  }
  catch (e) {
    loadingMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}


function renderProducts(products) {
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML =
      ` <img class="card-img" src="${product.thumbnail}" alt="${product.title}" />
    <p class="card-title">${product.title}</p>
      <p class="card-price">Price: $${product.price}</p>
    `;

    productContainer.appendChild(card);
  });
}

loadBtn.addEventListener("click", () => {
  count++;
  fetchProducts();
})

fetchProducts();