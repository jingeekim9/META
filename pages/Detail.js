import React, { useState } from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
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
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            {/* Top Bar */}
            {/* Icon Bar */}
            <View
                style = {{
                    height: hp(7),
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            width: hp(2.5),
                            height: hp(2.5),
                            marginLeft: hp(2)
                        }}
                        source={require('../assets/left-arrow.png')}
                    />
                    <Text
                        style = {{
                            fontSize: hp(3),
                            paddingLeft: hp(1),
                            fontWeight: 'bold'
                        }}>
                        Company Name
                    </Text>
            </View>
            <View
                style={{
                    flex: 1
                }}
            >
                <ScrollView>
                {/* Big Image */}
                    <View>
                        <Image
                            style={{
                                width: wp(100),
                                height: hp(40),
                                justifyContent: "center",
                                alignItems: "center"
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
                </ScrollView>
            </View>
            {/* Bottom thingy */}
            <View
                    style ={{
                        borderTopColor: '#F1EFEF',
                        borderTopWidth: 2,
                        padding: hp(2),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: "space-between"
                    }}>
                    <Button
                        style ={{
                            borderRadius: hp(5),
                            width: hp(20),
                            color : "pink"
                        }}>
                            Checkout
                    </Button>
                    <Text>
                        Total Price: $45
                    </Text>
                </View>

        </SafeAreaView>
            

        


    )
    
}