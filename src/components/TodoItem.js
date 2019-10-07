import React, { Component } from "react";
import { observer } from "mobx-react";

import todostore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  ontoggle = () => {
    this.props.todo.toggle();
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            onChange={this.ontoggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label> {todo.title} </label>
          <button
            className="destroy"
            onClick={() => todostore.deleteTodo(todo)}
          ></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
