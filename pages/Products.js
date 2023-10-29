import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";
import Toast from "react-native-toast-message";


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


export default function Products() {
    const [products, setProducts] = useState([]);
    const [showNum, setShowNum] = useState(2);
    const [category, setCategory] = useState("shirt");

    function chunk(arr, len) {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }

        return chunks;
    }


    useEffect(() => {
        const getDatabase = async () => {
            const querySnapshot = await getDocs(collection(db, "Products"));
            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                if (data["category"] != category) {
                    return;
                }
                tempArray.push({
                    "category": data["category"],
                    "color": data["description"],
                    "description": data["description"],
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
            <Text
                style={{
                    textAlign: "center",
                    fontSize: hp(3),
                    letterSpacing: hp(0.2),
                    marginTop: hp(7),
                    marginBottom: hp(2)
                }}
            >
                PRODUCTS
            </Text>
            <ScrollView>
                <View
                    style={{
                        backgroundColor: "black",
                        alignSelf: "center",
                        width: "100%",
                        height: hp(5)
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            alignSelf: "center",
                            marginTop: hp(1.5),
                            fontWeight: "700"
                        }}
                    >
                        FREE SHIPPING ON ALL ORDERS +$150
                    </Text>
                </View>
                <Image
                    style={{
                        height: hp(45),
                        width: "100%"
                    }}
                    source={{
                        uri: "https://superfuture.com/wp-content/uploads/2021/12/musinsa-standard-seoul-07.png"
                    }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: hp(3),
                        fontWeight: "600",
                        marginTop: hp(4),
                        marginBottom: hp(2)
                    }}
                >
                    T-Shirt
                </Text>
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <View>
                        {
                            chunk(products, 2).slice(0, showNum).map((el, ind) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: hp(6),
                                        justifyContent: 'space-around'
                                    }}
                                >
                                    {
                                        el.map((el2, ind2) => (
                                            <View>
                                                <Image
                                                    style={{
                                                        height: hp(20),
                                                        width: hp(20),
                                                        marginBottom: hp(1.5),
                                                        marginLeft: hp(1)
                                                    }}
                                                    source={{
                                                        uri: el2["productImage"]
                                                    }}
                                                />
                                                <Text
                                                    style={{
                                                        marginLeft: hp(2)
                                                    }}
                                                >
                                                    {el2["description"]}
                                                </Text>
                                                <Text
                                                    style={{
                                                        marginLeft: hp(2),
                                                        marginTop: hp(1),
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    ${el2["price"]}
                                                </Text>

                                            </View>
                                        ))
                                    }
                                </View>
                            ))
                        }
                    </View>
                    <Button
                        title="Explore More ▼"
                        titleStyle={{
                            color: "black"
                        }}
                        containerStyle={{
                            marginBottom: hp(10)
                        }}
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderColor: "black",
                            borderRadius: hp(1),
                            borderWidth: hp(0.1),
                            height: hp(5.6),
                            width: "92%",
                            alignSelf: "center",
                            textAlign: "center"
                        }}
                        onPress={() => {
                            if(showNum > products.length)
                            {
                                Toast.show({
                                    type: 'error',
                                    text1: 'No more products to show.'
                                });
                                return;
                            }
                            setShowNum(showNum + 1)
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}