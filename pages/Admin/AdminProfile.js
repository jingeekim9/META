import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, StyleProp, TextStyle, StyleSheet, Platform } from "react-native";
import { Input, Button, ButtonGroup, Icon, ListItem } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid";
import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        exif: true
    });

    if(!result.canceled) {
        setProductImage(result.assets[0].uri)
    }
}

export default function AdminProfile(props) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.section, { marginBottom: hp(2) }]}>
                    <View style={styles.profileHeadContainer}>
                        <View style={styles.profileHead}>
                            <Icon
                                name="person-outline"
                                color={'black'}
                                size={hp(6)}
                                type="ionicon"
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: hp(2)
                    }}
                >
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>Admin Profile Information</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.sectionContent}>
                            <View>
                                <Text style={styles.sectionContentTitle}>Company Name</Text>
                            </View>
                        </View>
                        <View style={styles.sectionContent}>
                            <View>
                                <Text style={styles.sectionContentTitle}>Email</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                style={{
                    borderRadius: hp(5),
                    width: wp(75),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: hp(2),
                    backgroundColor: '#f2ead5',
                    padding: hp(2)
                }}
                onPress={() => {
                    pickImage();
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: hp(2),
                        fontWeight: 'bold'
                    }}
                >
                    {
                        "Add Logo Image"
                    }
                </Text>
            </TouchableOpacity>
            <Button
                        title="Cancel"
                        titleStyle={{
                            color: "black",
                            fontWeight: "500"
                        }}
                        buttonStyle={{
                            backgroundColor: "#E8F6F7",
                            paddingVertical: hp(1.5)
                        }}
                        containerStyle={{
                            borderRadius: hp(5),
                            width: wp(80),
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: hp(1)
                        }}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        marginLeft: hp(1),
        fontSize: hp(4),
        fontWeight: 'bold',
        color: '#3B1CFF'
    },
    profileHeadContainer: {
        alignItems: 'center',
        marginTop: hp(6),
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
        fontSize: Platform.OS === 'android' ? hp(3) : hp(3),
        color: 'black',
        fontWeight: '400'
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
        fontSize: Platform.OS === 'android' ? hp(2.2) : hp(1.8),
        color: 'black',
        fontWeight: '400'
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