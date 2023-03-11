const form = document.querySelector(".form");
const firstForm = form.querySelector("#one");
const secondForm = form.querySelector("#two");

function compareNumbers(event) {
  event.preventDefault();
  if (secondForm.value > firstForm.value) {
    alert("O segundo número é realmente maior que o primeiro!");
  } else {
    alert(
      "O primeiro número é maior ou igual ao segundo número, favor corrigir!"
    );
  }
}

form.addEventListener("submit", compareNumbers);
