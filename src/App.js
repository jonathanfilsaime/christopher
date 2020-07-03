import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar'
import Home from './components/Home'
import Games from './components/Games'
import Sketches from './components/Sketches'
import Projects from './components/Projects'


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
