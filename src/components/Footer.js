import React, { Component } from "react";
import { observer } from "mobx-react";

import todostore from "../stores/TodoStore";

@observer
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="todo-count">{todostore.leftcount + " items left"}</div>
        <div className="filters">
          <li>
            <a>active</a>
          </li>
          <li>
            <a>comleted</a>
          </li>
          <li>
            <a className="selected">all</a>
          </li>
        </div>
        <div
          onClick={() => todostore.deleteCompleted()}
          className={
            " clear-completed " +
            (todostore.completedcount === 0 ? "hidden" : "")
          }
        >
          clear completed ( {todostore.completedcount} )
        </div>
      </footer>
    );
  }
}
