import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Proyects from './routes/Proyects'

function App() {

  return (
    <HashRouter>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/proyectos' element= {<Proyects/>} />
    </Routes>
    </HashRouter>
  )
}

export default App
