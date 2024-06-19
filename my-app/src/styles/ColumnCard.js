import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

const Burger = require('../Images/CardImages/burger.png');
const Beats = require('../Images/CardImages/beats.png');
const Adobe = require('../Images/CardImages/adobe1.png');
const Dropbox = require('../Images/CardImages/DropBox.png');
const Google = require('../Images/CardImages/Google.png');
const Facebook = require('../Images/CardImages/Facebook.png');
const OpenAI = require('../Images/CardImages/OpenAI.png');
const AMD = require('../Images/CardImages/AMD.png');

const data = [
    {
        id: '1',
        image: Burger,
        title: 'Jr Executive',
        subtitle: 'Burger King',
        salary: '$96,000/y',
        location: 'Los Angels, US',
    },
    {
        id: '2',
        image: Beats,
        title: 'Product Manager',
        subtitle: 'Beats',
        salary: '$84,000/y',
        location: 'Florida, US',
    },
    {
        id: '3',
        image: Facebook,
        title: 'Product Manager',
        subtitle: 'Facebook',
        salary: '$86,000/y',
        location: 'Florida, US',
    },
    {
        id: '4',
        image: OpenAI,
        title: 'OpenAI',
        subtitle: 'Marketing Director',
        salary: '$105,900/y',
        location: 'Austin, US',
    },
    {
        id: '5',
        image: Dropbox,
        title: 'PR Executive',
        subtitle: 'Subtitle 5',
        salary: '$91,000/y',
        location: 'Seattle, US',
    },
    {
        id: '6',
        image: AMD,
        title: 'Social Media Manager',
        subtitle: 'AMD',
        salary: '$84,000/y',
        location: 'Beijing, China',
    },
    {
        id: '7',
        image: Google,
        title: 'UI/UX Designer',
        subtitle: 'Google',
        salary: '$82,000/y',
        location: 'Silicon Valley, US',
    },
    {
        id: '8',
        image: Adobe,
        title: 'Secretary',
        subtitle: 'Adobe',
        salary: '$84,000/y',
        location: 'London, UK',
    },
];

const ColumnCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.topContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.salary}>{item.salary}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
        </View>
    );
};

const CardList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ColumnCard item={item} />}
            contentContainerStyle={styles.container}
            numColumns={1}
            horizontal={false}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 2,
        height: 86,
        width: '98%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginVertical: 8,
        marginHorizontal: 8,
        padding: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginRight: 16,
        marginTop: 10,
    },
    title: {
        top: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        top: 12,
        color: '#666',
    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingVertical: 0,
        marginRight: 10,
    },
    salary: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        top: 4,
        color: '#666',
    },
    cardContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});

export default CardList;
