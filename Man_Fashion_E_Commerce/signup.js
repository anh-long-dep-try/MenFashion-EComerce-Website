        // Array to hold user credentials
let users = JSON.parse(localStorage.getItem("users")) || [];

function validateForm() {
  // Get input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (confirmPassword !== password) {
            alert("Please confirm your password again.");
        } else if (username && email && password && confirmPassword) {
            // Check if the username already exists
            const userExists = users.some(user => user.username === username);
            if (userExists) {
            alert("Username already exists. Please choose another one.");
            return;
            }

            // Add new user to the array
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users)); // Save array to localStorage

            alert("Account Successfully Created!");
            window.location.href = "home.html";
        } else {
            alert("Please fill out all fields.");
        }
    }
    function clearLocalStorage() {
        localStorage.clear();
        alert("All data has been cleared from local storage.");
}
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}
