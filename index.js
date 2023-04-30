$(document).ready(() => {
  $("form").on("submit", (event) => {
    event.preventDefault();
    const toDoList = $("<lu></lu>");
    const toDoNewItem = $("#to-do-item").val();
    $(`<li id= "to-do-thing">${toDoNewItem}</li>`).appendTo(toDoList);
    $(toDoList).appendTo("ul");
    $("#to-do-item").val("");
  });
  $("#to-do-list").delegate("#to-do-thing", "click", () => {
    $(document).on("click", "#to-do-thing", function () {
      if (
        $(this).css("text-decoration") == "line-through solid rgb(255, 0, 0)"
      ) {
        $(this).css("text-decoration", "none solid rgb(0, 0, 0)");
        $(this).css("color", "rgb(0, 0, 0)");
      } else {
        $(this).css("text-decoration", "line-through");
        $(this).css("color", "red");
      }
    });
  });
});
