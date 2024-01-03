import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-1/6  text-4xl p-14 bg-white font-serif font-bold">
      <Link to={'/'}>Work Out Buddy</Link>
    </div>
  )
}

export default Navbar
