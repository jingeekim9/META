import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator, ScrollView, Touchable, Image as ReactImage, Modal } from "react-native";
import { Button } from "@rneui/themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from "@rneui/themed";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, limit, orderBy, updateDoc, doc, arrayUnion, arrayRemove, setDoc, getDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
    apiKey: "AIzaSyC55iBDd_uZhjnoxzVeNmnNg8bTDEXD2Fo",
    authDomain: "meta-fc205.firebaseapp.com",
    projectId: "meta-fc205",
    storageBucket: "meta-fc205.appspot.com",
    messagingSenderId: "313671883891",
    appId: "1:313671883891:web:3ecf94acf648ee9ba85e06",
    measurementId: "G-953P5N046G"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Profile(props) {
    const [likedPhotos, setLikedPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const sheetRef = useRef(null);

    useEffect(() => {
        const getUserData = async () => {
            var tempEmail = await AsyncStorage.getItem('email');
            var tempName = await AsyncStorage.getItem('name');
            setName(tempName);
            setEmail(tempEmail)
        }

        getUserData();
    }, []);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.section, { marginBottom: hp(2) }]}>
                    <View style={styles.profileHeadContainer}>
                        <View>
                            <Icon 
                                type="ionicon"
                                name="arrow-back-outline"
                                size={hp(4)}
                                onPress={() => {
                                    props.navigation.goBack()
                                }}
                            />
                        </View>
                        <View style={styles.profileHead}>
                            <Icon
                                name="person-outline"
                                color={'black'}
                                size={hp(5)}
                                type="ionicon"
                            />
                        </View>
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4)
                            }}
                        >

                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: hp(2)
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: hp(3)
                        }}
                    >
                        {name}
                    </Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>Profile Information</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.sectionContent}>
                            <View>
                                <Text style={styles.sectionContentTitle}>Email</Text>
                            </View>
                            <View>
                                <Text style={styles.sectionContentText}>{email}</Text>
                            </View>
                        </View>
                        <View style={styles.sectionContent}>
                            <View>
                                <Text style={styles.sectionContentTitle}>Name</Text>
                            </View>
                            <View>
                                <Text style={styles.sectionContentText}>{name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <TouchableOpacity 
                    style={[styles.sectionContentContainer,
                        {
                            paddingBottom: 0
                        }
                    ]}
                    onPress={() => {
                        props.navigation.navigate("Size")
                    }}
                >
                    <View style={{
                        padding: hp(1),
                        paddingBottom: 0
                    }}>
                        <Text 
                            style={{
                                fontSize: hp(2),
                                fontWeight: 'bold'
                            }}
                        >
                            My Size Data
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.sectionContentContainer}
                    onPress={() => {
                        props.navigation.navigate("Checkout")
                    }}
                >
                    <View style={{
                        padding: hp(1)
                    }}>
                        <Text 
                            style={{
                                fontSize: hp(2),
                                fontWeight: 'bold'
                            }}
                        >
                            Checkouts
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <View style={[styles.section, { marginBottom: hp(10), marginTop: hp(5) }]}>
                    <View style={styles.sectionContent}>
                        <Button
                            title={'Sign Out'}
                            titleStyle={styles.buttonTitle}
                            buttonStyle={styles.buttonStyle}
                            containerStyle={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}
                            onPress={async () => {
                                await AsyncStorage.removeItem('name');
                                await AsyncStorage.removeItem('type');
                                await AsyncStorage.removeItem('email');
                                await AsyncStorage.removeItem('password');
                                props.navigation.reset({ routes: [{ name: 'Login' }] });
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        marginLeft: hp(1),
        fontSize: hp(4),
        fontWeight: 'bold',
        color: '#3B1CFF'
    },
    profileHeadContainer: {
        alignItems: 'flex-start',
        marginTop: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileHead: {
        backgroundColor: '#fff6e9',
        height: hp(10),
        width: hp(10),
        borderRadius: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeadText: {
        color: '#e4841f',
        fontWeight: 'bold',
        fontSize: hp(1.8),
    },
    profileInfoContainer: {
        alignItems: 'center',
        marginTop: hp(5),
    },
    profileInfoName: {
        fontSize: hp(4),
        fontWeight: 'bold',
        color: 'black',
    },
    profileInfoEmail: {},
    section: {
        padding: hp(1),
    },
    sectionTitle: {
        paddingHorizontal: hp(1),
        borderRadius: 5,
        marginBottom: Platform.OS === 'ios' ? hp(1) : 0,
    },
    sectionTitleText: {
        fontSize: Platform.OS === 'android' ? hp(2.5) : hp(2.5),
        color: 'black',
        fontWeight: '600'
    },
    sectionContentContainer: {
        padding: hp(1),
    },
    sectionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: Platform.OS === 'ios' ? hp(3) : 0,
    },
    sectionContentTitle: {
        fontSize: Platform.OS === 'android' ? hp(2) : hp(1.7),
        color: 'black',
        fontWeight: '600'
    },
    sectionContentText: {
        fontSize: hp(1.7),
        color: 'black',
    },
    divider: {
        borderBottomWidth: 2,
        marginHorizontal: hp(2),
        borderBottomColor: '#f5f5f5',
    },
    buttonTitle: {
        fontSize: hp(1.7),
        fontWeight: 'bold',
        color: 'white',
    },
    buttonStyle: {
        paddingVertical: hp(2),

        borderRadius: hp(5),

        backgroundColor: '#0c7bff',
    },
    carouselContainer: {
        borderRadius: 10,
        flex: 1,
        marginLeft: "5.5%",
        backgroundColor: 'white',
        padding: hp(1)
    },
    description: {
        fontSize: hp(1.5),
        marginTop: 5,
        fontWeight: '600'
    }
})