import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Platform, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, Button, color } from '@rneui/base';
import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, query, where, getDocs, getDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, AirbnbRating } from '@rneui/themed';
import { Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from "react-native-toast-message";

const firebaseConfig = {
    apiKey: "AIzaSyC55iBDd_uZhjnoxzVeNmnNg8bTDEXD2Fo",
    authDomain: "meta-fc205.firebaseapp.com",
    projectId: "meta-fc205",
    storageBucket: "meta-fc205.appspot.com",
    messagingSenderId: "313671883891",
    appId: "1:313671883891:web:3ecf94acf648ee9ba85e06",
    measurementId: "G-953P5N046G"
};

// Initialize Firebase in general
const app = initializeApp(firebaseConfig);
// Initialize Firebase Firestore
const db = getFirestore(app);

export default function Detail(props) {
    const { otherParam } = props.route.params;
    const [heartPressed, setHeartPress] = useState(false);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const [productImage, setproductImage] = useState(null)
    const [productName, setproductName] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [cartLoading, setCartLoading] = useState(false);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const [checkoutPressed, setcheckoutPressed] = useState(false);
    const [options1Pressed, setoptions1Pressed] = useState(false);
    const [options2Pressed, setoptions2Pressed] = useState(false);
    const [color, setColor] = useState([]);
    const [colorOpen, setColorOpen] = useState(false);
    const [colorOptions, setColorOptions] = useState([
        { label: "Red", value: "red" },
        { label: "Black", value: "black" }
    ])
    const [size, setSize] = useState("");
    const [sizeOpen, setSizeOpen] = useState(false);
    const [sizeOptions, setSizeOptions] = useState([
        { label: "L", value: "L" },
        { label: "M", value: "M" }
    ])
    const [reviews, setReviews] = useState([])
    const [avgReview, setAvgReview] = useState(0);

    function addDays(days) {
        var result = new Date();
        result.setDate(result.getDate() + days);
        return result;
      }

    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "Products", otherParam);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                var data = docSnap.data();

                var colorArray = []
                var sizeArray = []

                for (var i = 0; i < data['color'].length; i++) {
                    var colorDict = {
                        label: data["color"][i],
                        value: data["color"][i]
                    }
                    colorArray.push(colorDict)
                }
                setColorOptions(colorArray)

                for (var i = 0; i < data['size'].length; i++) {
                    var sizeDict = {
                        label: data["size"][i],
                        value: data["size"][i]
                    }
                    sizeArray.push(sizeDict)
                }
                setSizeOptions(sizeArray)


                var category = data["category"];
                setCategory(category);

                var price = parseInt(data["price"]);
                let text = price.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });
                setPrice(text);

                var description = data["description"];
                setDescription(description);

                var productImage = data["productImage"];
                setproductImage(productImage);

                var productName = data["productName"];
                setproductName(productName);

                var companyName = data["companyName"]
                setcompanyName(companyName);


            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        const getReviews = async() => {
            const q = query(collection(db, "Reviews"), where("productId", "==", otherParam));
            const querySnapshot = await getDocs(q);
            var tempArray = [];
            var avgReview = 0;
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                tempArray.push(data);
                avgReview += data['rating']
            })
            if(tempArray.length > 0)
            {
                avgReview = avgReview/tempArray.length
                setAvgReview(avgReview)
            }
            setReviews(tempArray)
        }

        getDetails();
        getReviews();
    }, [])

    const addToCart = async() => {
        if(color == "")
        {
            Toast.show({
                type: 'error',
                text1: "Please choose a color."
            });
            return;
        }
        else if(size == "")
        {
            Toast.show({
                type: 'error',
                text1: "Please choose a size."
            });
            return;
        }
        setCartLoading(true)
        var tempCart = await AsyncStorage.getItem("cart");
        if (tempCart) {
            tempCart = JSON.parse(tempCart);
            tempCart.push({
                productName: productName,
                price: price,
                category: category,
                size: size,
                color: color,
                companyName: companyName,
                productImage: productImage,
                productId: otherParam
            });
            await AsyncStorage.setItem("cart", JSON.stringify(tempCart));
        }
        else {
            var tempCart = []
            tempCart.push({
                productName: productName,
                price: price,
                category: category,
                size: size,
                color: color,
                companyName: companyName,
                productImage: productImage,
                productId: otherParam
            });
            await AsyncStorage.setItem("cart", JSON.stringify(tempCart));
        }

        setCartLoading(false);
        setcheckoutPressed(false);
        setColor("");
        setSize("");
        Toast.show({
            type: 'success',
            text1: "Successfully added to cart."
        });

    }

    const checkout = async() => {
        if(color == "")
        {
            Toast.show({
                type: 'error',
                text1: "Please choose a color."
            });
            return;
        }
        else if(size == "")
        {
            Toast.show({
                type: 'error',
                text1: "Please choose a size."
            });
            return;
        }
        setCheckoutLoading(true);

        var email = await AsyncStorage.getItem('email');

        const docRef = await addDoc(collection(db, "Checkout"), {
            productName: productName,
            price: price,
            category: category,
            size: size,
            color: color,
            companyName: companyName,
            productImage: productImage,
            email: email,
            productId: otherParam
        });

        setCheckoutLoading(false);
        setcheckoutPressed(false);
        setColor("");
        setSize("");
        Toast.show({
            type: 'success',
            text1: "Successfully added to checkout."
        });
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            {/* Top Bar */}
            {/* Icon Bar */}
            <View
                style={{
                    height: hp(7),
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <Image
                        style={{
                            width: hp(2.5),
                            height: hp(2.5),
                            marginLeft: hp(2)
                        }}
                        source={require('../assets/left-arrow.png')}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: hp(3),
                        paddingLeft: hp(1),
                        fontWeight: 'bold'
                    }}>
                    {companyName}
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
                        {
                            productImage &&
                            <Image
                                style={{
                                    width: wp(100),
                                    height: hp(50),
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                source={{
                                    uri: productImage
                                }}
                                resizeMode="cover"
                            />
                        }
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                paddingVertical: hp(2),
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    marginLeft: hp(2),
                                    fontSize: hp(1.8),
                                    color: '#ababab',
                                    fontWeight: 'bold'
                                }}>
                                {category}
                            </Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: "white",
                                paddingHorizontal: hp(2),
                                paddingVertical: hp(1)
                            }}>
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: hp(2.5),
                                        fontWeight: 'bold'
                                    }}>
                                    {productName}
                                </Text>

                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginVertical: hp(2)
                                }}
                            >
                                <AirbnbRating
                                    count={5}
                                    defaultRating={avgReview}
                                    size={hp(2)}
                                    showRating={false}
                                />
                                <Text
                                    style={{
                                        fontWeight: '700',
                                        color: '#057cfc',
                                        marginLeft: hp(1)
                                    }}
                                >
                                    후기 {reviews.length}개
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: hp(2.8),
                                    fontWeight: '500'
                                }}>
                                {price}

                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: hp(2),
                                    borderTopWidth: 1,
                                    borderTopColor: '#FBF6EE',
                                    paddingVertical: hp(1)
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: hp(1.5),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Delivery Info
                                </Text>
                                <Text
                                    style={{
                                        fontSize: hp(1.5)
                                    }}
                                >
                                    Normal Delivery
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: hp(1),
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#FBF6EE',
                                    paddingVertical: hp(1)
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: hp(1.5),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Expected Delivery Days
                                </Text>
                                <Text
                                    style={{
                                        fontSize: hp(1.5)
                                    }}
                                >
                                    3 Days
                                </Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: '#fff6f0',
                                    padding: hp(1),
                                    borderRadius: hp(1),
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#e65d33',
                                        fontSize: hp(1.5),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Arrival Date
                                </Text>
                                <Text
                                    style={{
                                        fontSize: hp(1.5),
                                        marginLeft: hp(1),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {addDays(3).toISOString().slice(0,10)}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {
                        reviews.length == 0 ?
                        <Text
                            style={{
                                textAlign: 'center',
                                marginVertical: hp(2),
                                color: '#9BA4B5'
                            }}
                        >
                            No reviews
                        </Text>
                        :
                        <View
                            style={{
                                marginTop: hp(2)
                            }}
                        >
                            {
                                reviews.map((l, i) => (
                                    <View
                                        key={i}
                                        style={{
                                            marginHorizontal: hp(2),
                                            backgroundColor: '#E5E5E5',
                                            paddingHorizontal: hp(2),
                                            marginBottom: hp(2),
                                            borderRadius: hp(2),
                                            paddingBottom: hp(2)
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginVertical: hp(2),
                                                flexDirection: 'row',
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <Text style={{ fontSize: hp(2), fontWeight: 'bold', width: '80%' }}>
                                                {l.user}
                                            </Text>
                                            <View
                                                style={{
                                                    marginLeft: 'auto',
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Icon
                                                    type="ionicon"
                                                    name="star"
                                                    color="rgba(0,0,0,0.85)"
                                                    size={hp(2)}
                                                />
                                                <Text
                                                    style={{
                                                        color: "rgba(0,0,0,0.85)",
                                                        fontFamily: 'Helvetica',
                                                        fontSize: hp(2),
                                                        fontWeight: 'bold',
                                                        marginLeft: hp(1)
                                                    }}
                                                >
                                                    {l.rating}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginBottom: hp(2) }}>
                                            <Text style={{ fontSize: hp(1.5) }}>
                                                {l.review}
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    }
                </ScrollView>

                {
                    checkoutPressed ?
                        <View>

                            {/* Bottom thingy */}
                            <View
                                style={{
                                    width: wp(100),
                                    flexDirection: "column",
                                    padding: hp(2),
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: hp(2)
                                    }}
                                >
                                    <Icon
                                        type="ionicon"
                                        name="close-outline"
                                        size={hp(4)}
                                        onPress={() => {
                                            setcheckoutPressed(!checkoutPressed);
                                            setSize("");
                                            setColor("");
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: hp(2.5),
                                            fontWeight: 'bold',
                                            marginLeft: hp(2)
                                        }}
                                    >
                                        Product Name
                                    </Text>
                                </View>
                                <DropDownPicker
                                    open={colorOpen}
                                    value={color}
                                    items={colorOptions}
                                    setOpen={setColorOpen}
                                    setValue={setColor}
                                    setItems={setColorOptions}
                                    placeholder="Color"
                                    containerStyle={{
                                        marginBottom: hp(2)
                                    }}
                                    dropDownDirection="TOP"
                                />
                                <DropDownPicker
                                    open={sizeOpen}
                                    value={size}
                                    items={sizeOptions}
                                    setOpen={setSizeOpen}
                                    setValue={setSize}
                                    setItems={setSizeOptions}
                                    placeholder="Size"
                                    containerStyle={{}}
                                    dropDownDirection="TOP"
                                />
                                <View
                                    style={{
                                        marginTop: hp(2)
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: hp(2.3),
                                            textAlign: 'right'
                                        }}
                                    >
                                        Total Price: {" "}
                                        {
                                            (size && color) ?
                                                <Text style={{ fontWeight: 'bold' }}>{price}</Text>
                                                :
                                                <Text style={{ fontWeight: 'bold' }}>₩0</Text>
                                        }

                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    borderTopColor: '#F1EFEF',
                                    borderTopWidth: 2,
                                    padding: hp(2),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <Button
                                    style={{
                                        width: wp(45),
                                    }}
                                    buttonStyle={{
                                        backgroundColor: "#3559E0",
                                        borderRadius: hp(1),
                                        height: hp(7)
                                    }}
                                    titleStyle={{
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}
                                    onPress={() => {
                                        addToCart();
                                    }}
                                    loading={cartLoading}
                                >
                                    Add to Cart
                                    <Icon 
                                        type="ionicon"
                                        name="cart-outline"
                                        color={'white'}
                                        containerStyle={{
                                            marginLeft: hp(1)
                                        }}
                                    />
                                </Button>
                                <Button
                                    style={{
                                        width: wp(45),
                                    }}
                                    buttonStyle={{
                                        backgroundColor: "#1A1A1A",
                                        borderRadius: hp(1),
                                        height: hp(7)
                                    }}
                                    titleStyle={{
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}
                                    onPress={() => {
                                        checkout();
                                    }}
                                    loading={checkoutLoading}
                                >

                                    Checkout
                                    <Icon 
                                        type="ionicon"
                                        name="checkbox-outline"
                                        color={'white'}
                                        containerStyle={{
                                            marginLeft: hp(1)
                                        }}
                                    />
                                </Button>
                            </View>


                        </View>


                        :

                        <View
                            style={{
                                borderTopColor: '#F1EFEF',
                                borderTopWidth: 2,
                                padding: hp(2),
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: "space-around"
                            }}>

                            <Button
                                style={{
                                    width: wp(90)
                                }}
                                buttonStyle={{
                                    backgroundColor: "#1A1A1A",
                                    borderRadius: hp(1),
                                    height: hp(7)
                                }}
                                titleStyle={{
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                                onPress={() => {
                                    setcheckoutPressed(!checkoutPressed)
                                }}
                            >

                                Choose Options
                            </Button>
                            {/* <View>
                                <Icon
                                    name={heartPressed ? "heart" : "heart-outline"}
                                    type="ionicon"
                                    color={heartPressed ? "red" : "black"}
                                    onPress={() => {
                                        setHeartPress(!heartPressed)
                                    }}
                                    size={hp(4)}
                                >


                                </Icon>
                            </View> */}

                        </View>
                }


            </View>
        </SafeAreaView>





    )

}