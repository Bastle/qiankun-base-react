import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start} from 'qiankun'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main-app')
);



registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:10000/',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'react',
    entry: '//localhost:20000/',
    container: '#react',
    activeRule: '/react',
    props: {
      a:1,
    }
  }
])

start()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
