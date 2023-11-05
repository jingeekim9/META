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

}
export default function ViewProducts() {
    const [products, setProducts] = useState([
        {
            url: "https://m.media-amazon.com/images/I/61fOR8yqOmL._AC_SX679._SX._UX._SY._UY_.jpg",
            name: "INDIE",
            company: "xcvb",
            price: 9584
        },
        {
            url: "https://m.media-amazon.com/images/I/61HunMUy6BL._AC_SX679._SX._UX._SY._UY_.jpg",
            name: "FUNK",
            company: "hjkl",
            price: 2342
        },
        {
            url: "https://m.media-amazon.com/images/I/714XSiO1mtL._AC_SX679._SX._UX._SY._UY_.jpg",
            name: "POP",
            company: "ghjk",
            price: 4859
        },
        {
            url: "https://m.media-amazon.com/images/I/51znawVkEIL._AC_SX679._SX._UX._SY._UY_.jpg",
            name: "CLASSIC",
            company: "asdfg",
            price: 3029
        },
        {
            url: "https://m.media-amazon.com/images/I/71QNbYasFjL._AC_SX679._SX._UX._SY._UY_.jpg",
            name: "MOZART",
            company: "tyuio",
            price: 23423
        },
        {
            url: "https://m.media-amazon.com/images/I/61JOHamx0jL._AC_UX679_.jpg",
            name: "VOLTAIRE",
            company: "qwerty",
            price: 1132
        },
    ]);
    const [showNum, setShowNum] = useState(2);

    function chunk (arr, len) {
        var chunks = [],
            i = 0,
            n = arr.length;
      
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
      
        return chunks;
    }


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
                MY PRODUCTS
            </Text>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <View>
                        {
                            chunk(products, 2).slice(0, showNum).map((el, ind) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: hp(4),
                                        justifyContent: 'space-around'
                                    }}
                                >
                                    {
                                        el.map((el2, ind2) => (
                                            <View>
                                                <Image
                                                    style={{
                                                        height: hp(20),
                                                        width: hp(20),
                                                        marginBottom: hp(1),
                                                        marginLeft: hp(1)
                                                    }}
                                                    source={{
                                                        uri: el2["url"]
                                                    }}
                                                />
                                                <Text
                                                    style={{
                                                        fontWeight: "600",
                                                        marginLeft: hp(2),
                                                    }}
                                                >
                                                    {el2["name"]}
                                                </Text>
                                                <Text
                                                    style={{
                                                        marginLeft: hp(2)
                                                    }}
                                                >
                                                    {el2["company"]}
                                                </Text>
                                                <Text
                                                    style={{
                                                        marginLeft: hp(2),
                                                        marginTop: hp(1),
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    ${el2["price"]}
                                                </Text>
                                                
                                            </View>
                                        ))
                                    }
                                </View>  
                            ))
                        }
                    </View>

                    <Text
                        style={{
                            alignSelf: "center",
                            textAlign: "center",

                            width: "92%",
                            height: hp(5),

                            marginTop: hp(3),
                            paddingTop: hp(1),

                            fontSize: hp(2),
                            borderColor: "black",
                            borderRadius: hp(1),
                            borderWidth: hp(0.1)
                        }}
                        onPress={() => {
                            setShowNum(showNum + 1)
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
