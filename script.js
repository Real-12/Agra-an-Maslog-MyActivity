
// Welcome Message
alert("Annyeong! Welcome to my Portfolio!");

// Project Button
document.getElementById("projectBtn").addEventListener("click", function() {
    alert("Thank you for exploring my projects!");
});

// Change Background Color
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#e6e6fa";
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent default page reload on submit
  event.preventDefault();

  // Retrieve input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusMsg = document.getElementById('statusMsg');

  // Basic JS Validation
  if (!name || !email || !message) {
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Please fill out all fields.';
    return;
  }

  // Simple Email Format Regex Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // Clear error message & set loading state
  statusMsg.style.color = 'green';
  statusMsg.textContent = 'Sending...'

  // Demonstration output (Remove when connecting real API)
  setTimeout(() => {
    statusMsg.textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset();
  }, 1000);
});
function logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("You have successfully logged out! 💛");
        window.location.href = "login.html";
    }
}