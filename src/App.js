import React from 'react'
import "./App.css"
import { About } from './components/About/About'
import { Header } from './components/header/Header'
import { Home } from './components/Home/Home'

export const App = () => {
  return (
    <> 
    <Header />

    <main className='main'>
      <Home />
      <About />
    </main>
    </>
     )
}

export default App;
