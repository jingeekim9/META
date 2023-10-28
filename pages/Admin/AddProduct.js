import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, StyleProp, TextStyle, StyleSheet, Platform } from "react-native";
import { Input, Button, ButtonGroup, ListItem } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid";
import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

// Initialize Firebase in general
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AddProduct() {
    const [productImage, setProductImage] = useState(null); 
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            exif: true
        });

        if(!result.canceled) {
            setProductImage(result.assets[0].uri)
        }
    }

    const addProduct = async() => {
        if (productName == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product name.'
            });
            return;
        }
        else if (price == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product price.'
            });
            return;
        }
        else if (category == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product category.'
            });
            return;
        }
        else if (size == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product size.'
            });
            return;
        }
        else if (color == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product color.'
            });
            return;
        }
        else if (description == "") {
            Toast.show({
                type: 'error',
                text1: 'Please add product description.'
            });
            return;
        }
        else if (productImage == null) {
            Toast.show({
                type: 'error',
                text1: 'Please add product price.'
            });
            return;
        }

        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", productImage, true);
            xhr.send(null);
        });

        const fileRef = ref(getStorage(), uuid.v4());
        const result = await uploadBytes(fileRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        var downloadUrl = await getDownloadURL(fileRef);


        const docRef = await addDoc(collection(db, "Products"), {
            productName: productName,
            price: price,
            category: category,
            size: size.split(","),
            color: color.split(","),
            description: description,
            productImage: downloadUrl
        })
    }

    return (
        <KeyboardAwareScrollView
        style={{
            flex: 1,
            backgroundColor: "white"
        }}
    >
        <View
            style={{
                flex: 1,
                marginTop: Platform.OS == "ios" ? hp(5) : 0
            }}
        >
            <Text style={styles.header}>
                Add Product
            </Text>
            <Text style={styles.headerr}>
                Last added by admin on Dec 19, 2023
            </Text>
            <Input
                placeholder="MEN'S LOAFER WITH HORSEBIT"
                label={"Name"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setProductName(text);
                }}
            />
            <Input
                placeholder="1190"
                autoCapitalize={"none"}
                label={"Price"}


                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}
                keyboardType="numeric"

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setPrice(text);
                }}
            />
            <Input
                placeholder="Shoes"
                label={"Category"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setCategory(text);
                }}
            />
            <Input
                placeholder="XL, S, XS"
                autoCapitalize={"none"}
                label={"Size Options"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setSize(text);
                }}
            />
            <Input
                placeholder="Black, Red"
                label={"Color Options"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setColor(text);
                }}
            />
            <Input
                placeholder=""
                autoCapitalize={"none"}
                label={"Description"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "500"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(12),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setDescription(text);
                }}
            />
            <Text
                style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: hp(3.3),
                    marginLeft: hp(2),
                    marginBottom: hp(1)
                }}
                >
                Product Image
            </Text>
            
            <TouchableOpacity
                style={{
                    borderRadius: hp(5),
                    width: wp(80),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: hp(2),
                    backgroundColor: 'black',
                    padding: hp(2)
                }}
                onPress={() => {
                    pickImage();
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: hp(2),
                        fontWeight: 'bold'
                    }}
                >
                    {
                        productImage ?
                        "Change Product Image"
                        :
                        "Add Product Image"
                    }
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    padding: hp(2)
                }}
            >
                {
                    productImage &&
                    <Image 
                        source={{
                            uri: productImage
                        }}
                        style={{
                            width: '100%',
                            height: hp(30),
                            marginVertical: hp(2),
                            borderRadius: hp(2)
                        }}
                        resizeMode={"cover"}
                    />
                }
            </View>
            <View
                style={{
                    marginTop: hp(2)
                }}
            >
                <Button
                        title="Add"
                        titleStyle={{
                            color: "white",
                            fontWeight: "500"
                        }}
                        buttonStyle={{
                            backgroundColor: "black",
                            paddingVertical: hp(1.5)
                        }}
                        containerStyle={{
                            borderRadius: hp(5),
                            width: wp(80),
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: hp(2)
                        }}
                        onPress={() => {
                            addProduct();
                        }}
                    />
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

                    />
            </View>
            <View
                style={{
                    marginBottom: hp(5),
                    alignItems: 'center',
                }}
            >
            </View>
        </View>
    </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor : "white",
        color : "black",
        textAlign : "center",
        paddingVertical : 10,
        marginBottom : 1,
        marginTop: 12,
        fontSize: 30,
        fontWeight: "400",
        height: 55
  },
    headerr: {
    backgroundColor : "#f2ead5",
    color : "black",
    textAlign : "center",
    paddingVertical : 7,
    marginBottom : 10,
    fontSize: 13,
    fontWeight: "500",
    height: 35
    }
});