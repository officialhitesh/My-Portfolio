document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuItems = document.querySelectorAll(".nav-links a");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when any nav link is clicked
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
