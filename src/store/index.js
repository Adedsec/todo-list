import { observation, action } from "mobx";

class Store {
  @observation time;
  constructor() {
    this.time = new Date();
  }
}
const store = new Store();
export default store;
