import $ from "jquery";
import {deleteTodo, editTodo} from "./actions";
export default function todoListItem(todo) {
  return $(document.createElement("div")) //wrapped div in jquery selector
    .append(
      $(document.createElement("h3"))
        .text(`${todo.date}: ${todo.text}`)
    )
    // .append(
    //   $(document.createElement("button")).text("Edit")
    //     .click((e) => {
    //       $("#edit-input-box").show();
    //       console.log("edit your todo!");
    //   })
    // )
    // .append(
    //   $(document.createElement("button")).text("Save")
    //     .attr("id", `edit-input-${todo.id}`)
    //     .hide()
    // )
    .append(
      $(document.createElement("div"))
        .attr("id",`edit-todo-${todo.id}`)
        .append(
          $(document.createElement("input"))
            .attr("type","date")
            .val(todo.date)
            .attr("id",`edit-todo-date-${todo.id}`)
        )
        .append(
          $(document.createElement("input"))
            .attr("id", `edit-todo-text-${todo.id}`)
        )
        .append(
          $(document.createElement("button"))
          .text("Save")
          .click((e) => {
            const editedTodo = {
              id: todo.id,
              text: $(`#edit-todo-text-${todo.id}`).val(),
              date: $(`#edit-todo-date-${todo.id}`).val(),
              completed: $(`#edit-todo-checked-${todo.id}`).is(":checked")
            }
            editTodo([],todo.id,editedTodo);
          })
        )
    )
    .append(
      $(document.createElement("input"))
        .attr("type","checkbox")
        .attr("checked", todo.completed)
        .attr("id", `edit-todo-checked-${todo.id}`)
        .click((e) => {
          const editedTodo = {
            id: todo.id,
            text: todo.text,
            date: todo.date,
            completed: e.target.checked
          }
          editTodo([],todo.id,editedTodo);
        })
    )
    .append(
      $(document.createElement("button")).text("Delete")
        .attr("type","button")
        .click((e) => {
          console.log("Deleting todo");
          deleteTodo([],todo.id);
      }
    )
  )

    .attr("id", `${todo.id}`)
    .addClass("todo");
}
