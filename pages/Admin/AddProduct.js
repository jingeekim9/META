import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, StyleProp, TextStyle, StyleSheet } from "react-native";
import { Input, Button, ButtonGroup, ListItem } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AddProduct() {
    return (
        <KeyboardAwareScrollView
        style={{
            flex: 1,
            backgroundColor: "white"
        }}
    >
        <View
            style={{
                flex: 1,
                height: hp(150)
            }}
        >
            <Text style={styles.header}>
                Add Product
            </Text>
            <Text style={styles.headerr}>
                Last added by admin on Dec 19, 2023
            </Text>
            <Input
                placeholder="MEN'S LOAFER WITH HORSEBIT"
                label={"Name"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
            />
            <Input
                placeholder="$1,190"
                autoCapitalize={"none"}
                label={"Price"}


                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}

            />
            <Input
                placeholder="Shoes"
                autoCapitalize={"none"}
                label={"Category"}
                secureTextEntry={true}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
            />
            <Input
                placeholder="XL"
                autoCapitalize={"none"}
                label={"Size Options"}
                secureTextEntry={true}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
            />
            <Input
                placeholder="Black"
                label={"Color Options"}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight: "500",
                    color: "black"
                }}

                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
            />
            <Input
                placeholder=""
                autoCapitalize={"none"}
                label={"Description"}
                secureTextEntry={true}
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color: "black",
                    fontWeight: "500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "500"
                }}

                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.85),
                    borderBottomWidth: hp(0.2),
                    borderColor: "black",
                    marginLeft: hp(1),
                    height: hp(12),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
            />
            <Text
                style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: hp(3.3),
                    marginLeft: hp(2),
                    marginBottom: hp(1)
                }}
                >
                Product Image
            </Text>
            
            <View>
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
                                        uri: "https://images.squarespace-cdn.com/content/v1/56d8ea50c6fc08deaeee5c79/1548930275441-OY0ZBD2I02VSKTIKF506/K052_GLOSS_AUBERGINE_02.jpg?format=2500w://www.prada.com/content/dam/pradabkg_products/2/2EG/2EG421/055F0807/2EG421_055_F0807_SLS.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    Formal Men's Shoes
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
                                        uri: "https://bspokestyle.com/cdn/shop/products/010411_2_echo-lo-ii_white-and-navy_sneakers_magnanni_p45.jpg?v=1590604783&width=1080"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    Sneakers
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
                                        uri: "https://static-sg.zacdn.com/p/coach-1463-4869382-1.jpg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    Coach
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
                                        uri: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/23749119_fpx.tif?$browse$&wid=178&fmt=jpeg"
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: hp(4)
                                    }}
                                >
                                    Calvin Klein Shoes
                                </Text>
                            </View>
                        </ScrollView>
            </View>
            <View
                style={{
                    flex: 1,
                    marginTop: hp(2)
                }}
            >
                <Button
                        title="Add"
                        titleStyle={{
                            color: "white",
                            fontWeight: "500"
                        }}
                        buttonStyle={{
                            backgroundColor: "black",
                            paddingVertical: hp(1.5)
                        }}
                        containerStyle={{
                            borderRadius: hp(5),
                            width: hp(48),
                            marginLeft: hp(2),
                            marginTop: hp(2)
                        }}

                    />
                    <Button
                        title="Cancel"
                        titleStyle={{
                            color: "black",
                            fontWeight: "500"
                        }}
                        buttonStyle={{
                            backgroundColor: "#E8F6F7",
                            paddingVertical: hp(1.5)
                        }}
                        containerStyle={{
                            borderRadius: hp(5),
                            width: hp(48),
                            marginLeft: hp(2),
                            marginTop: hp(1)
                        }}

                    />
            </View>
            <View
                style={{
                    marginBottom: hp(5),
                    alignItems: 'center',
                }}
            >
            </View>
        </View>
    </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor : "white",
        color : "black",
        textAlign : "center",
        paddingVertical : 13,
        marginTop: 15,
        fontSize: 25,
        fontWeight: "500",
        height: 55,
  },
    headerr: {
    backgroundColor : "#f2ead5",
    color : "black",
    textAlign : "center",
    paddingVertical : 6,
    marginBottom : 10,
    fontSize: 13,
    fontWeight: "500",
    height: 30
    }
});