import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
import MainMenu from "./components/MainMenu"
import './App.css'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)

  const site = <header>
                  <MainMenu />
               </header>
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  })
  return (
    <div className="app">
      {loading ? <Loading /> : site}
    </div>
  );
}

export default App;
