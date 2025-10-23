// Footer loader - loads footer component into pages
function loadFooter() {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}

// Load footer when DOM is ready
document.addEventListener("DOMContentLoaded", loadFooter);
