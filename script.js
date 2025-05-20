//your JS code here. If required.
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\d{3}-\d{3}-\d{4})?$/;

  if (!fullName || !email || !message) {
    feedback.style.color = "red";
    feedback.innerText = "Please fill in all required fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    feedback.style.color = "red";
    feedback.innerText = "Please enter a valid email address.";
    return;
  }

  if (phone && !phoneRegex.test(phone)) {
    feedback.style.color = "red";
    feedback.innerText = "Please enter a valid phone number (e.g., 123-456-7890).";
    return;
  }

  if (message.length < 100) {
    feedback.style.color = "red";
    feedback.innerText = "Message must be at least 100 characters long.";
    return;
  }

  // If all validations pass
  feedback.style.color = "green";
  feedback.innerText = "Form submitted successfully!";
  this.reset(); // Clear form
});
