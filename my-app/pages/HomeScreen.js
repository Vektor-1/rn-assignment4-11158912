import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../src/styles/RowCard';
import Card2 from '../src/styles/ColumnCard';

const Img1 = require('../assets/Img1.png');

export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.nameText}>Eric Atsu</Text>
                    <Text style={styles.emailText}>eric@gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
                    {Img1 && <Image source={Img1} style={styles.profileImage} />}
                    <View style={styles.alertCircleContainer}>
                        <View style={styles.alertCircle} />
                    </View>
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
                    <MaterialCommunityIcons name="tune-vertical-variant" size={24} style={styles.tuneIcon} />
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Featured Jobs</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>
                <Card />
            </View>

            <View style={{marginTop: 20}}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Jobs</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>
                <Card2 />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    nameText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
    },
    emailText: {
        fontSize: 20,
        color: '#666',
    },
    imageButton: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 1,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    alertCircleContainer: {
        width: 14,
        height: 14,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 1,
        right: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        position: 'absolute',
        top: 3,
        right: 3,
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginRight: 16,
        height: 45,
    },
    searchIcon: {
        color: '#95969D',
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    tuneIconContainer: {
        padding: 10,
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tuneIcon: {
        color: '#356899',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
    },
    seeAllText: {
        fontSize: 14,
        color: '#9C9BA3',
    },
});
