import React, { useState, useEffect } from 'react';
import MainMenu from "./components/MainMenu"
import './App.css'
import Loading from './components/Loading'
import HomePage from './components/Home/Index'
import Skills from './components/Skills/Index'
import Projects from './components/Projects/Index'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)

  const site = <header>
                  <MainMenu />
               </header>
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])
  return (
    <div className="app">
      <Router>
        {loading ? <Loading /> : site}
        <Switch>
          <Route exact path="/">
            {loading ? "" : <HomePage />}
          </Route>
          <Route exact path="/skills">
            {loading ? "" : <Skills />}
          </Route>
          <Route exact path="/projects">
            {loading ? "" : <Projects />}
          </Route>
          <Route exact path="/about-me">
            {loading ? "" : <AboutMe />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
