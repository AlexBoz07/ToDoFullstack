import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Principal from './Principal'
import Task from './Task'

function App() {
 

  return (
    <>
    <Header></Header>
    <Principal>
      <Task title='silla'></Task>
    </Principal>
    <Footer></Footer>
    </>
  )
}

export default App
