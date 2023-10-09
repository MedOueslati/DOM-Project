// Initialize an empty shopping cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

// Function to remove items from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Function to update the cart and display it
function updateCart() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  let total = 0;

  // Clear the cart items list
  cartList.innerHTML = "";

  // Populate the cart items list and calculate the total
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    li.className = "cart-item";

    // Add a remove button next to each item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "btn btn-danger btn-sm";
    removeButton.onclick = () => removeFromCart(index);

    li.appendChild(removeButton);
    cartList.appendChild(li);

    total += item.price;
  });

  // Update the total
  cartTotal.textContent = total.toFixed(2);
}

const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((button) => {
  let isLiked = false;

  button.addEventListener("click", () => {
    isLiked = !isLiked; // Toggle the liked state
    if (isLiked) {
      button.classList.add("liked"); // Add a class to change the color to red
      button.innerHTML = '<i class="fas fa-heart"></i> Liked';
    } else {
      button.classList.remove("liked"); // Remove the class
      button.innerHTML = '<i class="far fa-heart"></i> Like';
    }
  });
});
