import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Footername from './components/Footername'


const App = () => {
  return (
    <div div className="h-screen w-screen bg-zinc-800 text-white overflow-x-hidden">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
 
      </Routes>
     {/* <Footername /> */}
    </div>
  )
}

export default App
