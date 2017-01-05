'use strict';

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.json());

function loadTodos(callback) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    const alldata = JSON.parse(data);
    callback(alldata);
  });
}

app.route("/todos")
.get((req, res) => {
  loadTodos((alldata) => {
    res.json(alldata.data);
  });
})
.post((req, res) => {
  let newTodo = req.body;
  newTodo.completed = false;
  console.log(newTodo);
  loadTodos((json) => {
    json.data.push(newTodo);
    json.lastId++;
    newTodo.id = json.lastId;
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.route("/todos/:id")
.get((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for (const i in todos) {
      const todo = todos[i];
      if (todo.id === id) {
        return res.json(todo);
      }
    }
    return res.send("No todo found");
  });
})
.put((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for (const i in todos) {
      const todo = todos[i];
      if (todo.id === id) {
        console.log(todo);
        todo.text = req.body.text;
        todo.completed = req.body.completed;
      }
    }
  });
      fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
            if (err) throw err;
            res.status(200).end();
            return res.json("todo updated");
  })
})

.delete((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    console.log(todos);
    var filtered = todos.filter((check) => {
        return check.id != id;
    });
    console.log(filtered);
    json.data = filtered;
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.send("todo deleted");
      res.status(200).end();
      })
    })
 });

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});

app.use(express.static('public'));
