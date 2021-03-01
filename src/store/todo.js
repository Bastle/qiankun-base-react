import { createContext } from 'react'
import { observable, decorate, action, computed } from 'mobx';


class TodoList {
  @observable title = ''
  @observable finished = false
  @computed 
  get myTitle() {
    return this.title + '!!!'
  }

  @action
  setTitle(title){
    console.log(111111111111, title)
    this.title = title;
  }
}

export const todo = new TodoList()