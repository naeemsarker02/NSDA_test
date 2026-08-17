document.addEventListener("DOMContentLoaded", function () {

  var toggle = document.getElementById("chatToggleBtn");
  var close = document.getElementById("chatCloseBtn");
  var windowBox = document.getElementById("chatWindow");
  var input = document.getElementById("chatInput");
  var send = document.getElementById("chatSendBtn");
  var body = document.getElementById("chatBody");


  toggle.addEventListener("click", function () {
    windowBox.classList.toggle("open");
  });


  close.addEventListener("click", function () {
    windowBox.classList.remove("open");
  });


  function addMessage(text, type) {

    var message = document.createElement("div");

    message.className = "chat-msg " + type;
    message.textContent = text;

    body.appendChild(message);
    body.scrollTop = body.scrollHeight;
  }


  function reply(text) {

    var value = text.toLowerCase();

    if (value.includes("water")) {
      return "Let the top layer of soil dry before watering again.";
    }

    if (value.includes("light")) {
      return "Most indoor plants prefer bright indirect light.";
    }

    if (value.includes("pet")) {
      return "Check the plant details before keeping it around pets.";
    }

    if (value.includes("repot")) {
      return "Repot when the roots become crowded or reach the drainage holes.";
    }

    return "Thanks. Please send us your question and our team can help.";
  }


  function sendMessage() {

    var text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(function () {
      addMessage(reply(text), "specialist");
    }, 400);
  }


  send.addEventListener("click", sendMessage);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

});