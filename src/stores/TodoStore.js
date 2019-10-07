import { action, observable } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable leftcount = 0;
  @observable completedcount = 0;

  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.leftcount++;
    this.completedcount = this.todos.length - this.leftcount;
    // console.log(
    //   "items : " + this.todos.length + "---" + "left: " + this.leftcount
    // );
  }

  @action
  deleteTodo(item) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === item.id) {
        this.todos.splice(i, 1);
        if (!item.completed) {
          this.leftcount--;
        }
        this.completedcount = this.todos.length - this.leftcount;
      }
    }
  }
  @action
  deleteCompleted() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
        i--;
      }
    }
    this.completedcount = this.todos.length - this.leftcount;
  }
}

const todostore = new TodoStore();
export default todostore;
