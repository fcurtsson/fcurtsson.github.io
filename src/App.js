import React from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import MainPage from './mainPage'
import ProjectDetails from './projectDetails'
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
        <Route
            path="/project/"
            render={() => <ProjectDetails/>}
        />
        <Route
            exact path="/"
            render={() => <MainPage/>}
        />
    </div>
  );
}

export default App;
