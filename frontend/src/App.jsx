import { useState } from 'react'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen">
     
      <BrowserRouter >
         <Navbar/>
          <div className="h-5/6 bg-gray-200">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
