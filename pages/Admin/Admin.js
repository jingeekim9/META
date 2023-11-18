import React, { useContext } from 'react';
import { Divider, useTheme, Icon, Header as HeaderRNE, HeaderProps, Button } from '@rneui/themed';
import { ScrollView, Image, StyleSheet, View,Text,Linking,StyleProp, TextStyle, TouchableOpacity, SafeAreaView } from 'react-native';
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
                      <Image
                        style={{
                            height: hp(19),
                            width: "82%",

                        }}
                        source={{
                            uri: "https://www.logncoding.com/newassets/assets/img/logo_en.png"
                        }}
                      />
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