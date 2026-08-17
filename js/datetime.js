function updateTime() {
  var element = document.getElementById("live-datetime");

  if (!element) return;

  element.textContent = new Date().toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);
});