
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import BookMark from './pages/BookMark'



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/bookmark" element={<BookMark/>}/>
        

      </Routes>

    </>
  )
}

export default App
