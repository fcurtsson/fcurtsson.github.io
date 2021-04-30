import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './screens/Landing'
import ProjectDetails from './screens/ProjectDetails'
import './App.css'

function App() {
  return (
    <div className="App container-fluid">
      <Route path="/project/" render={() => <ProjectDetails />} />
      <Route exact path="/" render={() => <Landing />} />
    </div>
  )
}

export default App
