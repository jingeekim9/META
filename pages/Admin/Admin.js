import React, { useContext } from 'react';
import { Divider, useTheme, Icon, Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { ScrollView, StyleSheet, View,Text,Linking,StyleProp, TextStyle, TouchableOpacity, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Admin(props) {
return (
  <SafeAreaView>
    <ScrollView>
      <Text style={styles.subHeader}>쇼핑몰 관리자앱</Text>
      <Text style={styles.subHeader3}>2023.08.05</Text>
      <View style={styles.vertical}>
        <Text>주문접수</Text>
        <Divider style={{
                color : "black"
            }} orientation="vertical" />
        <Text>10건</Text>
      </View>
      <View style={styles.vertical}>
        <Text>결제확인</Text>
        <Divider orientation="vertical"/>
        <Text>12건</Text>
      </View>
      <Divider/>
      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>오늘 매출</Text>
        <Text style={styles.subhorizontalText}>
          150,000원
        </Text>
      </View>
      <Text style={styles.subHeaderr}>접수</Text>

      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: wp(15),
            backgroundColor : "white"
        }}
      >
        <Icon
            style={{
                    marginVertical: hp(1)
                      }}
              size={hp(5)}
              name='trash-outline'
              type='ionicon'
              color='black'
            />
        <Divider/>
        <Text style={styles.horizontalText2}>환불 접수:    15건</Text>
      </View>

      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: wp(15),
            backgroundColor : "white"
        }}
      >
        <Icon
              style={{
                      marginVertical: hp(1)
                    }}
              size={hp(5)}
              name='refresh-outline'
              type='ionicon'
              color='black'
            />
        <Divider/>
        <Text style={styles.horizontalText2}>반품 접수:    15건</Text>
      </View>

      <Divider/>
      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor : "white"
        }}
      >
        <TouchableOpacity
            style={{
                width: wp(30),
                paddingVertical: hp(3),
                backgroundColor : "white"
            }}
            onPress={() => {
              props.navigation.navigate("AddProduct");
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}
            >
                Add Product
            </Text>
        </TouchableOpacity>
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
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}
            >
                View Products
            </Text>
        </TouchableOpacity>
      </View>
      <Divider/>

      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: wp(17),
            backgroundColor : "white"
        }}
      >
        <TouchableOpacity
            style={{
                height: wp(30),
                width: wp(15),
                paddingVertical: hp(2),
                backgroundColor : "white"
            }}
        >
            <Icon  
              size={hp(5)}
              name='person-add-outline'
              type='ionicon'
              color='black'
              backgroundColor = "white"
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: wp(30),
                width: wp(15),
                paddingVertical: hp(2),
                backgroundColor : "white"
            }}
        >
            <Icon
              size={hp(5)}
              name='people-outline'
              type='ionicon'
              color='black'
              backgroundColor = "white"
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: wp(30),
                width: wp(15),
                paddingVertical: hp(2),
                backgroundColor : "white"
            }}
        >
            <Icon
              size={hp(5)}
              name='chatbubbles-outline'
              type='ionicon'
              color='black'
              backgroundColor = "white"
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: wp(30),
                width: wp(15),
                paddingVertical: hp(2),
                backgroundColor : "white"
            }}
        >
            <Icon
              size={hp(5)}
              name='reader-outline'
              type='ionicon'
              color='black'
              backgroundColor = "white"
            />
        </TouchableOpacity>
      </View>
        <Text style={styles.subhorizontalText2}>      신규회원                   전체회원                  1:1 문의                   상품 문의 </Text>
      <Divider/>
      <Text style={styles.subHeader2}>공지:  시스템 정기점검안내</Text>
    </ScrollView>
    <StatusBar style="dark" />
  </SafeAreaView>
);
};
const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "white",
  color : "black",
  textAlign : "center",
  paddingVertical : 20,
  marginBottom : 2,
  fontSize: 18,
  height: 60
},
subHeaderr: {
  backgroundColor : "white",
  color : "black",
  textAlign : "center",
  paddingVertical : 10,
  marginBottom : 10,
  fontSize: 18
},
subHeader2: {
  backgroundColor : "#bfb9b9",
  color : "white",
  textAlign : "left",
  paddingVertical : 10,
  marginBottom : 10,
  fontSize: 14,
  paddingLeft: 10,
  fontWeight:'bold'
},
subHeader3: {
  color : "black",
  textAlign : "center",
  marginBottom : 5,
  fontSize: 12,
  paddingLeft: 10,
  backgroundColor : "white"

},
horizontal: {
  marginBottom: 10,
  backgroundColor : "white"
},
horizontal2: {
  backgroundColor:'white'
},
horizontalText: {
  textAlign: 'center',
  fontSize: 15,
  marginVertical: 3,
  backgroundColor : "white"

},
horizontalText2: {
  textAlign: 'center',
  fontSize: 15,
  marginVertical: 17,
  fontWeight: 'bold',
  backgroundColor : "white"
},
subhorizontalText: {
  textAlign: 'center',
  fontSize: 20,
  backgroundColor : "white"
},
subhorizontalText2: {
  textAlign: 'left',
  fontSize: 12,
  paddingLeft: 10,
  backgroundColor : "white"
},
vertical: {
  marginBottom: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  backgroundColor: 'white'
},
});