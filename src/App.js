import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCoahYMx3w3ku7oGAGnquDBtqBOzVg1pwE',
        authDomain: 'authentication-fe903.firebaseapp.com',
        databaseURL: 'https://authentication-fe903.firebaseio.com',
        projectId: 'authentication-fe903',
        storageBucket: 'authentication-fe903.appspot.com',
        messagingSenderId: '495532807816'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
