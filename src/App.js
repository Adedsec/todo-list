import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";

import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";
import todostore from "./stores/TodoStore";

@observer
class App extends Component {
  state = {
    data: "all"
  };
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <TodoEntry />
        <TodoItems data={this.state.data} />
        <Footer
          className={todostore.todos.length === 0 ? "hidden" : ""}
          data={this.state.data}
          onActiveCllick={() => {
            this.setState({
              data: "active"
            });
            console.log(this.state.data);
          }}
          oncompletedCllick={() => {
            this.setState({
              data: "completed"
            });
            console.log(this.state.data);
          }}
          onallCllick={() => {
            this.setState({
              data: "all"
            });

            console.log(this.state.data);
          }}
        />
      </div>
    );
  }
}

export default App;
