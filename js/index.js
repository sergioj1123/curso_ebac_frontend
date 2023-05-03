$(document).ready(() => {
  $("#cpf").mask("000.000.000-00", {
    placeholder: "XXX.XXX.XXX-XX",
  });
  $("#cep").mask("0000-000", {
    placeholder: "XXXX-XXX",
  });
  $("form").on("submit", (event) => {
    event.preventDefault();
    alert("Formulario enviado");
  });
});
