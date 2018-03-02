import React, { Component } from 'react';
import Text from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Input 
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }

};

export default LoginForm;
