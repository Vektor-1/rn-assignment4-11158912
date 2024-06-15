// pages/HomePage.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
