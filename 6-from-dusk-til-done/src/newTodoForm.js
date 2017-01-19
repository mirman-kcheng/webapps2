import $ from "jquery";
export default function newTodoForm() {
  return $(document.createElement("form"))
    .append(
      $(document.createElement("h2")).text("New Todo")
    )
    .append(
      $(document.createElement("input"))
      .attr("type","text")
      .attr("id","new-todo-text")
    )
    .append(
      $(document.createElement("button")).text("Add")
      .attr("id","new-todo")
      .click(() => {
        console.log("Adding a todo");
          const newTodo = {
            text: $("#new-todo-text").val()
          }
          //AJAX POST the new todo
        return $.ajax(
          "./todos",
          {
            method: "POST"
          }
        )
        .done( () => {
          console.log("Success!");
        })
        .fail( () => {
          console.error("Something bad happened");
        });
      })
    )
}
