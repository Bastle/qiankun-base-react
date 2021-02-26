import { observable, decorate } from 'mobx';


class TodoList {
  id = Math.rendom();
  title = ''
  finished = false
  get myTitle() {
    return this.title + '!!!'
  }
}


decorate(Todo, {
  title: observable,
  finished: observable
})