import React, {useContext} from 'react';
import './App.css';
import { observer, MobXProviderContext } from 'mobx-react'
import {Link, useLocation, useHistory, useParams, useRouteMatch} from 'react-router-dom'




const useStores = () => {
  return useContext(MobXProviderContext);
}

const App = observer(() => {
  const ctx = useStores()
  console.log('useLocation: ', useLocation());
  console.log('useHistory: ', useHistory());
  console.log('useParams(): ', useParams());
  console.log('useRouteMatch: ', useRouteMatch());
  console.log('ctx: ', ctx.store.todo.count);
  const add = ctx.store.todo.addCount
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={{path: '/react', state: {a:1}}}>react</Link>
        <Link to='/vue'>vue</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {ctx.store.todo.count}
          {ctx.store.todo.finished ? 'hahaha' : 'lalala'}
        </a>
        
        <button onClick={() => {
          console.log(123)
          // ctx.store.count
          // ctx.store.todo.addCount()
          add()
          // console.log(ctx.myTitle)
        }}>修改title</button>
      </header>
    </div>
  )
})

export default App;
