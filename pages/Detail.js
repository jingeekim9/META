import React, { useState } from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, Button, color } from '@rneui/base';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, AirbnbRating } from '@rneui/themed';
import { Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Detail(props) {
    const [heartPressed, setHeartPress] = useState(false);
    const [checkoutPressed, setcheckoutPressed] = useState(false);
    const [options1Pressed, setoptions1Pressed] = useState(false);
    const [options2Pressed, setoptions2Pressed] = useState(false);
    const [colorOpen, setColorOpen] = useState(false);
    const [colorOptions, setColorOptions] = useState([
        {label: "Red", value: "red"},
        {label: "Black", value: "black"}
    ])
    const [size, setSize] = useState("");
    const [sizeOpen, setSizeOpen] = useState(false);
    const [sizeOptions, setSizeOptions] = useState([
        {label: "L", value: "L"},
        {label: "M", value: "M"}
    ])
    const [color, setColor] = useState("");
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
                <Image
                    style={{
                        width: hp(2.5),
                        height: hp(2.5),
                        marginLeft: hp(2)
                    }}
                    source={require('../assets/left-arrow.png')}
                />
                <Text
                    style={{
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
                                height: hp(50),
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            source={require('../assets/tshirt.png')}
                            resizeMode="cover"
                        />

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
                                Category
                            </Text>
                            <Icon
                                style={{
                                    marginRight: hp(2)
                                }}
                                type="ionicon"
                                name="share-outline">

                            </Icon>
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
                                    Black T-Shirt
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
                                    defaultRating={4}
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
                                    후기 128개
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: hp(2.8),
                                    fontWeight: '500'
                                }}>
                                20,000원
                            </Text>
                        </View>
                    </View>

                    {/* Long Image */}
                    <View
                        style = {{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Image
                                style={{
                                    marginTop: hp(5)
                            }}
                            source={require('../assets/guy1.png')}

                        />
                        <Image
                                style={{
                                    marginTop: hp(5)
                            }}
                            source={require('../assets/guy2.png')}

                        />
                        <Image
                                style={{
                                    marginTop: hp(5)
                            }}
                            source={require('../assets/guy3.png')}

                        />
                    </View>
                </ScrollView>

                {
                    checkoutPressed ?
                    <View>

                        {/* Bottom thingy */}
                        <View
                            style = {{
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
                                            <Text style={{fontWeight: 'bold'}}>$2,000</Text>
                                            :
                                            <Text style={{fontWeight: 'bold'}}>$0</Text>
                                        }
                                        
                                    </Text>
                                </View>
                        </View>

                        <View
                            style = {{
                                borderTopColor: '#F1EFEF',
                                borderTopWidth: 2,
                                padding: hp(2),
                                flexDirection: 'row',
                                justifyContent: 'center'
                                }}>
                            <Button
                                style={{
                                    width: wp(90),
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
                            >

                                Checkout
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
                            width: wp(75)
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
                    <View>
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
                    </View>

                </View>
                }

                
            </View>

            {/* Bottom Thingy 2 */}

            





            {/* Bottom Thingy 3 */}
            

        </SafeAreaView>





    )

}