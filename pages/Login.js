import React from "react";
import {View, Text} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Input, Button } from '@rneui/base';

export default function Login() {
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
                        marginLeft: hp(3),
                        color: "#F5F6F8",
                    }}
                >
                    Log in with Email
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
                        marginLeft: hp(5)
                    }}
                >
                    E-mail address
                </Text>
                <Input
                    placeholder = "abc@email.com"
                    inputContainerStyle={{
                        width: hp(50),
                        borderRadius: 10,
                        backgroundColor: '#1A1A1A',
                        paddingHorizontal: hp(2),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        borderColor: '#212223',
                        borderBottomWidth: hp(0.5),
                        borderWidth: hp(0.5),
                        color: "#717678"
                    }}
                    
                >
                    
                </Input>
                
                {/* Password */}
                <Text
                    style = {{
                        marginTop: hp(-1),
                        color: "#717678",
                        marginLeft: hp(5)
                    }}
                >
                    Password
                </Text>
                <Input
                    placeholder = "At least 6 characters including alphabets"
                    inputContainerStyle={{
                        width: hp(50),
                        borderRadius: 10,
                        backgroundColor: '#1A1A1A',
                        paddingHorizontal: hp(2),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        borderColor: '#212223',
                        borderBottomWidth: hp(0.5),
                        borderWidth: hp(0.5),
                        color: "#717678"
                    }}
                    
                >
                    
                </Input>
            </View>

            {/* Button */}
            <View>
                <Button
                    titleStyle = {{
                        color: "#717678"
                    }}
                    title={"Login"}
                    buttonStyle = {{
                        backgroundColor: '#2D3133',
                        width: hp(50),
                        borderRadius: 10,
                        paddingHorizontal: hp(2),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center",
                        borderColor: '#212223',
                        borderBottomWidth: hp(0.5),
                        borderWidth: hp(0.5),
                    }}
                    containerStyle = {{
                        
                    }}
                
                >
                    
                </Button> 

                <Button
                    titleStyle = {{
                        color: '#B4B8B9',
                        fontSize: hp(2)
                    }}
                    title={"Find My Email"}
                    buttonStyle = {{
                        backgroundColor: '#1A1A1A',
                        width: hp(50),
                        paddingHorizontal: hp(2),
                        marginTop: hp(1),
                        justifyContent:"center",
                        alignSelf:"center"
                    }}
                >
                    
                </Button>
            </View>
        </View>
    )
}