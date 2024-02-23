let mail = document.getElementById("email");
let err = document.getElementById("error");
function validate() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;

  if (mail.value != 0 && !regex.test(mail.value)) {
    err.innerHTML = " Please provide a valid email";
    mail.style.borderColor = "red";
    err.style.fontSize = "1.2rem";
    err.style.fontWeight = "600";
    err.style.color = "red";
    err.style.fontStyle = "italic";
  }
  if (regex.test(mail.value)) {
    err.innerHTML = "";
    mail.style.borderColor = "unset";
  }
}
mail.addEventListener("change", validate);
