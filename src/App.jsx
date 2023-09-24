// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skillbar from './components/Skillbar'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
     {<Navbar/>}
     <Home/>
     <About/>
     <Skillbar/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
