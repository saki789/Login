function signIn() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "Please enter both username and password.";
  } else {
    // Add your sign-in logic here
    // For a basic example, you can check hardcoded username and password
    if (username === "user" && password === "pass") {
      message.textContent = "Sign-in successful!";
      // Redirect to the dashboard or desired page
    } else {
      message.textContent = "Invalid username or password. Please try again.";
    }
  }
}
