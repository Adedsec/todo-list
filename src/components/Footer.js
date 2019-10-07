import React, { Component } from "react";
import { observer } from "mobx-react";

import todostore from "../stores/TodoStore";

@observer
export default class Footer extends Component {
  render() {
    return (
      <footer className={"footer " + this.props.className}>
        <div className="todo-count">{todostore.leftcount + " items left"}</div>
        <div className="filters">
          <li onClick={this.props.onActiveCllick}>
            <a className={this.props.data === "active" ? "selected" : ""}>
              active
            </a>
          </li>
          <li onClick={this.props.oncompletedCllick}>
            <a className={this.props.data === "completed" ? "selected" : ""}>
              comleted
            </a>
          </li>
          <li>
            <a
              className={this.props.data === "all" ? "selected" : ""}
              onClick={this.props.onallCllick}
            >
              all
            </a>
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
// Footer.defaultProps={
//     onActiveCllick:
//     oncompletedCllick:
//     onallCllick:
// }
