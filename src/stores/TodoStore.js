import { action, observable } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }
}

const todostore = new TodoStore();
export default todostore;
