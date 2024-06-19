import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Burger = require('../Images/CardImages/burger.png');
const Beats = require('../Images/CardImages/beats.png');
const Adobe = require('../Images/CardImages/adobe1.png');
const Dropbox = require('../Images/CardImages/DropBox.png');
const Google = require('../Images/CardImages/Google.png');
const Facebook = require('../Images/CardImages/Facebook.png');
const OpenAI = require('../Images/CardImages/OpenAI.png');
const AMD = require('../Images/CardImages/AMD.png');
const vector = require('../Images/CardImages/vector.png');

const data = [
    {
        id: '1',
        image: Facebook,
        title: 'Software Engineer',
        subtitle: 'Facebook',
        description: '',
        role: '',
        price: '$180,000',
        location: 'Accra, Ghana',
    },
    {
        id: '2',
        image: Google,
        title: 'Full-Stack Developer',
        subtitle: 'Google',
        description: 'Full-Time',
        role: 'Junior',
        price: '$160,00/year',
        location: 'Texas, USA',
    },
    {
        id: '3',
        image: Beats,
        title: 'Back-End Developer',
        subtitle: 'Beats',
        description: 'Full-Time',
        role: 'Senior',
        price: '$120,000/year',
        location: 'Austin, USA',
    },
    {
        id: '4',
        image: OpenAI,
        title: 'Prompt Engineer',
        subtitle: 'OpenAI',
        description: 'Part-Time',
        role: 'Junior',
        price: '$100,000/year',
        location: 'Los Angeles, USA',
    },
    {
        id: '5',
        image: Dropbox,
        title: 'DevOps Engineer',
        subtitle: 'Dropbox',
        description: 'Full-Time',
        role: 'Senior',
        price: '$128,100/year',
        location: 'Seattle, USA',
    },
    {
        id: '6',
        image: AMD,
        title: 'Systems Engineer',
        subtitle: 'AMD',
        description: 'Full-Time',
        role: 'Junior',
        price: '$82,500/year',
        location: 'London, England',
    },
    {
        id: '7',
        image: Burger,
        title: 'Data Analyst',
        subtitle: 'Burger King',
        description: 'Full-Time',
        role: 'Senior',
        price: '$154,000/year',
        location: 'New York, USA',
    },
    {
        id: '8',
        image: Adobe,
        title: 'Cloud Architect',
        subtitle: 'Adobe',
        description: 'Full-Time',
        role: 'Junior',
        price: '$110,500/year',
        location: 'Johannesburg, South Africa',
    },
];

const RowCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={vector}
                style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', color: 'black' }}
            >
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                        {item.description || item.role ? (
                            <View style={styles.middleContainer}>
                                {item.description ? (
                                    <View style={styles.ovalContainer}>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                ) : null}
                                {item.role ? (
                                    <View style={styles.ovalContainer}>
                                        <Text style={styles.role}>{item.role}</Text>
                                    </View>
                                ) : null}
                            </View>
                        ) : null}
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const CardList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RowCard item={item} />}
            contentContainerStyle={styles.container}
            numRows={2}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        height: 186,
        width: 280,
        backgroundColor: '#5386E4',
        borderRadius: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginVertical: 8,
        marginHorizontal: 8,
        overflow: 'hidden',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        bottom: 25,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        bottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 14,
        color: '#fff',
        marginTop: 2,
    },
    middleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    ovalContainer: {
        borderRadius: 20,
        backgroundColor: '#404040',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 10,
        top: 10,
    },
    description: {
        fontSize: 11,
        color: '#fff',
    },
    role: {
        fontSize: 11,
        color: '#fff',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 0,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    location: {
        fontSize: 14,
        color: '#fff',
    },
});

export default CardList;
