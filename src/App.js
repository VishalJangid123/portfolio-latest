import React from 'react'
import "./App.css"
import { About } from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Skills from './components/Skills/Skills'

export const App = () => {
  return (
    <> 
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
     )
}

export default App;
