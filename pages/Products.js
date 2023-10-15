import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
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
                PRODUCTS
            </Text>
            <ScrollView>
                <View
                    style={{
                        backgroundColor: "black",
                        alignSelf: "center",
                        width: "100%",
                        height: hp(5)
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            alignSelf: "center",
                            marginTop: hp(1.5),
                            fontWeight: "700"
                        }}
                    >
                        FREE SHIPPING ON ALL ORDERS +$150
                    </Text>
                </View>
                <Image
                    style={{
                        height: hp(45),
                        width: "100%"
                    }}
                    source={{
                        uri: "https://superfuture.com/wp-content/uploads/2021/12/musinsa-standard-seoul-07.png"
                    }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: hp(3),
                        fontWeight: "600",
                        marginTop: hp(4),
                        marginBottom: hp(2)
                    }}
                >
                    T-Shirt
                </Text>
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            style={{
                                height: hp(20),
                                width: hp(20),
                                marginBottom: hp(1),
                                marginLeft: hp(1)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/61fOR8yqOmL._AC_SX679._SX._UX._SY._UY_.jpg"
                            }}
                        />
                        <Image
                            style={{
                                height: hp(20),
                                width: hp(20),
                                marginLeft: hp(3)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/61HunMUy6BL._AC_SX679._SX._UX._SY._UY_.jpg"
                            }}
                        />
                    </View>


                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: hp(5)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(2)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                INDIE
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                xcvb
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $9584
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(16)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                FUNK
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                hjkl
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $2342
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <Image
                            style={{
                                height: hp(19),
                                width: hp(20),
                                marginBottom: hp(1),
                                marginLeft: hp(1)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/714XSiO1mtL._AC_SX679._SX._UX._SY._UY_.jpg"
                            }}
                        />
                        <Image
                            style={{
                                height: hp(19),
                                width: hp(20),
                                marginLeft: hp(3)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/51znawVkEIL._AC_SX679._SX._UX._SY._UY_.jpg"
                            }}
                        />
                    </View>


                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: hp(5)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(2)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                POP
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                ghjk
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $4859
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(16)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                CLASSIC
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                asdfg
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $3029
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            style={{
                                height: hp(19),
                                width: hp(20),
                                marginBottom: hp(1),
                                marginLeft: hp(1)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/71QNbYasFjL._AC_SX679._SX._UX._SY._UY_.jpg"
                            }}
                        />
                        <Image
                            style={{
                                height: hp(19),
                                width: hp(20),
                                marginLeft: hp(3)
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/61JOHamx0jL._AC_UX679_.jpg"
                            }}
                        />
                    </View>


                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(2)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                MOZART
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                tyuio
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $23423
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: hp(15)
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    marginLeft: hp(2),
                                }}
                            >
                                VOLTAIRE
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2)
                                }}
                            >
                                qwerty
                            </Text>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    marginTop: hp(1),
                                    fontWeight: "500",
                                }}
                            >
                                $1132
                            </Text>
                        </View>
                    </View>
                    <Text
                        style={{
                            marginTop:hp(3),
                            paddingTop:hp(1),
                            fontSize:hp(2),
                            borderColor:"black",
                            borderRadius:hp(1),
                            borderWidth:hp(0.1),
                            width:"92%",
                            height:hp(5),
                            alignSelf:"center",
                            textAlign:"center"
                        }}
                    >
                        Explore More ▼
                    </Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </ScrollView>
        </View>
    );
}