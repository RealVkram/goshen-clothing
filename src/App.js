import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header.components/Header.components';
import SignInAndSignUpPage from './pages/signIn-signup/SignIn-SignUp';
import { auth } from './firebase/firebase.utils'


class App extends React.Component {

  state = {
    currentUser: null
  }

  unSubscribeFromGoogleAuth = null;

  componentDidMount() {
    this.unSubscribeFromGoogleAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromGoogleAuth();
  }

  render() { 
    const { currentUser } = this.state
    return (
      <div> 
          < Header currentUser={currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage}/>  
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndSignUpPage}/>    
          </Switch>            
      </div>
    );
  }
  
}

export default App;
