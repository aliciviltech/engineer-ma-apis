import './App.css'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MainBody from './components/MainBody'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <MainBody/>
    </div>
  )
}

export default App