import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Agence from './Pages/Agence.jsx' 
import Projects from './Pages/Projects.jsx' 
import Contact from './Pages/Contact.jsx'
const App = () => {
  

  return (
    <div className='text-white '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
