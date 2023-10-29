import React, { useContext } from 'react';
import { Divider, useTheme, Icon, Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { ScrollView, StyleSheet, View,Text,Linking,StyleProp, TextStyle, TouchableOpacity, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Admin(props) {
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
                            fontWeight: 'bold',
                            fontSize: hp(4),
                            marginTop: hp(6),
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                    Admin Page</Text>
      <View style={styles.vertical}>
        <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: hp(3),
          marginLeft: hp(2),
          color: "black",
          }}>Order reception:                        10건</Text>
      </View>
      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor : "white",
            marginTop: 30
        }}
      >
        <TouchableOpacity
            style={{
                width: wp(30),
                paddingVertical: hp(3),
                backgroundColor : "white",
            }}
            onPress={() => {
              props.navigation.navigate("AddProduct");
            }}
        >
            <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: hp(1),
                  marginLeft: hp(2),
                  color: "black",
                  }}
            >
                Add Product
            </Text>
        </TouchableOpacity>
        <Divider style={{
                color : "white"
            }} orientation="vertical" />
        <TouchableOpacity
            style={{
                width: wp(30),
                paddingVertical: hp(3),
                backgroundColor : "white"
            }}
            onPress={() => {
              props.navigation.navigate("ViewProduct");
            }}
        >
            <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: hp(1),
                  marginLeft: hp(2),
                  color: "black",
                }}
            >
                View Products
            </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <StatusBar style="dark" />
  </KeyboardAwareScrollView>
);
};
const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "white",
  color : "black",
  textAlign : "center",
  paddingVertical : 20,
  fontSize: 18,
  height: 60
},
subHeader3: {
  color : "black",
  textAlign : "center",
  marginBottom : 5,
  fontSize: 12,
  paddingLeft: 10,
  backgroundColor : "white"

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