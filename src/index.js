import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start} from 'qiankun'
import {BrowserRouter} from 'react-router-dom';

import { observable, action, computed } from 'mobx';
import actions from './shared/actions';


// const store = new TodoList()
const todo = observable({
  count : 0,
  finished : false,
  get myCount(){
    return this.count + '!!!!!'
  },
  addCount(){
    this.count++
  },
  setFinished(isFinished) {
    this.finished = isFinished
  }
}, {
  addCount: action.bound,
  setFinished: action,
  myCount: computed
})

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={{todo}}>
          <App />
        </Provider>
      </BrowserRouter>
      <button onClick={() => {
        todo.setFinished(!todo.finished)
      }}>+1</button>
    </React.StrictMode>,
  document.getElementById('main-app')
);


registerMicroApps(
  [
    {
      name: 'vue',
      entry: '//localhost:10000/',
      container: '#vue',
      activeRule: '/vue',
      props: {
        actions
      }
    },
    {
      name: 'react',
      entry: '//localhost:20000/',
      container: '#react',
      activeRule: '/react',
      props: {
        actions
      }
    }
  ], {
    beforeLoad: app => console.log('before load ', app),
    beforeMount: app => console.log('before mount', app),
    afterUnmount: app => console.log('after unmount', app),
  })

start()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
