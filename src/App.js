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

function Site() {
  return (
    <Router>
        <header>
            <MainMenu />
        </header>
        <Switch>
            <Route exact path="/portfolio/">
                <HomePage />
            </Route>
            <Route exact path="/portfolio/skills">
                <Skills />
            </Route>
            <Route exact path="/portfolio/projects">
                <Projects />
            </Route>
            <Route exact path="/portfolio/about-me">
                <AboutMe />
            </Route>
            <Route exact path="/portfolio/contact">
                <Contact />
            </Route>
        </Switch>
    </Router>
  );
}

function App() {
  const [toggleLang, setToggleLang] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const pageLoaded = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
      console.log('page fully loaded')
    }
    window.addEventListener('load', pageLoaded)
    return () => {
      window.removeEventListener('load', pageLoaded)
    }
  }, [])
  return (
    <div className="app">
      <LangContext.Provider value={[toggleLang, setToggleLang]} >
          {loading ? <Loading /> : <Site />}
          </LangContext.Provider>
    </div>
  );
}

export default App;
