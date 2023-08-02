const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        console.log('Bar icon clicked');
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        console.log('Close icon clicked');
        nav.classList.remove('active');
    });
}

// script.js

// Function to handle the "Add to Cart" click event
function addToCartClicked(event) {
    event.preventDefault();

    const cartItem = {
        name: event.target.dataset.name,
        price: event.target.dataset.price,
    };

    // Check if there is an existing cart in the local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected item to the cart
    cart.push(cartItem);

    // Store the updated cart in the local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user (optional)
    alert(`${cartItem.name} added to cart!`);
}

// Get all "Add to Cart" links and attach the event listener
const addToCartLinks = document.querySelectorAll('.cart');
addToCartLinks.forEach((link) => {
    link.addEventListener('click', addToCartClicked);
});

// JavaScript code for cart.html

document.addEventListener("DOMContentLoaded", function () {
    // Sample data for cart items (replace this with your actual cart data)
    const cartItems = [
      {
        imageSrc: "img/products/f1.jpg",
        product: "Cartoon Astronaut Shirt",
        price: "KES 78",
        quantity: 1,
        subtotal: "KES 78",
      },
      // Add more items here as needed
    ];
  
    // Function to generate cart item HTML
    function generateCartItem(item, index) {
      return `<tr>
          <td><a href="#" class="remove-item" data-index="${index}"><i class="far fa-times-circle"></i></a></td>
          <td><img src="${item.imageSrc}" alt=""></td>
          <td>${item.product}</td>
          <td>${item.price}</td>
          <td><input type="number" value="${item.quantity}" min="1"></td>
          <td>${item.subtotal}</td>
      </tr>`;
    }
  
    // Function to update the cart items in the HTML
    function updateCartItems() {
      const cartItemsContainer = document.getElementById("cart-items");
      cartItemsContainer.innerHTML = "";
  
      cartItems.forEach((item, index) => {
        cartItemsContainer.innerHTML += generateCartItem(item, index);
      });
  
      // Add event listeners to remove buttons
      const removeButtons = document.getElementsByClassName("remove-item");
      for (const removeButton of removeButtons) {
        removeButton.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior
  
          // Get the index of the item to remove from the data-index attribute
          const itemIndex = parseInt(removeButton.getAttribute("data-index"), 10);
  
          // Remove the item from the cartItems array
          cartItems.splice(itemIndex, 1);
  
          // Update the cart items in the HTML
          updateCartItems();
        });
      }
    }
  
    // Initial update of cart items
    updateCartItems();
  });
  