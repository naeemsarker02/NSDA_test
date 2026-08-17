document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    var modal = new bootstrap.Modal(
      document.getElementById("confirmModal")
    );

    modal.show();
    form.reset();
    form.classList.remove("was-validated");

  });

});