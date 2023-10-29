import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Input, Button } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import { collection, doc, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);


export default function Register(props) {

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [companyLogo, setCompanyLogo] = useState(null);
    const [companyLogoError, setCompanyLogoError] = useState('')
    const [user, setUser] = useState("user");
    const [loading, setLoading] = useState(false);

    const register = () => {
        setLoading(true);

        if (name == '') {
            setNameError("Please input your name")
            setLoading(false);
        }
        else if (email == '') {
            setEmailError("Please input an email")
            setLoading(false);
        }
        else if (password == '') {
            setPasswordError("Please input a password")
            setLoading(false);
        }
        else if (password != confirmPassword) {
            setConfirmPasswordError("Please input the same password")
            setLoading(false);
        }
        else {
            createUserWithEmailAndPassword(auth, email, password) // if this code runs successfully
                .then((userCredential) => {
                    setLoading(false);
                    const user = userCredential.user;

                    addData();

                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }]
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("invalid-email")) {
                        setEmailError("Please enter a valid email");
                    }
                    else if (errorCode.includes("weak-password")) {
                        setPasswordError("Please enter a stronger password");
                    }
                    setLoading(false);
                })
        }

    }

    const addData = async () => {
        const docRef = await addDoc(collection(db, "Users"), {
            email: email,
            name: name
        });
        console.log("Document written with ID: ", docRef.id);
    }

    const addCompany = async() => {
        
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            exif: true
        });

        if (!result.canceled) {
            setCompanyLogo(result.assets[0].uri)
        }
    }

    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor: "#1a1a1a"
            }}
        >
            <View
                style={{
                    flex: 1
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: hp(5),
                        marginTop: hp(16),
                        marginLeft: hp(2),
                        marginBottom: hp(4)
                    }}
                >
                    Register
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginBottom: hp(3)
                    }}
                >
                    <Button
                        title="User"
                        titleStyle={{
                            color: "white",
                            fontWeight:"bold"
                        }}
                        buttonStyle={{
                            backgroundColor: '#686c6e',
                            borderRadius: hp(2)
                        }}
                        containerStyle={{
                            width: hp(18),
                        }}
                        onPress={() => {
                            setUser("user");
                        }}
                    />
                    <Button
                        title="Company"
                        titleStyle={{
                            color: "white",
                            fontWeight:"bold"
                        }}
                        buttonStyle={{
                            backgroundColor: '#686c6e',
                            borderRadius: hp(2)
                        }}
                        containerStyle={{
                            width: hp(18),

                        }}
                        onPress={() => {
                            setUser("company");
                        }}
                    />
                </View>
                <Input
                    placeholder={
                        (user == "user") ? "Johnny Appleseed" : "Musinsa"
                    }
                    label={
                        (user == "user") ? "Name" : "Company Name"
                    }
                    errorMessage={nameError}
                    labelStyle={{
                        marginLeft: hp(1),
                        marginBottom: hp(1),
                        fontWeight: "500",
                        color: "#494d4e"
                    }}

                    style={{
                        marginLeft: hp(1.5),
                        fontWeight: "600"
                    }}

                    inputContainerStyle={{
                        borderWidth: hp(0.2),
                        borderRadius: hp(0.85),
                        borderBottomWidth: hp(0.2),
                        borderColor: "white",
                        marginLeft: hp(1),
                        height: hp(6),
                        width: hp(42)
                    }}
                    inputStyle={{
                        color: "#686c6e"
                    }}
                    onChangeText={(text) => {
                        setName(text);
                    }}
                    onChange={() => {
                        setNameError('');
                    }}
                />
                <Input
                    placeholder="abc@email.com"
                    autoCapitalize={"none"}
                    label={"Email"}
                    errorMessage={emailError}

                    labelStyle={{
                        marginLeft: hp(1),
                        marginBottom: hp(1),
                        fontWeight: "500",
                        color: "#494d4e"
                    }}

                    style={{
                        marginLeft: hp(1.5),
                        fontWeight: "600"
                    }}

                    inputContainerStyle={{
                        borderWidth: hp(0.2),
                        borderRadius: hp(0.85),
                        borderBottomWidth: hp(0.2),
                        borderColor: "white",
                        marginLeft: hp(1),
                        height: hp(6),
                        width: hp(42)
                    }}
                    inputStyle={{
                        color: "#686c6e"
                    }}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    onChange={() => {
                        setEmailError('');
                    }}
                />
                <Input
                    placeholder="english 8+ characters"
                    autoCapitalize={"none"}
                    label={"Password"}
                    secureTextEntry={true}
                    errorMessage={passwordError}
                    labelStyle={{
                        marginLeft: hp(1),
                        marginBottom: hp(1),
                        color: "#494d4e",
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
                        borderColor: "white",
                        marginLeft: hp(1),
                        height: hp(6),
                        width: hp(42)
                    }}
                    inputStyle={{
                        color: "#686c6e"
                    }}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    onChange={() => {
                        setPasswordError('');
                    }}
                />
                <Input
                    placeholder="english 8+ characters"
                    autoCapitalize={"none"}
                    label={"Confirm Password"}
                    secureTextEntry={true}
                    errorMessage={confirmPasswordError}
                    labelStyle={{
                        marginLeft: hp(1),
                        marginBottom: hp(1),
                        color: "#494d4e",
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
                        borderColor: "white",
                        marginLeft: hp(1),
                        height: hp(6),
                        width: hp(42)
                    }}
                    inputStyle={{
                        color: "#686c6e"
                    }}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                    }}
                    onChange={() => {
                        setConfirmPasswordError('');
                    }}
                />
                {
                    user == "company" ?
                        <TouchableOpacity
                            style={{
                                borderRadius: hp(2),
                                width: wp(70),
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                backgroundColor: '#2d3133',
                                padding: hp(2)
                            }}
                            errorMessage={companyLogoError}
                            onPress={() => {
                                pickImage();
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: hp(1.8),
                                    fontWeight: '600'
                                }}
                            >
                                {
                                    companyLogo ?
                                        "Change Company Logo"
                                        :
                                        "Add Company Image"
                                }
                            </Text>
                        </TouchableOpacity> : null
                }
                {
                    user=="company" && companyLogo &&
                    <Image
                        source={{
                            uri: companyLogo
                        }}
                        style={{
                            width: '100%',
                            height: hp(20),
                            marginVertical: hp(2),
                            borderRadius: hp(2)
                        }}
                        resizeMode={"cover"}
                    />
                }
                
                <View
                    style={{
                        flex: 1,
                        marginTop: hp(2)
                    }}
                >
                    <Button
                        title="Register"
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
                        }}
                        loading={loading}
                        onPress={() => {
                            user=="user" ? register() : addCompany()
                        }}
                    />
                </View>
                <View
                    style={{
                        marginBottom: hp(5),
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#5f6060',
                            fontSize: hp(2)
                        }}
                    >
                        Already have an account? <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => { props.navigation.navigate("Login") }}>Login</Text>
                    </Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}