import React from 'react'
import './App.css'
import Logo from './logo.png'
import Todos from './components/Todos'

function App () {
  return (
    <div className='App'>
      <img src={Logo} alt='' />
      <Todos />
    </div>
  )
}

export default App
