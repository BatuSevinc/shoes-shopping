import React from 'react'
import "./App.css"
import { Home } from './pages'
import {Navbar} from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (

    <div className='font-inter'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App