import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import todostore from "../stores/TodoStore";

class TodoEntry extends Component {
  state = { value: "" };
  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todostore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <header className="header">
        <h1>Todo</h1>
        <input
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          value={this.state.value}
          type="text"
          className="new-todo"
          placeholder="what need's to be Done ?"
        />
      </header>
    );
  }
}

export default TodoEntry;
