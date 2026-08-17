document.addEventListener("DOMContentLoaded", function () {

  var size = document.getElementById("sizeSelect");

  if (!size) return;

  var addons = document.querySelectorAll(
    ".form-check input[type='checkbox']"
  );

  var total = document.getElementById("totalPrice");
  var buttonPrice = document.getElementById("btnPrice");
  var confirmation = document.getElementById("cartConfirm");

  function calculate() {

    var price = Number(size.value);

    addons.forEach(function (addon) {
      if (addon.checked) {
        price += Number(addon.dataset.price);
      }
    });

    var formatted = "$" + price.toFixed(2);

    total.textContent = formatted;
    buttonPrice.textContent = formatted;
  }

  size.addEventListener("change", calculate);

  addons.forEach(function (addon) {
    addon.addEventListener("change", calculate);
  });


  document.getElementById("addToCartBtn")
    .addEventListener("click", function () {

      confirmation.classList.remove("d-none");

      setTimeout(function () {
        confirmation.classList.add("d-none");
      }, 2500);

    });


  calculate();

});