import React from 'react';
import {StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
const Img1 = require('../assets/Img1.png');

export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerText}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#333",
                    }}>Eric Atsu</Text>
                    <Text style={
                        {
                            fontSize: 20,
                            color: '#666',

                        }
                    }>eric@gmail.com</Text>
                </View>
                <TouchableOpacity
                    style={styles.imageButton}
                    onPress={() => {}}
                >
                    {Img1 && (
                        <Image source={Img1} style={{ height: 40, width: 40}} />
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.searchAndFilterContainer}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search a job or position"
                        style={styles.searchInput}
                        placeholderTextColor="#95969D"
                    />
                </View>
                <TouchableOpacity style={styles.tuneIconContainer}>
                    <MaterialCommunityIcons name="tune-vertical-variant" size={24} color="#ccc" style={styles.tuneIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 700,
                    paddingTop: 6,
                }}>Featured Jobs</Text>
                <Text>See all</Text>
                <View>
                    <FlatList
                        data={cardData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardComponent 
                                image={item.image}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardContainer}
                    />
                </View>
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    lineHeight: 24,
                    fontWeight: 700,
                    paddingTop: 18,
                    paddingBottom: 8,

                }}>Popular Jobs</Text>
                <Text>See all</Text>
                <View>
                    <FlatList
                        data={listData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ListComponent title={item.title} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}
const cardData = [
    { id: 1, title: 'C1', subtitle: '' },
    { id: 2, title: 'C2', subtitle: '' },
];

const listData = [
    { id: 1, title: '',  },
    { id: 2, title: '', },
    { id: 3, title: '',  },
];

const CardComponent = ({ image, title, subtitle, price, location }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubTitle}>{subtitle}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    );
}

const ListComponent = ({ title }) => {
    return (
        <View style={styles.card2}>
            <View style={styles.cardContent}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingTop: 30,
                    paddingHorizontal: 20,
                }}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingTop: 6,
        paddingBottom: 4,
    },
    imageButton: {
        marginLeft: 'auto',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    subheaderText: {
        fontSize: 20,
        color: '#666',

    },
    imageContainer1: {
        marginRight: 1,
        alignSelf: 'center',
        paddingBottom: 20,
    },
    imageStyle: {
        height: 145,
        width: 150,
        paddingBottom: 4,
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchContainer: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FBF9F7',
        borderRadius: 12,
        paddingHorizontal: 30,
        marginRight: 16,
        padding: 8,
    },
    searchIcon: {
        marginRight: 8,
        color: '#95969D',
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#FBF9F7',
    },
    tuneIconContainer: {
        padding: 14,
        width: '13.5%',
        backgroundColor: '#F0522F',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tuneIcon: {
        color: '#FFFFFF',
    },
    card1: {
        backgroundColor: '#fff',
        borderRadius: 16,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
        width: 200,
        height: 220,

    },
    card2: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
        width: 354,
        height: 142,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 12,
        paddingHorizontal: 16,

    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 16,

    },
    cardContainer: {
        paddingTop: 6,
    },
    imageContainer2: {
        marginBottom: 8,
        alignSelf: 'center',
    },
    image2: {
        width: 151,
        height: 132,
    },
    titleSection: {

    },
    priceLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingVertical: 12,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        color: '#666',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
        width: 250,
        padding: 10,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        paddingVertical: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardSubTitle: {
        fontSize: 14,
        color: '#777',
    }, cardFooter: undefined,

});
