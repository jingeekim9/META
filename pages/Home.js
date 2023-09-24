import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const getData = async() => {
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
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>
                {email}
            </Text>
            <Text>
                {name}
            </Text>
        </View>
    )
}