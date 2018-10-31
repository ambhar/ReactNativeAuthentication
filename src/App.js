import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner, Button, CardSection } from './components/common';
import LoginForm from './components/auth/LoginForm'

class App extends Component {

    state = {
        loggedIn:null
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDJHHxSp2sY1uw2iGrKaYcZ5F1UId-X_q4",
            authDomain: "authentication-bb733.firebaseapp.com",
            databaseURL: "https://authentication-bb733.firebaseio.com",
            projectId: "authentication-bb733",
            storageBucket: "authentication-bb733.appspot.com",
            messagingSenderId: "875983611869"
        });

        firebase.auth().onAuthStateChanged((user) => { // user undefined in case of logout
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });


    };

    

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}> 
                        Log Out 
                        </Button>
                    </CardSection>                    

                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
        
        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;