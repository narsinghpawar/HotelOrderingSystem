/**
 * Redirects the user to the menu page.
 */
function navigatetoMenu() {
  window.location.href = "menu.html";
}

let itemCount = 0;
/**
 * Adds an item to the cart and updates the cart count display.
 */
function addtoCart() {
  const cartCountDisplay = document.getElementById("cartCount");
  itemCount++;
  cartCountDisplay.textContent = itemCount;
}

/**
 * Opens the cart modal by changing its display property to "flex".
 */
function openCart() {
  document.getElementById("myModal").style.display = "flex";
}

/**
 * Closes the cart modal by changing its display property to "none".
 */
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

/**
 * Populates the cart table with predefined items when the DOM is fully loaded.
 * Calculates and displays the total quantity and amount for the cart items.
 */
document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [
    { id: 1, name: "Pizza", quantity: 2, price: "₹25.98" },
    { id: 2, name: "Burger", quantity: 1, price: "₹12.99" },
  ];
  const cartTableBody = document.getElementById("cartItems");
  if (cartTableBody) {
    let totalQuantity = 0;
    let totalAmount = 0;

    // Iterate through cart items to populate the cart table
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace("₹", ""));
      totalQuantity += item.quantity;
      totalAmount += itemPrice;

      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
            `;
      cartTableBody.appendChild(row);
    });

    // Add the total row to the cart table
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>${totalQuantity}</strong></td>
            <td><strong>₹${totalAmount.toFixed(2)}</strong></td>
        `;
    cartTableBody.appendChild(totalRow);
  }
});

/**
 * Handles the checkout process for items added to the cart.
 * Displays a custom alert and redirects the user to the menu page upon confirmation.
 */
document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.getElementById("checkoutButton");
  const customAlert = document.getElementById("customAlert");
  const proceedButton = document.getElementById("proceedButton");

  // Show the custom alert when the checkout button is clicked
  checkoutButton.onclick = () => {
    customAlert.style.display = "block";
  };

  // Hide the custom alert and redirect to the menu page when the proceed button is clicked
  proceedButton.onclick = () => {
    customAlert.style.display = "none";
    window.location.href = "menu.html";
  };

  // Hide the custom alert when clicking outside the alert box
  customAlert.onclick = (event) => {
    if (event.target === customAlert) {
      customAlert.style.display = "none";
    }
  };
});

/**
 * Toggles the side navigation bar's visibility.
 * Adds or removes the "active" class on the navigation header.
 */
function toggleNav() {
  const navHeader = document.querySelector(".nav-header");
  navHeader.classList.toggle("active");
}

// Function to filter table rows based on search input
function filterTable() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const table = document.getElementById("dataTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    // Skip header row
    const cells = rows[i].getElementsByTagName("td");
    let rowVisible = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerText.toLowerCase().includes(input)) {
        rowVisible = true;
        break;
      }
    }

    rows[i].style.display = rowVisible ? "" : "none";
  }
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function chefFunction(dropdown) {
  const selectedValue = dropdown.value;
  console.log("Selected status:", selectedValue);
  let rowData = document.getElementById("tr-01");
  if (selectedValue === "accepted") {
    rowData.style.backgroundColor = "#FFFF00";
  }
  if (selectedValue === "rejected") {
    rowData.style.backgroundColor = "#FF4500";
  }
  if (selectedValue === "delivered") {
    rowData.style.backgroundColor = "#32CD32";
  }
}

function checkFunction01(dropdown) {
  const selectedValue1 = dropdown.value;
  console.log("Selected status:", selectedValue1);
  let rowData1 = document.getElementById("tr-02");
  if (selectedValue1 === "accepted") {
    rowData1.style.backgroundColor = "#FFFF00";
  }
  if (selectedValue1 === "rejected") {
    rowData1.style.backgroundColor = "#FF4500";
  }
  if (selectedValue1 === "delivered") {
    rowData1.style.backgroundColor = "#32CD32";
  }
}
