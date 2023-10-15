import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';

export default function Home() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const getData = async () => {
            var email = await AsyncStorage.getItem('email');
            var name = await AsyncStorage.getItem('name');

            setEmail(email);
            setName(name);
        }
        getData();
    }, [])

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
                TITLE
            </Text>
            <ScrollView>
                <View>
                    <Image
                        style={{
                            height: hp(45),
                            width: "100%"
                        }}
                        source={{
                            uri: "https://uploads-ssl.webflow.com/60a3629e04f26d12caff56df/6263dbc988a34cd7a90e99b0_%EB%AC%B4%EC%8B%A0%EC%82%AC%20%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C%20%EA%B7%B8%EB%A6%B0%EB%9D%BC%EC%9D%B8%20%EB%A1%A0%EC%B9%AD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg"
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: hp(3),
                            justifyContent: 'space-around'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#f2ead5',
                                padding: hp(1),
                                borderRadius: hp(2)
                            }}
                        >
                            <Icon
                                size={hp(5)}
                                name='alarm'
                                type='ionicon'
                                color='black'
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: '#f2ead5',
                                padding: hp(1),
                                borderRadius: hp(2)
                            }}
                        >
                            <Icon
                                size={hp(5)}
                                name='cart'
                                type='ionicon'
                                color='black'
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: '#f2ead5',
                                padding: hp(1),
                                borderRadius: hp(2)
                            }}
                        >
                            <Icon
                                size={hp(5)}
                                name='bookmark'
                                type='ionicon'
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: '#f2ead5',
                                padding: hp(1),
                                borderRadius: hp(2)
                            }}
                        >
                            <Icon
                                size={hp(5)}
                                name='clipboard'
                                type='ionicon'
                            />
                        </View>
                    </View>

                    {/* ********************************** */}

                    <Text
                        style={{
                            fontSize: hp(3),
                            fontWeight: "500",
                            marginTop: hp(4),
                            marginLeft: hp(1)
                        }}
                    >
                        MAHAGRID 30% Off
                    </Text>
                    <View
                        style={{
                            height: hp(23.5)
                        }}
                    >
                        <ScrollView
                            horizontal={true}
                        >
                            <View>
                                <Image
                                    style={{
                                        height: hp(18),
                                        width: hp(18),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://www.muji.com/wp-content/uploads/sites/12/2021/02/026.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    beige hoodie thing
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(18),
                                        width: hp(18),
                                        marginLeft: hp(1)
                                    }}
                                    source={{
                                        uri: "https://simage.mujikorea.net/goods/31/15/30/91/BF197A3A_COL_851_400.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    green shirt thing
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(18),
                                        width: hp(18),
                                        marginLeft: hp(1)
                                    }}
                                    source={{
                                        uri: "https://simage.mujikorea.net/goods/31/15/30/90/BF196A3A_COL_25_400.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    cream shirt thing
                                </Text>
                            </View>
                        </ScrollView>
                    </View>

                    {/* ********************************** */}

                    <Text
                        style={{
                            fontSize: hp(3),
                            fontWeight: "500",
                            marginTop: hp(4),
                            marginLeft: hp(1),
                            marginBottom: hp(3)
                        }}
                    >
                        Trending Now
                    </Text>
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "space-around",
                            height: hp(35)

                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: hp(2)
                            }}
                        >
                            VARISTY JACKETS
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#f0f0f2",
                                alignSelf: "center",
                                width: "92%",
                                height: hp(0.1)
                            }}
                        ></View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: hp(2)
                            }}
                        >
                            SWEATER SEASON
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#f0f0f2",
                                alignSelf: "center",
                                width: "92%",
                                height: hp(0.1)
                            }}
                        ></View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: hp(2)
                            }}
                        >
                            LEATHER JACKETS
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#f0f0f2",
                                alignSelf: "center",
                                width: "92%",
                                height: hp(0.1)
                            }}
                        ></View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: hp(2)
                            }}
                        >
                            SHOULDER BAGS
                        </Text>
                    </View>

                    {/* ********************************** */}

                    <Text
                        style={{
                            fontSize: hp(3),
                            fontWeight: "500",
                            marginTop: hp(4),
                            marginLeft: hp(1),
                            marginBottom: hp(2.4)
                        }}
                    >
                        Popular Brands of Seoul
                    </Text>
                    <View
                        style={{
                            height: hp(60)
                        }}
                    >
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
                                        width: hp(40),
                                        marginLeft: hp(2)
                                    }}
                                    source={{
                                        uri: "https://image.musinsa.com/mfile_s01/2021/04/07/3fb5ed13afe8714a7e5d13ee506003dd143755.jpg"
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
                                    VOLANTE
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontSize: hp(1.8)
                                    }}
                                >
                                    FW23 easy & comfy styles
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(40),
                                        marginLeft: hp(1)
                                    }}
                                    source={{
                                        uri: "https://image.musinsa.com/mfile_s01/2022/02/23/8e2171ee6437c653bdcbcd807ccd8c72143902.jpg"
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
                                    MUNIER
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontSize: hp(1.8)
                                    }}
                                >
                                    FW23 collection Hype & Street
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        height: hp(50),
                                        width: hp(40),
                                        marginLeft: hp(1)
                                    }}
                                    source={{
                                        uri: "https://www.ktnews.com/news/photo/202102/118136_75566_3350.jpg"
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
                                    GLW
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: hp(2),
                                        marginTop: hp(1),
                                        fontSize: hp(1.8)
                                    }}
                                >
                                    New brand release — VOLTEX collection
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}