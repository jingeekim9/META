import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import DropDownPicker from "react-native-dropdown-picker";
import { Icon, Input, FAB, Button } from "@rneui/themed";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Size() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [fit, setFit] = useState("");
    const [options, setOptions] = useState([
        { label: 'Oversize Fit', value: 'oversize' },
        { label: 'Regular Fit', value: 'regular' },
        { label: 'Slim Fit', value: 'slim' },
    ]);
    const [brand, setBrand] = useState("");
    const [brands, setBrands] = useState([
        { label: 'Nike', value: 'Nike' },
        { label: 'Adidas', value: 'Adidas' },
        { label: 'Moncler', value: 'Moncler' },
    ]);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([
        { label: 'Top', value: 'Top' },
        { label: 'Bottom', value: 'Bottom' },
        { label: 'Jacket', value: 'Jacket' },
    ]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <Text
                style={{
                    marginLeft: hp(1.5),
                    marginTop: hp(7),
                    fontSize: hp(3),
                    fontWeight: 'bold'
                }}
            >
                Add Size Data
            </Text>
            <KeyboardAwareScrollView>
                <View
                    style={{
                        padding: hp(1.5),
                        paddingBottom: hp(10)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.3),
                            fontWeight: 'bold'
                        }}
                    >
                        My Size
                    </Text>
                    <View
                        style={{
                            marginTop: hp(2),
                            zIndex: 99999
                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: hp(1.5),
                                marginBottom: hp(1)
                            }}
                        >
                            Fit
                        </Text>
                        <DropDownPicker
                            open={open}
                            value={fit}
                            items={options}
                            setOpen={setOpen}
                            setValue={setFit}
                            setItems={setOptions}
                            style={{
                                borderWidth: 1,
                                borderRadius: hp(1.5),
                                paddingHorizontal: hp(1.5),
                                paddingVertical: hp(0.5),
                                borderColor: '#3875ff',
                                backgroundColor: '#3875ff',
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                flex: 1,
                                marginRight: wp(1),
                                backgroundColor: 'transparent',
                                zIndex: 1000
                            }}
                            textStyle={{
                                color: 'white',
                                fontSize: hp(1.8),
                                fontWeight: 'bold'
                            }}
                            ArrowDownIconComponent={({ style }) => <Icon type="ionicon" name="chevron-down-outline" color={'white'} />}
                            ArrowUpIconComponent={({ style }) => <Icon type="ionicon" name="chevron-up-outline" color={'white'} />}
                            listMode="SCROLLVIEW"
                            zIndex={99999}
                            dropDownContainerStyle={{
                                backgroundColor: '#3875ff'
                            }}
                            TickIconComponent={({ style }) => <Icon type="ionicon" name="checkmark-outline" color={'white'} />}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Top Length"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Top Shoulders"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Top Chest"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Top Sleeve Length"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Length"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Waist"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Hips"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Thigh"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Front-rise"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <Input
                            placeholder='Length in cm'
                            label="Bottom Hem"
                            labelStyle={{
                                color: 'black',
                                marginBottom: hp(1),
                                fontSize: hp(1.5)
                            }}
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: hp(1),
                                paddingHorizontal: hp(1),
                                paddingVertical: hp(0.5),
                                borderColor: '#ADADAD'
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: hp(2.3),
                            fontWeight: 'bold'
                        }}
                    >
                        Brand Size
                    </Text>
                    <View
                        style={{
                            marginTop: hp(2),
                            zIndex: 99999
                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: hp(1.5),
                                marginBottom: hp(1)
                            }}
                        >
                            Brand
                        </Text>
                        <DropDownPicker
                            open={open2}
                            value={brand}
                            items={brands}
                            setOpen={setOpen2}
                            setValue={setBrand}
                            setItems={setBrands}
                            style={{
                                borderWidth: 1,
                                borderRadius: hp(1.5),
                                paddingHorizontal: hp(1.5),
                                paddingVertical: hp(0.5),
                                borderColor: '#3875ff',
                                backgroundColor: '#3875ff',
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                flex: 1,
                                marginRight: wp(1),
                                backgroundColor: 'transparent',
                                zIndex: 1000
                            }}
                            textStyle={{
                                color: 'white',
                                fontSize: hp(1.8),
                                fontWeight: 'bold'
                            }}
                            ArrowDownIconComponent={({ style }) => <Icon type="ionicon" name="chevron-down-outline" color={'white'} />}
                            ArrowUpIconComponent={({ style }) => <Icon type="ionicon" name="chevron-up-outline" color={'white'} />}
                            listMode="SCROLLVIEW"
                            zIndex={99999}
                            dropDownContainerStyle={{
                                backgroundColor: '#3875ff'
                            }}
                            TickIconComponent={({ style }) => <Icon type="ionicon" name="checkmark-outline" color={'white'} />}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(2),
                            zIndex: 9999
                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: hp(1.5),
                                marginBottom: hp(1)
                            }}
                        >
                            Category
                        </Text>
                        <DropDownPicker
                            open={open3}
                            value={category}
                            items={categories}
                            setOpen={setOpen3}
                            setValue={setCategory}
                            setItems={setCategories}
                            style={{
                                borderWidth: 1,
                                borderRadius: hp(1.5),
                                paddingHorizontal: hp(1.5),
                                paddingVertical: hp(0.5),
                                borderColor: '#3875ff',
                                backgroundColor: '#3875ff',
                            }}
                            containerStyle={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                flex: 1,
                                marginRight: wp(1),
                                backgroundColor: 'transparent',
                                zIndex: 1000
                            }}
                            textStyle={{
                                color: 'white',
                                fontSize: hp(1.8),
                                fontWeight: 'bold'
                            }}
                            ArrowDownIconComponent={({ style }) => <Icon type="ionicon" name="chevron-down-outline" color={'white'} />}
                            ArrowUpIconComponent={({ style }) => <Icon type="ionicon" name="chevron-up-outline" color={'white'} />}
                            listMode="SCROLLVIEW"
                            zIndex={9999}
                            dropDownContainerStyle={{
                                backgroundColor: '#3875ff'
                            }}
                            TickIconComponent={({ style }) => <Icon type="ionicon" name="checkmark-outline" color={'white'} />}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(1),
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.5)
                                }}
                            >
                                Clothes fit: 1 (too tight) to 5 (too loose)
                            </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.8),
                                    marginLeft: hp(1)
                                }}
                            >
                                0
                            </Text>
                        </View>
                        <Slider
                            style={{ height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#EEF0E5"
                            maximumTrackTintColor="#000000"
                            step={1}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(1),
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.5)
                                }}
                            >
                                Total Length: 1 (too short) to 5 (too long)
                            </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.8),
                                    marginLeft: hp(1)
                                }}
                            >
                                0
                            </Text>
                        </View>
                        <Slider
                            style={{ height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#EEF0E5"
                            maximumTrackTintColor="#000000"
                            step={1}
                        />
                    </View><View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(1),
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.5)
                                }}
                            >
                                Arm Length: 1 (too short) to 5 (too long)
                            </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.8),
                                    marginLeft: hp(1)
                                }}
                            >
                                0
                            </Text>
                        </View>
                        <Slider
                            style={{ height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#EEF0E5"
                            maximumTrackTintColor="#000000"
                            step={1}
                        />
                    </View><View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(1),
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.5)
                                }}
                            >
                                Waist: 1 (too tight) to 5 (too loose)
                            </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.8),
                                    marginLeft: hp(1)
                                }}
                            >
                                0
                            </Text>
                        </View>
                        <Slider
                            style={{ height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#EEF0E5"
                            maximumTrackTintColor="#000000"
                            step={1}
                        />
                    </View><View
                        style={{
                            marginTop: hp(1)
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(1),
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.5)
                                }}
                            >
                                Shoulder Width: 1 (too short) to 5 (too long)
                            </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: hp(1.8),
                                    marginLeft: hp(1)
                                }}
                            >
                                0
                            </Text>
                        </View>
                        <Slider
                            style={{ height: 40 }}
                            minimumValue={1}
                            maximumValue={5}
                            minimumTrackTintColor="#EEF0E5"
                            maximumTrackTintColor="#000000"
                            step={1}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}