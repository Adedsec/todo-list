import React, { Component } from "react";
import todostore from "../stores/TodoStore";

class TodoEntry extends Component {
  state = { value: "" };
  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    if (this.state.value.trim() !== "") {
      event.preventDefault();
      todostore.addTodo(this.state.value);
      this.setState({
        value: ""
      });
    }
  };
  render() {
    return (
      <header className="header">
        <h1>Todo List</h1>
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
