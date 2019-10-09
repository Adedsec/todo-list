import React, { Component } from "react";

import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    let todolist = [];
    let { data } = this.props;
    switch (data) {
      case "all":
        todolist = TodoStore.todos;
        break;
      case "active":
        todolist = TodoStore.todos.filter(value => {
          return !value.completed;
        });
        break;
      case "completed":
        todolist = TodoStore.todos.filter(value => {
          return value.completed;
        });
        break;

      default:
        todolist = TodoStore.todos;
        break;
    }
    return (
      <section className="main">
        <ul className="todo-list">
          {todolist.map(todo => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
