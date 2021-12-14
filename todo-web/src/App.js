import React, { Component } from 'react'
import TodoListRoot from './TodoList'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className='center w85'>
        <div className='ph3 pv1 background-gray'>
          <Routes>
            <Route exact path='/' element={<TodoListRoot/>}/>
            <Route exact path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </div>
    )
  }

}

export default App