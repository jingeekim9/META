import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Icon } from '@rneui/themed';
import Toast from "react-native-toast-message";
import Products from "./Products";

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
const db = getFirestore(app);

export default function Home({ props, navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [companies, setCompanies] = useState([])
    const [showNum, setShowNum] = useState(2)
    const [recentProducts, setRecentProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            var email = await AsyncStorage.getItem('email');
            var name = await AsyncStorage.getItem('name');

            setEmail(email);
            setName(name);
        }
        getData();
    }, [])

    useEffect(() => {
        const getDatabase = async () => {
            const querySnapshot = await getDocs(collection(db, "Users"));
            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                if (data["type"] != "company") {
                    return;
                }
                tempArray.push([data["name"], data["companyLogo"]])
            });
            setCompanies(tempArray)
        }
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "Products"));
            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                tempArray.push([data["dateAdded"]["seconds"], data["productName"], data["productImage"], doc.id])
            });
            var sortedArray = tempArray.sort((a, b) => {
                return b[0] - a[0];
            });
            setRecentProducts(sortedArray)
        }
        const getTrendingProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "Checkout"));
            var tempArray = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                tempArray.push([data['productId']])
            });
            const occurrences = tempArray.reduce(function (acc, curr) {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});

            // Create items array
            var items = Object.keys(occurrences).map(function (key) {
                return [key, occurrences[key]];
            });

            // Sort the array based on the second element
            items.sort(function (first, second) {
                return second[1] - first[1];
            });
            var newArray = [];
            for (var i = 0; i < items.length; i++) {
                const docRef = doc(db, "Products", items[i][0]);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    var data = docSnap.data();
                    newArray.push([data["dateAdded"]["seconds"], data["productName"], data["productImage"], doc.id])
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
            setTrendingProducts(newArray)
        }

        getDatabase();
        getProducts();
        getTrendingProducts();
    }, [])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: "white"
            }}
        >
            <View
                style={{
                    marginTop: hp(7),
                    marginBottom: hp(2),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: wp(100),
                }}
            >
                <View
                    style={{
                        width: hp(8),
                        marginLeft: hp(2)
                    }}
                >

                </View>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: hp(3),
                        letterSpacing: hp(0.2)
                    }}
                >
                    UPPURPLE
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        type="ionicon"
                        name="person-circle-outline"
                        size={hp(4)}
                        onPress={() => {
                            navigation.navigate("Profile")
                        }}
                    />
                    <Icon
                        type="ionicon"
                        name="cart-outline"
                        size={hp(4)}
                        style={{
                            marginRight: hp(2)
                        }}
                        onPress={() => {
                            navigation.navigate("Cart")
                        }}
                    />
                </View>
            </View>
            <ScrollView>
                <View
                    style={{
                        width: wp(100)
                    }}
                >
                    <Image
                        style={{
                            height: hp(45),
                            width: "100%"
                        }}
                        source={require('../assets/main.jpg')}
                    />
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: hp(5)
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#9c34f4',
                                paddingVertical: hp(2),
                                paddingHorizontal: hp(5),
                                borderRadius: hp(2)
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: hp(2),
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >
                                METAVERSE
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: hp(3),
                            justifyContent: 'space-around'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Products', {
                                    otherParam: "T-shirt",
                                    display: "https://assets.hermes.com/is/image/hermesproduct/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_g.jpg",
                                    check: 1
                                });
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#f2ead5',
                                    borderRadius: hp(2),
                                    width: hp(7),
                                    height: hp(7),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >

                                <Image
                                    source={require('../assets/shirt.png')}
                                    style={{
                                        width: hp(5),
                                        height: hp(5)
                                    }}
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Products', {
                                    otherParam: "Pants",
                                    display: "https://media.wired.com/photos/611c5312798f0e2c853b702f/4:3/w_1375,h_1031,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg",
                                    check: 1
                                });
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#f2ead5',
                                    borderRadius: hp(2),
                                    width: hp(7),
                                    height: hp(7),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >

                                <Image
                                    source={require('../assets/pants.png')}
                                    style={{
                                        width: hp(5),
                                        height: hp(5)
                                    }}
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Products', {
                                    otherParam: "Outerwear",
                                    display: "https://buffalojackson.com/cdn/shop/products/thompson-leather-moto-jacket-black-4_029f49bf-085e-4ca5-8cef-faef56e4ec35_800x.jpg?v=1642952150",
                                    check: 1
                                });
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#f2ead5',
                                    borderRadius: hp(2),
                                    width: hp(7),
                                    height: hp(7),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >

                                <Image
                                    source={require('../assets/jacket.png')}
                                    style={{
                                        width: hp(5),
                                        height: hp(5)
                                    }}
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Products', {
                                    otherParam: "Accessory",
                                    display: "https://css.brilliantearth.com/static/img/gateway/earrings/ir350/Earrings_Gateway_Review_Image2_Desktop.jpg",
                                    check: 1
                                });
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#f2ead5',
                                    borderRadius: hp(2),
                                    width: hp(7),
                                    height: hp(7),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >

                                <Image
                                    source={require('../assets/shoe.png')}
                                    style={{
                                        width: hp(5),
                                        height: hp(5)
                                    }}
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* ********************************** */}

                    <Text
                        style={{
                            fontSize: hp(3),
                            fontWeight: "500",
                            marginTop: hp(4),
                            marginLeft: hp(1),
                            marginBottom: hp(2)
                        }}
                    >
                        Companies
                    </Text>
                    <View>
                        {
                            companies.slice(0, showNum).map((el, ind) => (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: "row"
                                    }}
                                    onPress={() => {
                                        navigation.navigate('Products', {
                                            otherParam: el[0],
                                            display: el[1]
                                        });
                                    }}
                                    key={ind}
                                >
                                    <Image
                                        style={{
                                            height: hp(5),
                                            width: hp(5),
                                            marginBottom: hp(1.5),
                                            marginLeft: hp(1),
                                            borderRadius: hp(2)
                                        }}
                                        source={{
                                            uri: el[1]
                                        }}
                                        onPress={() => {
                                            navigation.navigate('Products', {
                                                otherParam: el[0],
                                                display: el[1],
                                                check: 0
                                            });
                                        }}
                                    />
                                    <Text
                                        style={{
                                            marginLeft: hp(2),
                                            fontWeight: "500",
                                            marginTop: hp(1.3),
                                            fontSize: hp(2),
                                            letterSpacing: hp(0.1)
                                        }}
                                    >
                                        {el[0]}
                                    </Text>

                                </TouchableOpacity>
                            ))
                        }
                    </View>


                    {
                        companies.length == 0 ?
                            <View
                                style={{
                                    alignItems: "center"
                                }}>
                                <Text
                                    style={{
                                        fontSize: hp(2),
                                        color: 'gray'
                                    }}>
                                    No Companies to show
                                </Text>
                            </View>

                            :


                            <Button
                                title="Explore More ▼"
                                titleStyle={{
                                    color: "black"
                                }}
                                containerStyle={{
                                    marginBottom: hp(5),
                                    marginTop: hp(1.5)
                                }}
                                buttonStyle={{
                                    backgroundColor: 'white',
                                    borderColor: "black",
                                    borderRadius: hp(1),
                                    borderWidth: hp(0.1),
                                    height: hp(5.6),
                                    width: "92%",
                                    alignSelf: "center",
                                    textAlign: "center"
                                }}
                                onPress={() => {
                                    if (showNum == companies.length) {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'No more companies to show.'
                                        });
                                        return;
                                    }

                                    setShowNum(showNum + Math.min(3, companies.length - showNum))
                                }}
                            />
                    }


                    <Text
                        style={{
                            fontSize: hp(3),
                            fontWeight: "500",
                            marginTop: hp(4),
                            marginLeft: hp(1),
                            marginBottom: hp(1)
                        }}
                    >
                        Recently Added
                    </Text>
                    {
                        companies.length == 0 ?
                            <View
                                style={{
                                    alignItems: "center"
                                }}>
                                <Text
                                    style={{
                                        fontSize: hp(2),
                                        color: 'gray'
                                    }}>
                                    None Recently Added
                                </Text>
                            </View>
                            :

                            <View
                                style={{
                                    height: hp(23.5)
                                }}
                            >
                                <ScrollView
                                    horizontal={true}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row"
                                        }}
                                    >
                                        {
                                            recentProducts.slice(0, 5).map((el, ind) => (
                                                <View
                                                    style={{
                                                        justifyContent: "space-around",
                                                    }}
                                                    key={ind}
                                                >
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            navigation.navigate('Detail', {
                                                                otherParam: el[3]
                                                            });
                                                        }}
                                                    >
                                                        <Image
                                                            style={{
                                                                height: hp(18),
                                                                width: hp(18),
                                                                marginLeft: hp(2)
                                                            }}
                                                            source={{
                                                                uri: el[2]
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text
                                                        style={{
                                                            alignSelf: "center",
                                                            fontWeight: "500"
                                                        }}
                                                        onPress={() => {
                                                            navigation.navigate('Detail', {
                                                                otherParam: el[3]
                                                            });
                                                        }}
                                                    >
                                                        {el[1]}
                                                    </Text>

                                                </View>
                                            ))
                                        }
                                    </View>
                                </ScrollView>
                            </View>
                    }
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
                    {
                        companies.length == 0 ?
                            <View
                                style={{
                                    alignItems: "center"
                                }}>
                                <Text
                                    style={{
                                        fontSize: hp(2),
                                        color: 'gray'
                                    }}>
                                    None Recently Added
                                </Text>
                            </View>
                            :
                            <View
                                style={{
                                    height: hp(23.5),
                                    marginBottom: hp(10)
                                }}
                            >
                                <ScrollView
                                    horizontal={true}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row"
                                        }}
                                    >
                                        {
                                            trendingProducts.slice(0, 5).map((el, ind) => (
                                                <View
                                                    style={{
                                                        justifyContent: "space-around",
                                                    }}
                                                    key={ind}
                                                >
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            navigation.navigate('Detail', {
                                                                otherParam: el[3]
                                                            });
                                                        }}
                                                    >
                                                        <Image
                                                            style={{
                                                                height: hp(18),
                                                                width: hp(18),
                                                                marginLeft: hp(2)
                                                            }}
                                                            source={{
                                                                uri: el[2]
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text
                                                        style={{
                                                            alignSelf: "center",
                                                            fontWeight: "500"
                                                        }}
                                                        onPress={() => {
                                                            navigation.navigate('Detail', {
                                                                otherParam: el[3]
                                                            });
                                                        }}
                                                    >
                                                        {el[1]}
                                                    </Text>

                                                </View>
                                            ))
                                        }
                                    </View>
                                </ScrollView>
                            </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}