import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {

    const [passWord, setPassWord] = useState();
    const [phoneNumber, setPhoneNumber] = useState()

    const [host, setHost] = useState('192.168.1.228')

    const [data, setData] = useState()
    const login = async () => {
        await fetch('http://' + host + ':8080/user/login/' + phoneNumber + '/' + passWord, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(data => data.json())
        .then((data) => {
            setData(data)
            console.log(data)
            if(data == ""){
                Alert.alert("Incorrect username or password")
            }else{
                props.navigation.navigate("Home",{
                    phoneNumber: phoneNumber,
                    host: host
                })
            }
        })
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ marginTop: 100 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/logoDangNhap.png')} style={{ height: 200, width: 260, marginLeft: 0 }} />
                </View>
                <View style={{ marginLeft: 40, marginTop: 20 }}>
                    <Text style={{ fontSize: 28, fontWeight: '700' }}>Log in</Text>
                </View>
                <View>
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior="padding"
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/phone.png')} style={{ height: 25, width: 25, marginTop: 20 }} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Phone number'
                                    style={styles.input}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/lock.png')} style={{ height: 25, width: 25, marginTop: 20 }} />
                            <View style={styles.inputContainer}>

                                <TextInput
                                    placeholder='Password'
                                    style={styles.input}
                                    onChangeText={setPassWord}
                                    secureTextEntry
                                />
                            </View>
                        </View>
                        <View style={{ top: 20, marginLeft: 200 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("")
                                }}
                            >
                                <Text style={{ color: 'rgba(28,100,209,255)', fontWeight: '500' }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={()=>{
                                    login()
                                }}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 35, flexDirection: 'row' }}>
                            <Text style={{ color: 'rgba(136,147,165,255)' }}>New to Logistics?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("Register")
                                }}
                            >
                                <Text style={{ marginLeft: 5, color: 'rgba(28,100,209,255)', fontWeight: '500' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginLeft: 10,
        width: '70%',
        borderBottomWidth: 1,
        borderColor: 'rgba(232,233,236,255)',
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width:500
    },
    button: {
        backgroundColor: 'rgba(0,101,255,255)',
        width: '100%',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
})