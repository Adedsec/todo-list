import React, { Component } from "react";
import { observer } from "mobx-react";

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
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
