import React from 'react'
import "./App.css"
import { About } from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Github from './components/Github/Github'
import { Header } from './components/header/Header'
import { Home } from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Publication from './components/Publications/Publication'
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
      <Portfolio />
      <Github />
      <Publication />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
     )
}

export default App;
