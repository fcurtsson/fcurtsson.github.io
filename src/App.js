import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './screens/Landing'
import ProjectDetails from './screens/ProjectDetails'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Route path="/project/" render={() => <ProjectDetails />} />
      <Route exact path="/" render={() => <Landing />} />
      <div id="contact" className="col-12 my-5">
        <Footer />
      </div>
    </div>
  )
}

export default App
