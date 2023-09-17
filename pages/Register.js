import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input, Button } from '@rneui/themed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View
            style={{
                flex:1,
                backgroundColor: "#1a1a1a"
            }}
        >
            <Text
                style={{
                    color:"white",
                    fontWeight:"700",
                    fontSize:hp(3.1),
                    marginTop:hp(16),
                    marginLeft:hp(2),
                    marginBottom:hp(4)
                }}
            >
                Enter your email and password.
            </Text>
            <Input
                placeholder="abc@email.com"
                autoCapitalize={false}
                label={"Email"}
                
                labelStyle={{
                    marginLeft: hp(2),
                    marginBottom: hp(1),
                    fontWeight:"500",
                    color:"#494d4e"
                }}
                
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.28),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.28),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setEmail(text);
                }}
            />
            <Input
                placeholder="english 8+ characters"
                autoCapitalize={false}
                label={"Password"}
                secureTextEntry={true}
                
                labelStyle={{
                    marginLeft: hp(2),
                    marginBottom: hp(1),
                    color:"#494d4e",
                    fontWeight:"500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.28),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.28),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setPassword(text);
                }}
            />
            <Button
              title="Done"
              titleStyle={{
                color: "#686c6e",
                fontWeight: "500"
              }}
              buttonStyle={{
                backgroundColor: "#2d3133",
              }}
              containerStyle={{
                borderRadius:hp(5),
                width: hp(42),
                marginLeft:hp(2),
                height: hp(7)
              }}
            />
            
        </View>
    )
}