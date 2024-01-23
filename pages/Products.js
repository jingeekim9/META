import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, where, query } from "firebase/firestore";
import Toast from "react-native-toast-message";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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



export default function Products({ route, props, navigation }) {
    const [products, setProducts] = useState([]);
    const [showNum, setShowNum] = useState(2);
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("shirt");
    const {otherParam, display, check} = route.params;

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
            const productRef = collection(db, "Products");
            let q = null;
            if(check){
                q = query(productRef, where("category", "==", otherParam));
            } else{
                q = query(productRef, where("companyName", "==", otherParam));
            }
            const querySnapshot = await getDocs(q);
            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                tempArray.push({
                    "category": data["category"],
                    "color": data["color"],
                    "description": data["description"],
                    "price": data["price"],
                    "productImage": data["productImage"],
                    "productName": data["productName"],
                    "size": data["size"],
                    "docId" : doc.id
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
                    PRODUCTS
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
                <Image
                    style={{
                        height: hp(45),
                        width: "100%"
                    }}
                    source={{
                        uri: display
                    }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: hp(3),
                        fontWeight: "600",
                        marginTop: hp(4),
                        marginBottom: hp(3),
                        letterSpacing: hp(0.1)
                    }}
                >
                    {otherParam}
                </Text>
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <View>
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
                                    No products to show
                                </Text>
                            </View>
                            :
                            chunk(products, 2).slice(0, showNum).map((el, ind) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: hp(6),
                                        justifyContent: 'space-around'
                                    }}
                                    key={ind}
                                >
                                    {
                                        el.map((el2, ind2) => (
                                            <View
                                                key = {ind2}
                                            >
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        navigation.navigate('Detail', {
                                                            otherParam: el2["docId"]
                                                        });
                                                    }}
                                                >
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
                                                </TouchableOpacity>
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
                                                    onPress={() => {
                                                        navigation.navigate('Detail', {
                                                            otherParam: el2["docId"]
                                                        });
                                                    }}
                                                >
                                                    {parseInt(el2["price"]).toLocaleString("ko-KR", { style: "currency", currency: "KRW" })}
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