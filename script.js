// Toggle mobile navigation menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Close the menu when a nav link is clicked
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});

// Close the menu when clicking outside of the navbar and the menu box  
document.addEventListener("click", (e) => {
  const nav = document.querySelector("nav"); 
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.querySelector(".menu-toggle");

  if (navLinks.classList.contains("show") &&
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});
