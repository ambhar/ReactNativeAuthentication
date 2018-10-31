import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './../common'

class LoginForm extends Component {

    state = { 
        email:'',
        password:'',
        error:'',
        loading:false

    };

    onButtonPress(){
        this.setState({error: '', loading: true});
        const { email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( this.onLoginSuccess.bind(this))/*() => { //if success

        })*/
        .catch( () => { // if error this will be executed
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( this.onLoginSuccess.bind(this))
            .catch( this.onLoginFail.bind(this));
        });
    }


    onLoginSuccess() {
        this.setState({
            'email': '',
            'password': '',
            'loading': false,
            'error': ''
        });
    }

    onLoginFail() {
        this.setState({'error': 'Authentication Failed', loading: false});
    }

    renderButton() {
        if (this.state.loading) {
           return  <Spinner size='small' />
        } 

        return (
            <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
        );
            
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Enter your Email"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="*************"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>


            </Card>
        );
    } ;
}

const styles = {

    errorStyle:{
        'fontSize': 20,
        'alignSelf': 'center',
        'color': 'red'
    }
}
export default LoginForm;