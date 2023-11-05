import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, Button } from '@rneui/base';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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

// Initialize Firebase in general
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firebase Firestore
const db = getFirestore(app);

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState("");

    useEffect(() => {
        const autoLogin = async() => {
            var newEmail = await AsyncStorage.getItem('email');
            var newPassword = await AsyncStorage.getItem('password');
            setLoading(true);
            if(newEmail)
            {
                signInWithEmailAndPassword(auth, newEmail, newPassword)
            .then(async(userCredential) => {
                // Signed in 
                const q = query(collection(db, "Users"), where("email", "==", newEmail));
                var name = "";
                var type = "";
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    var data = doc.data();
                    name = data['name']
                    type = data['type']
                });
                await AsyncStorage.setItem('name', name);
                await AsyncStorage.setItem('type', type);
                setLoading(false);
                const user = userCredential.user;
                if(type == "user")
                {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Home" }]
                    });
                }
                else
                {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Admin" }]
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if (errorCode.includes("invalid-email")) {
                    setEmailError("Please enter a valid email");
                }
                else if (errorCode.includes("invalid-login-credentials")) {
                    setEmailError("Please check your email or your password");
                }
                setLoading(false);
            });
            }
        } 
        autoLogin();
    }, [])

    const login = async () => {
        setLoading(true);
        if (email == "") {
            setEmailError("Please input an email");
            setLoading(false);
        }
        else if (password == "") {
            setPasswordError("Please input a password");
            setLoading(false);
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                // Signed in 
                const q = query(collection(db, "Users"), where("email", "==", email));
                var name = "";
                var type = "";
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    var data = doc.data();
                    name = data['name']
                    type = data['type']
                });
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('password', password);
                await AsyncStorage.setItem('name', name);
                await AsyncStorage.setItem('type', type);
                setLoading(false);
                const user = userCredential.user;
                if(type == "user")
                {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Home" }]
                    });
                }
                else
                {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Admin" }]
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if (errorCode.includes("invalid-email")) {
                    setEmailError("Please enter a valid email");
                }
                else if (errorCode.includes("invalid-login-credentials")) {
                    setEmailError("Please check your email or your password");
                }
                setLoading(false);
            });
    }

    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor: "#1A1A1A"
            }}
        >
            <View
                style={{
                    flex: 1,
                    height: hp(100)
                }}
            >
                <View
                    style={{

                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: hp(5),
                            marginTop: hp(10),
                            marginLeft: hp(2),
                            color: "#F5F6F8",
                        }}
                    >
                        Log in
                    </Text>
                </View>

                {/* Email */}
                <View
                    style={{
                        justifyContent: 'center',
                        marginTop: hp(5)
                    }}
                >

                    <Text
                        style={{
                            marginTop: hp(1),
                            color: "#717678",
                            marginLeft: hp(2)
                        }}
                    >
                        E-mail address
                    </Text>
                    <Input
                        placeholder="abc@email.com"
                        inputContainerStyle={{
                            borderRadius: hp(1),
                            backgroundColor: '#1A1A1A',
                            paddingHorizontal: hp(2),
                            paddingVertical: hp(0.5),
                            marginTop: hp(1),
                            justifyContent: "center",
                            alignSelf: "center",
                            borderColor: '#212223',
                            borderBottomWidth: hp(0.3),
                            borderWidth: hp(0.3),
                        }}
                        inputStyle={{
                            color: 'white'
                        }}
                        errorMessage={emailError}
                        autoCapitalize="none"
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        onChange={() => {
                            setEmailError(false);
                        }}
                    >

                    </Input>

                    {/* Password */}
                    <Text
                        style={{
                            color: "#717678",
                            marginLeft: hp(2)
                        }}
                    >
                        Password
                    </Text>
                    <Input
                        placeholder="At least 8 characters"
                        inputContainerStyle={{
                            borderRadius: hp(1),
                            backgroundColor: '#1A1A1A',
                            paddingHorizontal: hp(2),
                            paddingVertical: hp(0.5),
                            marginTop: hp(1),
                            justifyContent: "center",
                            alignSelf: "center",
                            borderColor: '#212223',
                            borderBottomWidth: hp(0.3),
                            borderWidth: hp(0.3),
                            color: "#717678"
                        }}
                        errorMessage={passwordError}
                        inputStyle={{
                            color: 'white'
                        }}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onChange={() => {
                            setPasswordError(false);
                        }}
                    >

                    </Input>
                </View>

                {/* Button */}
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1
                    }}
                >
                    <Button
                        titleStyle={{
                            color: "white",
                            fontWeight: 'bold'
                        }}
                        title={"Login"}
                        buttonStyle={{
                            backgroundColor: '#2D3133',
                            borderRadius: hp(10),
                            marginTop: hp(1),
                            justifyContent: "center",
                            alignSelf: "center",
                            width: '100%',
                            paddingVertical: hp(1.3)
                        }}
                        containerStyle={{
                            paddingHorizontal: hp(2),
                            flex: 1
                        }}
                        loading={loading}
                        onPress={() => {
                            login();
                        }}
                    >

                    </Button>
                </View>
                <View
                    style={{
                        marginBottom: hp(5),
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: '#5f6060',
                            fontSize: hp(2)
                        }}
                    >
                        Don't have an account? <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => { props.navigation.navigate("Register") }}>Register</Text>
                    </Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}