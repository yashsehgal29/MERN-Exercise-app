import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {


  return (
  
    <div className="h-screen bg-gray-200 ">
     
      <BrowserRouter >
         <Navbar/>
          <div className="h-5/6">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
