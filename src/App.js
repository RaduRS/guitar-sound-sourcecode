import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import guitars from './components/category/guitars';
import basses from './components/category/basses';
import amplifiers from './components/category/amplifiers'
import fxpedals from './components/category/fxpedals'
import accessories from './components/category/accessories'
import Header from './components/header/header.component';
import SingInAndSingUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShop => {
          this.setState({
            currentUser: {
              id: snapShop.id,
              ...snapShop.data()
            }
          });
        });
      }
      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/guitars' component={guitars}/>
        <Route path='/basses' component={basses}/>
        <Route path='/amplifiers' component={amplifiers}/>
        <Route path='/fxpedals' component={fxpedals}/>
        <Route path='/accessories' component={accessories}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SingInAndSingUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
