import React, { useState, useEffect } from 'react';
import MainMenu from "./components/MainMenu"
import './App.css'
import Loading from './components/Loading'
import HomePage from './components/Home/Index'
import Skills from './components/Skills/Index'
import Projects from './components/Projects/Index'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LangContext } from './store';


function App() {
  const [toggleLang, setToggleLang] = useState(true)
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
      <LangContext.Provider value={[toggleLang, setToggleLang]} >
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
          <Route exact path="/contact">
            {loading ? "" : <Contact />}
          </Route>
        </Switch>
      </Router>
      </LangContext.Provider>
    </div>
  );
}

export default App;
