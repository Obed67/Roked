// Navbar loader - loads navbar component into pages
function loadNavbar() {
  fetch("components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      // Initialize mobile menu functionality after navbar is loaded
      initializeMobileMenu();
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Load navbar when DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);
