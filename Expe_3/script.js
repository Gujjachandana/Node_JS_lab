const LoginForm = document.getElementById("loginform");
const RegistrationForm = document.getElementById("registrationform");

if (LoginForm) {
    LoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (email.includes(" ")) {
            alert("Email should not contain spaces");
            return;
        }

        if (!email.includes("@")) {
            alert("Email must contain @ symbol");
            return;
        }

        if (!email.includes(".")) {
            alert("Email must contain a dot(.).");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        if (password.length < 6) {
            alert("Password must contain atleast 6 characters.");
            return;
        }

        if (password.length > 20) {
            alert("Password cannot exceed 20 characters.");
            return;
        }

        if (password.includes(" ")) {
            alert("Password should not contain spaces");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain atleast one uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            alert("Password must contain atleast one lowercase letter.");
            return;
        }

        if (!/[0-9]/.test(password)) {
            alert("Password must contain atleast one number.");
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            alert("Password must contain atleast one special character.");
            return;
        }

        alert("Login successful!");
        window.location.href = "index.html";
    });
}


if (RegistrationForm) {
    RegistrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (email.includes(" ")) {
            alert("Email should not contain spaces");
            return;
        }

        if (!email.includes("@")) {
            alert("Email must contain @ symbol");
            return;
        }

        if (!email.includes(".")) {
            alert("Email must contain a dot(.).");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (!/^[0-9]+$/.test(phone)) {
            alert("Phone number should contain only numbers.");
            return;
        }

        if (phone.length !== 10) {
            alert("Phone number must contain 10 digits.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        if (password.length < 6) {
            alert("Password must contain atleast 6 characters.");
            return;
        }

        if (password.length > 20) {
            alert("Password cannot exceed 20 characters.");
            return;
        }

        if (password.includes(" ")) {
            alert("Password should not contain spaces");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain atleast one uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            alert("Password must contain atleast one lowercase letter.");
            return;
        }

        if (!/[0-9]/.test(password)) {
            alert("Password must contain atleast one number.");
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            alert("Password must contain atleast one special character.");
            return;
        }

        if (confirmPassword === "") {
            alert("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (dob === "") {
            alert("Please select your date of birth.");
            return;
        }

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}


const cartButtons = document.querySelectorAll(".addToCart");

cartButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const product = {
            name: button.getAttribute("data-name"),
            price: Number(button.getAttribute("data-price"))
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");

        updateCartCount();
    });
});


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();


const cartTable = document.getElementById("cartTable");

if (cartTable) {
    displayCart();
}


function displayCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartTable = document.getElementById("cartTable");
    const grandTotal = document.getElementById("grandTotal");

    cartTable.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartTable.innerHTML = "<tr><td colspan='5'>Your cart is empty.</td></tr>";
        grandTotal.textContent = "₹0";
        return;
    }

    cart.forEach(function(item, index) {

        const itemTotal = item.price;
        total = total + itemTotal;

        const row = document.createElement("tr");

        row.innerHTML =
            "<td>" + item.name + "</td>" +
            "<td>₹" + item.price + "</td>" +
            "<td>1</td>" +
            "<td>₹" + itemTotal + "</td>" +
            "<td><button onclick='removeItem(" + index + ")'>Remove</button></td>";

        cartTable.appendChild(row);
    });

    grandTotal.textContent = "₹" + total;
}


function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
    updateCartCount();
}


const checkoutButton = document.getElementById("checkout");

if (checkoutButton) {

    checkoutButton.addEventListener("click", function() {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Order placed successfully!");

        localStorage.removeItem("cart");

        displayCart();
        updateCartCount();
    });
}
