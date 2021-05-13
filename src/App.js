import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { observer, MobXProviderContext } from 'mobx-react'
import { Link } from 'react-router-dom'
import actions from './shared/actions';



const useStores = () => {
  return useContext(MobXProviderContext);
}

const App = observer(() => {
  const [date, setDate] = useState('loading')
  const ctx = useStores()
  const add = ctx.store.todo.addCount
  const login = async () =>{ 
    const res = await new Promise((resolve, reject) => {
      const date = new Date()
      setTimeout(() =>{
        console.log(date)
        console.log(new Date())
        resolve(date.toString())
      }, 1000)
    })
    actions.setGlobalState({date: res})
  }
  useEffect(() => {
    actions.onGlobalStateChange((state, prevState) => {
      console.log('主应用观察者 state: ', state);
      console.log('主应用观察者 prevState: ', prevState);
      setDate(state.date || '--')
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/react/about'>react</Link>
        <Link to='/vue/about'>vue</Link>
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
          add()
        }}>修改title</button>
        <button onClick={() => {
          login()
        }}>login</button>
        <p>
          {date}
        </p>
      </header>
    </div>
  )
})

export default App;
