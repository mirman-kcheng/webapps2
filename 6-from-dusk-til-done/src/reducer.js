import $ from "jquery";
import todoListItem from "./todoListItem";
import newTodoForm from "./newTodoForm";

function updateTodos(todos) {
  console.log(todos);
  $("#root").empty();
  todos.forEach((todo) => {
    $("#root").append(
        todoListItem(todo)
      );
  });
  $("#root").append(
    newTodoForm()
  );
}

export default function reducer(state, action) { //action is a js object
  switch(action.type) {
    case "RETRIEVE_TODOS": //action object type
      return $.ajax(
        "/todos",
        {
          type: "GET"
        }
      )
      .done( (data) => {
        console.log("Success!");
        updateTodos(data);
        return data;
      })
      .fail( () => {
        console.error("Something bad happened");
      });
      return state;
    case "DELETE_TODO":
      return $.ajax(
        {
          url:`/todos/${action.id}`,
          type: "DELETE",
          contentType: "applications/json"
        })
      .done( (res) => {
        updateTodos(res);
        return res;
      })
    case "ADD_TODO":
      return $.ajax(
        {
          url: "/todos",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify(action.newTodo)
        }
      )
      .done( (res) => {
        updateTodo(res);
        return res;
      })
    case "UPDATE_TODO":
      return $.ajax({
        url: `/todos/${action.id}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(action.editedTodo)
      })
      .done((res) => {
        updateTodos(res);
        return res;
      });
    default:
      return state;
    }
  }
