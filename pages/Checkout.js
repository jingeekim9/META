import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, where, query } from "firebase/firestore";
import Toast from "react-native-toast-message";
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



export default function Checkout({ route, navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getDatabase = async () => {
            // var email = await AsyncStorage.getItem('email');
            var email = "jingee@logncoding.com"
            const productRef = collection(db, "Checkout");
            const q = query(productRef, where("email", "==", email))
            const querySnapshot = await getDocs(q);

            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                tempArray.push({
                    "color": data["color"],
                    "price": data["price"],
                    "productImage": data["productImage"],
                    "productName": data["productName"],
                    "size": data["size"]
                })
            });
            setProducts(tempArray)
        }

        getDatabase();
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white"
            }}
        >
            <View
                style={{
                    marginTop: hp(7),
                    marginBottom: hp(2),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Icon
                    type="ionicon"
                    name="arrow-back-outline"
                    size={hp(4)}
                    style={{
                        marginLeft: hp(1)
                    }}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: hp(3),
                        letterSpacing: hp(0.2)
                    }}
                >
                    Checkout
                </Text>
                <View
                    style={{
                        width: hp(4),
                        marginRight: hp(1)
                    }}
                >
                </View>
            </View>
            <ScrollView>
                {
                    products.length == 0 ?
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: hp(5)
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: hp(2),
                                    color: 'gray'
                                }}
                            >
                                No products
                            </Text>
                        </View>
                        :
                        products.map((el, ind) => (
                            <View
                                style={{
                                    flexDirection: "row"
                                }}
                                key={ind}
                            >
                                <Image
                                    style={{
                                        height: hp(10),
                                        width: hp(10),
                                        marginTop: hp(1.5),
                                        marginLeft: hp(1),
                                        borderRadius: hp(1),
                                        backgroundColor:"red"
                                    }}
                                    source={{
                                        uri: el["productImage"]
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop:hp(2),
                                        marginLeft:hp(1.5)
                                    }}
                                >
                                    {el["productName"]} {"\n"}Size: {el["size"]} {"\n\n\n"}Price: {el["price"]}
                                </Text>
                            </View>
                            
                        ))
                }
            </ScrollView>
        </View>
    );
}