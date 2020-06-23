import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';


function Guitars() {
  return (
    <div>
      <div>GuitarNice</div>
    </div>
  )
}



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/Guitars' component={Guitars}/>
      </Switch>
    </div>
  );
}

export default App;
