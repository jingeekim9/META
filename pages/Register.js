import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input, Button } from '@rneui/themed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    fontSize: hp(5),
                    marginTop:hp(16),
                    marginLeft:hp(2),
                    marginBottom:hp(4)
                }}
            >
                Register
            </Text>
            <Input
                placeholder="John Appleseed"
                autoCapitalize={"none"}
                label={"Name"}
                
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight:"500",
                    color:"#494d4e"
                }}
                
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.2),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setName(text);
                }}
            />
            <Input
                placeholder="abc@email.com"
                autoCapitalize={"none"}
                label={"Email"}
                
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    fontWeight:"500",
                    color:"#494d4e"
                }}
                
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.2),
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
                autoCapitalize={"none"}
                label={"Password"}
                secureTextEntry={true}
                
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color:"#494d4e",
                    fontWeight:"500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.2),
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
            <Input
                placeholder="english 8+ characters"
                autoCapitalize={"none"}
                label={"Confirm Password"}
                secureTextEntry={true}
                
                labelStyle={{
                    marginLeft: hp(1),
                    marginBottom: hp(1),
                    color:"#494d4e",
                    fontWeight:"500"
                }}
                style={{
                    marginLeft: hp(1.5),
                    fontWeight: "600"
                }}
                
                inputContainerStyle={{
                    borderWidth: hp(0.2),
                    borderRadius:hp(0.85),
                    borderBottomWidth:hp(0.2),
                    borderColor: "white",
                    marginLeft:hp(1),
                    height: hp(6),
                    width: hp(42)
                }}
                inputStyle={{
                    color: "#686c6e"
                }}
                onChangeText={(text) => {
                    setConfirmPassword(text);
                }}
            />
            <View
                style={{
                    flex: 1,
                    marginTop: hp(2)
                }}
            >
                <Button
                title="Register"
                titleStyle={{
                    color: "white",
                    fontWeight: "500"
                }}
                buttonStyle={{
                    backgroundColor: "#2d3133",
                    paddingVertical: hp(1.5)
                }}
                containerStyle={{
                    borderRadius:hp(5),
                    width: hp(42),
                    marginLeft:hp(2),
                }}
                />
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
                    Already have an account? <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => {props.navigation.navigate("Login")}}>Login</Text>
                </Text>
            </View>
        </View>
    )
}