import React from 'react'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Project1 from './Projects/Project1/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'
import Project5 from './Projects/Project5'
import Project6 from './Projects/Project6'






const App = () => {
  return (
    <div>
      
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="/Project1" element={<Project1/>}/>
      <Route path="/Project2" element={<Project2/>}/>
      <Route path="/Project3" element={<Project3/>}/>
      <Route path="/Project4" element={<Project4/>}/>
      <Route path="/Project5" element={<Project5/>}/>
      <Route path="/Project6" element={<Project6/>}/>





     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
