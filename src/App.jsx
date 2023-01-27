import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Projects from './routes/Projects'

function App() {

  return (
      <HashRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/proyectos' element= {<Projects/>} />
      </Routes>
      </HashRouter>
  )
}

export default App
