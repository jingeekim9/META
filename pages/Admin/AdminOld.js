import React, { useState, useEffect } from 'react';
import { Divider, useTheme, Icon, Header as HeaderRNE, HeaderProps, Button } from '@rneui/themed';
import { ScrollView, Image, StyleSheet, View, Text, Linking, StyleProp, TextStyle, TouchableOpacity, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, updateDoc, query, where, getDocs } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function Admin(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      var email = await AsyncStorage.getItem("email");
      const q = query(collection(db, "Users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data();
        setImage(data["companyLogo"])
      });
    }

    // getImage();
  }, [])
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: "white"
      }}
    >
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: hp(3.5),
            letterSpacing: hp(0.2),
            marginTop: hp(5)
          }}
        >
          Logncoding
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: hp(1),
            justifyContent: 'space-around'
          }}
        >
          {
            image &&
            <Image
              style={{
                height: hp(19),
                width: "82%",

              }}
              source={{
                uri: image
              }}
            />
          }
        </View>
        <View style={{
          marginTop: hp(5),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'white',
          alignItems: 'center'
        }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: hp(2.5),
              letterSpacing: hp(0.2),
              marginTop: hp(1)
            }}>
            Number of orders:
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: hp(2.5),
              letterSpacing: hp(0.2),
              marginTop: hp(1)
            }}
          >
            10
          </Text>
        </View>
        <Button
          title="Add Product"
          titleStyle={{
            color: "black"
          }}
          containerStyle={{
            marginBottom: hp(5),
            marginTop: hp(5)
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
            props.navigation.navigate("AddProduct");
          }}
        >


        </Button>
        <Button
          title="View Products"
          titleStyle={{
            color: "black"
          }}
          containerStyle={{
            marginBottom: hp(5)
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
            props.navigation.navigate("ViewProduct");
          }}
        >


        </Button>
        <Button
          title="Edit Admin Profile"
          titleStyle={{
            color: "black"
          }}
          containerStyle={{
            marginBottom: hp(5)
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
            props.navigation.navigate("AdminProfile");
          }}
        >


        </Button>
      </ScrollView>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 18,
    height: 60
  },
  subHeader3: {
    color: "black",
    textAlign: "center",
    marginBottom: 5,
    fontSize: 12,
    paddingLeft: 10,
    backgroundColor: "white"

  },
  vertical: {
    marginTop: 25,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 50
  },
});