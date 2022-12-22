import "./styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/components";

export const todoList = new TodoList();

// console.log( todoList );

todoList.todos.forEach( crearTodoHtml );


