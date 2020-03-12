import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header.components/Header.components'


function App() {
  return (
    <div> 
        < Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>  
          <Route exact path='/shop' component={ShopPage}/>   
        </Switch>            
    </div>
  );
}

export default App;
