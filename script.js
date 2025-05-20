//your JS code here. If required.
// Newsletter subscription (optional behavior)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (email) {
      alert(`Thanks for subscribing with ${email}`);
      form.reset();
    }
  });
});
