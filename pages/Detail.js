import React, { useState } from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, Button, color } from '@rneui/base';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import { Image } from "react-native";

export default function Detail(props) {
    const [heartPressed, setHeartPress] = useState(false);
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
                            style={{
                                flexDirection: "row"
                            }}>
                            <Text
                                style ={{
                                    paddingTop: hp(1.5),
                                    paddingBottom: hp(1.5),
                                    paddingLeft: hp(2),
                                }}>
                                Company Name
                            </Text>
                            <Icon
                                style ={{
                                    paddingTop: hp(0.5),
                                    paddingLeft: wp(60)
                                }}
                                type = "ionicon"
                                name = "share-outline">

                            </Icon>
                        </View>
                        
                        <View
                            style={{
                                borderBottomColor: "gray",
                                width: "100%",
                                borderBottomWidth: 1
                            }}>

                        </View>
                        
                        <View
                            style= {{
                                backgroundColor: "white",

                            }}
                            containerStyle = {{
                                paddingLeft: hp(5)
                            }}>
                            <View
                                style = {{
                                    height: hp(5),
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style = {{
                                        paddingLeft: hp(4),
                                        marginTop: hp(1),
                                        fontSize: hp(4),
                                    }}>
                                    tshirt
                                </Text>
                                
                            </View>
                                <Text
                                    style = {{
                                        marginLeft: hp(4),
                                        marginTop: hp(2),
                                        fontSize: hp(5),
                                        fontWeight: "bold"
                                    }}>
                                    20$
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
                            width: hp(35)
                        }}
                        buttonStyle ={{
                            backgroundColor: "#FA6DE2",
                            borderRadius: hp(10),
                            height: hp(7)
                        }}
                    >
                        
                            Checkout
                    </Button>
                    <View>
                        <Text>
                            Total Price: $45
                        </Text>

                        <Icon
                            name = {heartPressed ? "heart" : "heart-outline"}
                            type = "ionicon"
                            color = {heartPressed ? "red" : "black"}
                            onPress = {() => {
                                setHeartPress(!heartPressed)
                            }}
                            >

                                
                        </Icon>
                    </View>
                    
                </View>

        </SafeAreaView>
            

        


    )
    
}