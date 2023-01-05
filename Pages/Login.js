import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useContext } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Login({navigation}) {
    const [nrlmid, setNrlmId] = useState('');
    const [phone, setPhone] = useState('');
    const {login} = useContext(AuthContext);

    return (
        <>
            <View style={styles.container}>

                <View style={{
                    flex: 0.4,
                    alignItems: 'center'
                }} >
                    <Image source={require("../assets/pnrd-logo.png")} style={styles.image} />
                </View>

                <View style={{ flex: 0.6 }}>

                    <View style={{ marginLeft: 10, marginBottom: 5 }}>
                        <Text style={[styles.text1, { alignSelf: 'center', marginBottom: 10, color: "#000" }]}>Login Using Your NRLM ID & Mobile Number</Text>
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontWeight: "bold" }}>NRLM Registration Id</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    key={1}
                                    style={styles.inputStyle}
                                    placeholder="XXXXXXXXXX"
                                    placeholderTextColor="#8b9cb5"
                                    keyboardType="numeric"
                                    maxLength={10}
                                    onChangeText={setNrlmId}
                                    value={nrlmid}
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false} />
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    key={2}
                                    style={styles.inputStyle}
                                    placeholder="+91"
                                    placeholderTextColor="#8b9cb5"
                                    keyboardType="numeric"
                                    maxLength={13}
                                    onChangeText={setPhone}
                                    value={phone}
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false} />
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: "blue", width: "30%", marginRight: 5 }} onPress={() => navigation.navigate('Register')}>
                            <Text style={{ padding: 8, fontWeight: "bold", color: "white", textAlign: 'center' }}>REGISTER NOW</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ backgroundColor: "green", width: "30%", marginRight: 5 }} onPress={() => formSubmit()}> */}
                        <TouchableOpacity style={{ backgroundColor: "green", width: "30%", marginRight: 5 }} onPress={()=>login(nrlmid,phone)}>
                            <Text style={{ padding: 8, fontWeight: "bold", color: "white", textAlign: 'center' }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderColor: "#000",
        borderWidth: 2,
        padding: 12,
        backgroundColor: '#fff',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    inputStyle: {
        flex: 1,
        backgroundColor: "#fff",
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 0,
        borderColor: '#000',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#fff',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        height: 150,
        width: 95,
    },
})




