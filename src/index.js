import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start} from 'qiankun'


import { observable, action, computed } from 'mobx';


class TodoList {
  title = '321'
  finished = false
}

// const store = new TodoList()
const todo = observable({
  count : 0,
  finished : false,
  get myCount(){
    return this.count + '!!!!!'
  },
  addCount(){
    this.count++
  }
})

ReactDOM.render(
    <React.StrictMode>
      <Provider store={{todo}}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('main-app')
);



// registerMicroApps([
//   {
//     name: 'vue',
//     entry: '//localhost:10000/',
//     container: '#vue',
//     activeRule: '/vue'
//   },
//   {
//     name: 'react',
//     entry: '//localhost:20000/',
//     container: '#react',
//     activeRule: '/react',
//     props: {
//       a:1,
//     }
//   }
// ])

// start()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
