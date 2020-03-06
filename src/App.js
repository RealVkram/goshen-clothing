import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';


const Hat = () => {
  return (
      <div>
          <h1> HAT</h1>
      </div>
  )
}

function App() {
  return (
    <div>      
        <Route exact path='/' component={Homepage}/>  
        <Route exact path='/hat' component={Hat}/>       
    </div>
  );
}

export default App;
