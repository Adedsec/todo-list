import { action, observable } from "mobx";

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, title, completed, id) {
    this.title = title;
    this.id = id;
    this.completed = completed;
    this.store = store;
  }
  @action
  toggle() {
    if (!this.completed) {
      this.store.leftcount--;
    } else if (this.completed) {
      this.store.leftcount++;
    }
    this.completed = !this.completed;
    this.store.completedcount = this.store.todos.length - this.store.leftcount;
    // console.log(
    //   "items : " +
    //     this.store.todos.length +
    //     "---" +
    //     "left: " +
    //     this.store.leftcount
    // );
  }
}
