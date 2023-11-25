import React, { useState, useEffect, useRef, useMemo } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon, Input, AirbnbRating } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

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
    const [company, setCompany] = useState('');
    const [productName, setProductName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(4);
    const [loading, setLoading] = useState(false);
    const sheetRef = useRef(null);

    const addReview = async () => {
        const docRef = await addDoc(collection(db, "Reviews"), {
            rating: rating,
            review: reviewText,
            company: company,
            productName: productName
        });
        setLoading(false);
    }

    useEffect(() => {
        const getDatabase = async () => {
            var email = await AsyncStorage.getItem('email');
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
                    "size": data["size"],
                    "companyName" : data["companyName"]
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
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row"
                                }}
                                onPress={() => {
                                    sheetRef.current.snapToIndex(1);
                                    setCompany(el["companyName"]);
                                    setProductName(el["productName"]);
                                }}
                                key={ind}
                            >
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
            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={["1%", "50%"]}
                backgroundStyle={{
                    backgroundColor:"#f4f4f4"
                }}
                
            >
                <View
                    style={{
                        flex:1,
                        flexDirection:"column"
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.3),
                            marginLeft: hp(1),
                            marginTop: hp(1),
                            letterSpacing: hp(0.1)
                        }}
                    >Leave a review!</Text>

                    <View
                        style={{
                            marginTop:hp(3)
                        }}
                    >
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={hp(3)}
                            showRating={false}
                            onFinishRating={(e) => {
                                setRating(e);
                            }}
                        />
                    </View>

                    <Input
                        placeholder="Type..."
                        multiline={true}
                        labelStyle={{
                            marginLeft: hp(1),
                        }}
                        style={{
                            marginTop: hp(3),
                            fontWeight: "400"
                        }}

                        inputStyle={{
                            color: "#686c6e"
                        }}
                        onChangeText={(txt) => {
                            setReviewText(txt);
                        }}
                    />
                    <Button
                        title="Submit"
                        titleStyle={{
                            color: "white",
                            fontWeight: "500"
                        }}
                        buttonStyle={{
                            backgroundColor: "#2d3133",
                            paddingVertical: hp(1.5)
                        }}
                        containerStyle={{
                            borderRadius: hp(5),
                            width: hp(42),
                            marginLeft: hp(2),
                            position:"absolute",
                            bottom:hp(7)
                        }}
                        
                        loading={loading}
                        onPress={() => {
                            setLoading(true);
                            addReview();
                        }}
                    />
                </View>
            </BottomSheet>
        </View>
    );
}