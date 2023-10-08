import React, { useContext } from 'react';
import { Divider, useTheme, Icon, Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { ScrollView, StyleSheet, View,Text,Linking,StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Admin(props) {
return (
  <>
    <ScrollView>
      <Text style={styles.subHeader}>쇼핑몰 관리자앱</Text>
      <Text style={styles.subHeader3}>2023.08.05</Text>
      <View style={styles.vertical}>
        <Text>주문접수</Text>
        <Divider orientation="vertical" />
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
      <Text style={styles.subHeader}>접수</Text>
      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>반품접수:    20건</Text>
        <Divider/>
        <Text style={styles.horizontalText}>환불접수:    15건</Text>
      </View>
      <Divider/>
      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}
      >
        <TouchableOpacity
            style={{
                width: wp(30),
                paddingVertical: hp(3)
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
                paddingVertical: hp(3)
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
      <View style={styles.horizontal2}>
        <Text style={styles.subhorizontalText2}> 신규회원          전체회원          1:1 문의          상품 문의 </Text>
      </View>
      <Divider/>
      <Text style={styles.subHeader2}>공지:  시스템 정기점검안내</Text>
    </ScrollView>
  </>
);
};
const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#4aa9b0",
  color : "white",
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
  backgroundColor : "white",
  color : "black",
  textAlign : "center",
  marginBottom : 5,
  fontSize: 12,
  paddingLeft: 10,
  fontWeight:'bold'
},
horizontal: {
  marginBottom: 10,
},
horizontal2: {
  backgroundColor:'white'
},
horizontalText: {
  textAlign: 'center',
  fontSize: 15,
  marginVertical: 3
},
subhorizontalText: {
  textAlign: 'center',
  fontSize: 20,
},
subhorizontalText2: {
  textAlign: 'center',
  fontSize: 12,
  paddingLeft: 10,
  paddingTop: 100
},
vertical: {
  marginBottom: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
},
});