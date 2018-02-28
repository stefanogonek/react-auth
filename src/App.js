import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCoahYMx3w3ku7oGAGnquDBtqBOzVg1pwE',
        authDomain: 'authentication-fe903.firebaseapp.com',
        databaseURL: 'https://authentication-fe903.firebaseio.com',
        projectId: 'authentication-fe903',
        storageBucket: 'authentication-fe903.appspot.com',
        messagingSenderId: '495532807816'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
