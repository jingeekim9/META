import React, { useState } from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, Button } from '@rneui/base';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import { Image } from "react-native";

export default function Detail(props) {
    return (
        <View>
            {/* Top Bar */}
            <View
                style = {{
                    backgroundColor: "#F1ECEA",
                    height: hp(7),
                    justifyContent: 'center'
                }}>
                    <Text
                        style = {{
                            fontSize: hp(3),
                            paddingLeft: hp(5)
                        }}>
                        Sample Text
                    </Text>
            </View>
            
            {/* Icon Bar */}
            <View>
                <Image
                    style={{
                        width: 25,
                        height: 25
                    }}
                    source={require('../assets/left-arrow.png')}
                />

                <Image
                    style={{
                        width: 25,
                        height: 25
                    }}
                    source={require('../assets/loupe.png')}
                />
            </View>

            {/* Big Image */}
            <View>
                <Image
                    style={{
                        width: 200,
                        height: 350,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: hp(10)
                    }}
                    source={require('../assets/tshirt.png')}
                />

                <View
                    style = {{
                        backgroundColor: "#121314",
                        height: hp(5),
                        justifyContent: 'center'
                    }}>
                    <Text
                        style = {{
                            color: "white",
                            paddingLeft: hp(3)
                        }}>
                        tshirt
                    </Text>
                </View>
            </View>

            {/* Bottom thingy */}
            <View
                style ={{
                    
                }}>
                <Button
                    style ={{
                        borderRadius: hp(5),
                        width: hp(20),
                        height: hp(15),
                        marginLeft: wp(65),
                        color : "pink"
                    }}>
                        Checkout
                </Button>
            </View>


        </View>
            

        


    )
    
}