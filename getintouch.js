document.getElementById("submit-btn").onclick = function () {
  checkForm();
};
function checkForm() {
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const phonenumber = document.getElementById("phone-input").value;
  const method = document.getElementById("method-of-contact-input").value;
  const message = document.getElementById("message-input").value;
  if (
    name == "" ||
    email == "" ||
    phonenumber == "" ||
    method == "" ||
    message == ""
  ) {
    alert("Oops, it looks like you're missing some information!");
  } else {
    alert("This form has been submitted");
    window.location.href = "index.html";
  }
}