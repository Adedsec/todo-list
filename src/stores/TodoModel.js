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
    this.completed = !this.completed;
  }
}
