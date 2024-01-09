import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from './App'
// import {FirstApp} from './FirstApp'
// import {PropsApp} from './Props'
import {CounterApp} from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp /> */}
    {/* <PropsApp /> */}
    <CounterApp value={100} />
  </React.StrictMode>,
)
