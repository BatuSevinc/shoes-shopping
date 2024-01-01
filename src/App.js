import React from 'react'
import "./App.css"
import { Home, Products } from './pages'
import {Navbar} from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (

    <div className='font-inter bg-grey'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App