import $ from "jquery";
export default function todoListItem(todo) {
  return $(document.createElement("div")) //wrapped div in jquery selector
    .append(
      $(document.createElement("h3")).text(todo.text)
    )
    .append(
      $(document.createElement("input"))
        .attr("type","checkbox")
        .attr("checked", todo.completed)
    )
    .addClass("todo");
}
