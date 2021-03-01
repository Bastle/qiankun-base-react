import React, {useContext} from 'react';
import { observable } from 'mobx'
import logo from './logo.svg';
import './App.css';
import { inject, observer, MobXProviderContext } from 'mobx-react'
// import { observer } from 'mobx-react-lite'

// import {store} from './index'
// @inject('store')
// @observer
// class App extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render () {
//     console.log(this.props)
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//               {this.props.store.myTitle}
//             </a>
          
//           <button onClick={() => {
//             // this.props.store.setTitle('123')
//             this.props.store.setCount()
//             // console.log(123)
//             // ctx.title++
//             // ctx.setTitle('哇啦啦啦啦啦')
//             // // console.log(ctx.myTitle)
//           }}>修改title</button>
//         </header>
//       </div>
//     )
//   }
// }

const useStores = () => {
  return React.useContext(MobXProviderContext);
}

const App = observer(() => {
  const ctx = useStores()
  console.log('ctx: ', ctx);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {ctx.store.todo.myCount}
          </a>
        
        <button onClick={() => {
          console.log(123)
          // ctx.store.count
          ctx.store.todo.addCount()
          // console.log(ctx.myTitle)
        }}>修改title</button>
      </header>
    </div>
  )
})

export default App;
