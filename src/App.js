import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar.js'
import Home from './components/Home.js'
import Games from './components/Games.js'
import Sketches from './components/Sketches.js'
import Projects from './components/Projects.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/games" component={Games}/>
            <Route path="/sketches" component={Sketches}/>
            <Route path="/projects" component={Projects}/>
            <Route component={Error}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
