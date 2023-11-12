import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,StyleProp } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CompanyD() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: "white"
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize: hp(3),
                    letterSpacing: hp(0.2),
                    marginTop: hp(7),
                    marginBottom: hp(2)
                }}
            >
                CompanyA
            </Text>
            <ScrollView
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={hp(42)}
                            snapToAlignment={"center"}
                        >
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(25),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://assets.adidas.com/images/w_600,f_auto,q_auto/bba16beb59224698a80b0ed34e2ed376_9366/Enjoy_Summer_Cargo_Pants_Beige_IT8191_HM1.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontWeight: "500",
                                        fontSize: hp(2.5)
                                    }}
                                >
                                    Pants
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(25),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://www.prada.com/content/dam/pradanux/e-commerce/2023/03/03/Linea_Rossa/snodo_mix/mosaic_1/Card_2_MB.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontWeight: "500",
                                        fontSize: hp(2.5)
                                    }}
                                >
                                    Pants
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(25),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://www.prada.com/content/dam/pradanux/e-commerce/2023/03/03/Linea_Rossa/snodo_mix/mosaic_1/Card_2_MB.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontWeight: "500",
                                        fontSize: hp(2.5)
                                    }}
                                >
                                    Pants
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(25),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://www.prada.com/content/dam/pradanux/e-commerce/2023/03/03/Linea_Rossa/snodo_mix/mosaic_1/Card_2_MB.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontWeight: "500",
                                        fontSize: hp(2.5)
                                    }}
                                >
                                    Pants
                                </Text>
                            </View>
                        </ScrollView>
            </View>
    );
}