document.addEventListener("DOMContentLoaded", function () {
  var page = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });

  var year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});