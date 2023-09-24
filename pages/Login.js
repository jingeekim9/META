import React from "react";
import {View, Text} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Input, Button } from '@rneui/base';

export default function Login(props) {
    return (
        <View
            style = {{
                flex: 1,
                backgroundColor: "#1A1A1A"
            }}
        >
            <View
                style = {{
                    
                }}
            >
                <Text
                    style = {{
                        fontWeight: 'bold',
                        fontSize: hp(5),
                        marginTop: hp(10),
                        marginLeft: hp(2),
                        color: "#F5F6F8",
                    }}
                >
                    Log in
                </Text>
            </View>

            {/* Email */}
            <View
                style = {{
                    justifyContent: 'center',
                    marginTop: hp(5)
                }}
            >

                <Text
                    style = {{
                        marginTop: hp(1),
                        color: "#717678",
                        marginLeft: hp(2)
                    }}
                >
                    E-mail address
                </Text>
                <Input
                    placeholder = "abc@email.com"
                    inputContainerStyle={{
                        borderRadius: hp(1),
                        backgroundColor: '#1A1A1A',
                        paddingHorizontal: hp(2),
                        paddingVertical: hp(0.5),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        borderColor: '#212223',
                        borderBottomWidth: hp(0.3),
                        borderWidth: hp(0.3),
                        color: "#717678"
                    }}
                    
                >
                    
                </Input>
                
                {/* Password */}
                <Text
                    style = {{
                        color: "#717678",
                        marginLeft: hp(2)
                    }}
                >
                    Password
                </Text>
                <Input
                    placeholder = "At least 8 characters"
                    inputContainerStyle={{
                        borderRadius: hp(1),
                        backgroundColor: '#1A1A1A',
                        paddingHorizontal: hp(2),
                        paddingVertical: hp(0.5),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        borderColor: '#212223',
                        borderBottomWidth: hp(0.3),
                        borderWidth: hp(0.3),
                        color: "#717678"
                    }}
                    
                >
                    
                </Input>
            </View>

            {/* Button */}
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1
                }}
            >
                <Button
                    titleStyle = {{
                        color: "white",
                        fontWeight: 'bold'
                    }}
                    title={"Login"}
                    buttonStyle = {{
                        backgroundColor: '#2D3133',
                        borderRadius: hp(10),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        width: '100%',
                        paddingVertical: hp(1.3)
                    }}
                    containerStyle = {{
                        paddingHorizontal: hp(2),
                        flex: 1
                    }}
                
                >
                    
                </Button> 
            </View>
            <View
                style={{
                    marginBottom: hp(5),
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: '#5f6060',
                        fontSize: hp(2)
                    }}
                >
                    Don't have an account? <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => {props.navigation.navigate("Register")}}>Register</Text>
                </Text>
            </View>
        </View>
    )
}