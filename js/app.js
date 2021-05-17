const btn = document.querySelector(".claim-btn");
const inputs = document.querySelectorAll("input");
const errormsg = document.querySelectorAll(".error-message");
console.log(errormsg);

let x = 0;
function addError(el) {
  el.classList.add("error");
  errormsg[x].classList.remove("hidden");
}
function removeError(el) {
  el.classList.remove("error");
  errormsg[x].classList.add("hidden");
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const check = function () {
  x = 0;
  inputs.forEach((input) => {
    if (input.value == "") {
      addError(input);
    } else {
      removeError(input);
    }
    if (input.id == "email") {
      if (!validateEmail(input.value)) {
        addError(input);
      } else {
        removeError(input);
      }
    }
    x += 1;
  });
  console.log(errormsg[1]);
};

btn.addEventListener("click", check);
