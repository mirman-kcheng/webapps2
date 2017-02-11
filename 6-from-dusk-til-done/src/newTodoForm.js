import $ from "jquery";
import {addTodo} from "./actions";
export default function newTodoForm() {
  return $(document.createElement("form"))
    .attr("id", "new-todo-form")
    .append(
      $(document.createElement("h2")).text("New Todo")
    )
    .append(
      $(document.createElement("input"))
      .attr("type","text")
      .attr("id","new-todo-text")
      .attr("placeholder","Enter new todo")
    )
    .append(
      $(document.createElement("input"))
        .attr("type","date")
        .attr("id","new-todo-date")
    )
    .append(
      $(document.createElement("button")).text("Add")
      .attr("id","new-todo")
      .click((e) => {
        console.log("Adding a todo");
          const newTodo = {
            text: $("#new-todo-text").val(),
            date: $("#new-todo-date").val()
          };
        addTodo([], newTodo);
      })
    );
}
