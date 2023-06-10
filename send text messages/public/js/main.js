const numberInput = document.getElementById("number"),
  textInput = document.getElementById("message"),
  button = document.getElementById("button"),
  response = document.getElementById("response");

button.addEventListener("click", send, false);

function send() {
  const number = numberInput.value.replace(/\D/g, " ");
  const text = textInput.value;

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number: number, text: text }),
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
}
