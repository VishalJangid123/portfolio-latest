import React from 'react'
import "./App.css"
import { Header } from './components/header/Header'
import { Home } from './components/Home/Home'

export const App = () => {
  return (
    <> 
    <Header />

    <main className='main'>
      <Home />
    </main>
    </>
     )
}

export default App;
