import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onPress, children}) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        // on Press = { () = > console.log("press tested"); } Testing button press
        <TouchableOpacity style={buttonStyle} onPress={onPress}> 
           <Text style={buttonTextStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },

    buttonTextStyle: {
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

//export default Button;
export { Button };