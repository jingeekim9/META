import React, { useState, useEffect, useRef, useMemo } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon, Input, AirbnbRating } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Checkbox from 'expo-checkbox';

export default function Cart({ route, navigation }) {
    const [products, setProducts] = useState([]);
    const [company, setCompany] = useState('');
    const [productName, setProductName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [productId, setProductId] = useState("");
    const [checked, setChecked] = useState({})
    const sheetRef = useRef(null);

    useEffect(() => {
        const getDatabase = async () => {
            // var email = await AsyncStorage.getItem('email');
            var email = await AsyncStorage.getItem("email")
            var cart = await AsyncStorage.getItem("cart")

            if (cart) {
                cart = JSON.parse(cart);
                var tempArray = []
                cart.forEach((data) => {
                    tempArray.push({
                        "color": data["color"],
                        "price": data["price"],
                        "productImage": data["productImage"],
                        "productName": data["productName"],
                        "size": data["size"],
                        "companyName": data["companyName"],
                        "productId": data["productId"]
                    })
                });
                setProducts(tempArray)
            }
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
                    Cart
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
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    sheetRef.current.snapToIndex(1);
                                    setCompany(el["companyName"]);
                                    setProductName(el["productName"]);
                                    setProductId(el["productId"])
                                }}
                                key={ind}
                            >
                                <Checkbox
                                    // disabled={false}
                                    onValueChange={() => {
                                        const temp2 = checked
                                        temp2[ind] = !temp2[ind]
                                        setChecked({ ...temp2 })
                                    }}
                                    value={checked[ind]}
                                    style={{
                                        width: 15,
                                        height: 15,
                                        borderColor: "#525CEB",
                                        marginLeft: hp(1)
                                    }}
                                    color={checked[ind] ? "#525CEB" : undefined}
                                />
                                <Image
                                    style={{
                                        height: hp(10),
                                        width: hp(10),
                                        marginTop: hp(1.5),
                                        marginLeft: hp(1),
                                        borderRadius: hp(1)
                                    }}
                                    source={{
                                        uri: el["productImage"]
                                    }}
                                />
                                <Text
                                    style={{
                                        marginTop: hp(2),
                                        marginLeft: hp(1.5)
                                    }}
                                >
                                    {el["productName"]} {"\n"}Size: {el["size"]} {"\n\n\n"}Price: {el["price"]}
                                </Text>
                            </TouchableOpacity>

                        ))
                }
            </ScrollView>
            <View
                style={{
                    borderTopColor: '#F1EFEF',
                    borderTopWidth: 2,
                    padding: hp(2),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around"
                }}>

                <Button
                    style={{
                        width: wp(90)
                    }}
                    buttonStyle={{
                        backgroundColor: "#1A1A1A",
                        borderRadius: hp(1),
                        height: hp(7)
                    }}
                    titleStyle={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    onPress={() => {
                    }}
                >

                    Checkout
                </Button>
                {/* <View>
                                <Icon
                                    name={heartPressed ? "heart" : "heart-outline"}
                                    type="ionicon"
                                    color={heartPressed ? "red" : "black"}
                                    onPress={() => {
                                        setHeartPress(!heartPressed)
                                    }}
                                    size={hp(4)}
                                >


                                </Icon>
                            </View> */}

            </View>
        </View>
    );
}