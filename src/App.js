import React from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      //to disable refresh everytime we click on submit.
    }

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
      /*
      Date().getTime() will generate the time at which user enter the submit, to mili seconds, so it will always be a unique
      text: todo, that we generate using useState
      and task will be undone as first so completed will default to false*/
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
    {
      /* to make the todo text button blank so user can add new todo */
    }
  }

  function deleteTodo(id) {
    const updatedtodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedtodos);
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.toggleComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function editTodo(id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedtodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div id="todo-list">
      <title> logo.svg </title>
      <h1> 📝 TaskMaster 📝 </h1>
      <h2> your one and only task manager </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />{" "}
        {
          // e event object, target that we created above and value gives it value.
        }
        <button type="submit"> Add todo </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          {" "}
          {/*to display todo list*/}
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            {todoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div>{todo.text} </div>
            )}
          </div>
          <div className="todo-actions">
            {todoEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id)}> Submit Edits </button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>
                {" "}
                Edit Todo{" "}
              </button>
            )}
            <button onClick={() => deleteTodo(todo.id)}> Delete </button>{" "}
            {/*delete
        button to delete the task*/}
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
