import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const Apple = require('./assets/Apple.png');
const Google = require('./assets/Google.png');
const Facebook = require('./assets/Facebook.png');

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.Group48}>
                <TextInput
                    placeholder={"Name"}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Email"}
                    style={[styles.input, { marginTop: 10 }]}
                />
            </View>
            <View style={styles.loginButtonContainer}>
                <Button style={styles.loginButton} title={"Login"} onPress={() => {}}>Submit</Button>
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
                <Text>Haven’t an account? <Text style={{color: 'blue', fontWeight: 'bold'}}>Register</Text></Text>
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
    Group48: {
        width: "100%",
        flexDirection: "column",
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        width: 327,
        height: 52,
        paddingHorizontal: 10,
    },
    loginButton: {
        fontColor: 'white',
    },
    loginButtonContainer: {
        backgroundColor: 'blue',
        width: 327,
        height: 56,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    line1: {
        width: 98,
        height: 0.5,
        borderWidth: 0.5,
        borderColor: "rgba(175,176,182,1)",
    },
    Group288: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    OrContinueWith: {
        color: "rgba(175,176,182,1)",
        fontSize: 13,
        lineHeight: 13,
        textAlign: "center",
    },
    buttonContainer: {
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
        marginHorizontal: 24,
    },
    image: {
        height: 30,
        width: 30,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20,
    },
});
