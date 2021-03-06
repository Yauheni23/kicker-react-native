import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';

export const RegisterScreen = ({singUp, swapPage}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../../assets/images/user.png')}/>
                <TextInput style={styles.inputs}
                           placeholder="Username"
                           underlineColorAndroid='transparent'
                           onChangeText={(username) => setUsername(username)}/>
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../../assets/images/password.png')}/>
                <TextInput style={styles.inputs}
                           placeholder="Password"
                           secureTextEntry={true}
                           underlineColorAndroid='transparent'
                           onChangeText={(password) => setPassword(password)}/>
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={require('../../assets/images/password.png')}/>
                <TextInput style={styles.inputs}
                           placeholder="Repeat password"
                           secureTextEntry={true}
                           underlineColorAndroid='transparent'
                           onChangeText={(password) => setRepeatedPassword(password)}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                onPress={() => singUp({username, password, repeatedPassword})}
            >
                <Text style={styles.loginText}>Register</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer}
                                onPress={() => swapPage()}
            >
                <Text>Login</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#00b5ec',
    },
    loginText: {
        color: 'white',
    }
});
