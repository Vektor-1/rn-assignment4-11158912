import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const Apple = require('../src/Images/CardImages/Apple.png');
const Google = require('../src/Images/CardImages/Google.png');
const Facebook = require('../src/Images/CardImages/Facebook.png');

export default function LoginPage({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (name === 'Eric Atsu' && email === 'eric@gmail.com') {
            navigation.navigate('Home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.jobizz}>Jobizz</Text>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.subtitle}>Let’s log in. Apply to jobs!</Text>
            </View>
            <View style={styles.Group48}>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={[styles.input, { marginTop: 10 }]}
                />
            </View>
            <View style={styles.loginButtonContainer}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Group288}>
                <View style={styles.line1} />
                <Text style={styles.OrContinueWith}>Or continue with</Text>
                <View style={styles.line1} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={Apple} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={Google} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={Facebook} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>Haven’t an account? <Text style={styles.registerLink}>Register</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    jobizz: {
        fontWeight: '600',
        fontSize: 22,
        color: '#356899',
        marginBottom: 10,
    },
    welcome: {
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: '400',
        fontSize: 14,
        color: '#0D0D26',
        opacity: 0.5,
    },
    Group48: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 30,
        top: 40,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        width: 327,
        height: 52,
        paddingHorizontal: 10,
    },
    loginButtonContainer: {
        top: 28,
        width: 327,
        height: 56,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
    },
    loginButton: {
        backgroundColor: 'blue',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    line1: {
        width: 100,
        height: 0.5,
        borderWidth: 0.5,
        borderColor: 'rgba(175,176,182,1)',
    },
    Group288: {
        top: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    OrContinueWith: {
        color: 'rgba(175,176,182,1)',
        fontSize: 13,
        lineHeight: 13,
        textAlign: 'center',
    },
    buttonContainer: {
        top: 88,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 0.2,
        borderRadius: 56,
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18,
    },
    image: {
        height: 30,
        width: 30,
    },
    footer: {
        top: 92,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20,
    },
    registerLink: {
        color: '#356899',
        fontWeight: 'bold',
    },
});
