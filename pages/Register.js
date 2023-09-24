import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input, Button } from '@rneui/themed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";
import { collection, doc, addDoc, getFirestore } from "firebase/firestore"; 

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


export default function Register() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [loading, setLoading] = useState(false);

    const register = () => {
        setLoading(true);

        if(email == '')
        {
            setEmailError("Please input an email")
            setLoading(false);
        }
        else if(password == '')
        {
            setPasswordError("Please input a password")
            setLoading(false);
        }
        else
        {
            createUserWithEmailAndPassword(auth, email, password) // if this code runs successfully
            .then((userCredential) => {
                setLoading(false);
                const user = userCredential.user;

                addData();

                props.navigation.reset({
                    index: 0,
                    routes: [{ name: "Login"}]
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode.includes("invalid-email")){
                    setEmailError("Please enter a valid email");
                }
                else if(errorCode.includes("weak-password")){
                    setPasswordError("Please enter a stronger password");
                }
                setLoading(false);
            })
        }
        
    }

    const addData = async() => {
        const docRef = await addDoc(collection(db, "Users"), {
            email: email,
            name: "temp"
        });
        console.log("Document written with ID: ", docRef.id);
    }

    return (
        <View
            style={{
                flex:1,
                backgroundColor: "#1a1a1a"
            }}
        >
            <Text
                style={{
                    color:"white",
                    fontWeight:"700",
                    fontSize:hp(3.1),
                    marginTop:hp(16),
                    marginLeft:hp(2),
                    marginBottom:hp(4)
                }}
            >
                Enter your email and password.
            </Text>
            <Input
                placeholder="abc@email.com"
                autoCapitalize={false}
                label={"Email"}
                
                labelStyle={{
                    marginLeft: hp(2),
                    marginBottom: hp(1),
                    fontWeight:"500",
                    color:"#494d4e"
                }}
                
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.28),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.28),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setEmail(text);
                }}
            />
            <Input
                placeholder="english 8+ characters"
                autoCapitalize={false}
                label={"Password"}
                secureTextEntry={true}
                
                labelStyle={{
                    marginLeft: hp(2),
                    marginBottom: hp(1),
                    color:"#494d4e",
                    fontWeight:"500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.28),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.28),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setPassword(text);
                }}
            />
            <Button
              title="Done"
              titleStyle={{
                color: "#686c6e",
                fontWeight: "500"
              }}
              buttonStyle={{
                backgroundColor: "#2d3133",
              }}
              containerStyle={{
                borderRadius:hp(5),
                width: hp(42),
                marginLeft:hp(2),
                height: hp(7)
              }}
              onPress={() => {
                register();
              }}
            />
            
        </View>
    )
}