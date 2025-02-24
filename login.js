function redirectToPage() {
    window.location.href = "reg.html";
}

function redToPage() {
    window.location.href = "login.html";
}

function registerUser(event) {
    event.preventDefault(); // Prevent form submission refresh

    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    // Retrieve existing users or initialize empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        alert("User already registered! Try logging in.");
        return;
    }

    // Add new user and store in localStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    console.log("User registered:", users); // Debugging log

    alert("Registration successful! Redirecting to login page...");
    
    // Ensure redirection executes after alert
    setTimeout(() => {
        window.location.href = "login.html";
    }, 500);
}


// Function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form from refreshing

    const enteredEmail = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Get stored users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if entered credentials match any stored user
    const validUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

    if (validUser) {
        alert("Login successful!");
        window.location.href = "main.html"; // Redirect to main site
    } else {
        alert("Invalid email or password!");
    }
}