import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo) {
      setTodos((prevTodos) => {
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
      });
      setNewTodo("");
    } else {
      alert("Write Something...!!!");
    }
  };

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTodo = (id) => {
    console.log("task to be deleted...", id);
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodos) => prevTodos.id !== id);
    });
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodos) => {
        return {
          task: prevTodos.task.toUpperCase(),
          id: prevTodos.id,
          isDone: false
        };
      });
    });
  };

  let lowerCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodos) => {
        return { ...prevTodos, task: prevTodos.task.toLocaleLowerCase() };
      });
    });
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodos) => {
        if (prevTodos.id === id) {
          return {
            ...prevTodos,
            task: prevTodos.task,
            id: prevTodos.id,
            isDone: true
          };
        } else {
          return prevTodos;
        }
      });
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.task}{" "}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                if (!todo.isDone) {
                  markAsDone(todo.id);
                }
              }}
            >
              Mark Done
            </button>
          </li>
        ))}
      </ul>
      <br></br>
      <span>
        <button onClick={upperCaseAll}>UpperCase All</button>
        &nbsp;&nbsp;
        <button onClick={lowerCaseAll}>LowerCase All</button>
      </span>
    </div>
  );
}

export default TodoList;
