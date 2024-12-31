import React from "react";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const clickHandlerDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App Using Redux Toolkit</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={
              todo.isDone
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => clickHandlerDone(todo.id)}>
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
