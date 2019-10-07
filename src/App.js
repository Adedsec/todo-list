import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";

import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";

@observer
class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <TodoEntry />
        <TodoItems />
        <Footer />
      </div>
    );
  }
}

export default App;
