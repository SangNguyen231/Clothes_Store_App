import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';

const Register = (props) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [passWord, setPassWord] = useState();
    const [phoneNumber, setPhoneNumber] = useState()
    const [host, setHost] = useState('192.168.1.228')


    const SignUp = (phoneNumber,firstName, lastName, passWord) => {
        try {
          fetch('http://' + host + ':8080/user/', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({phoneNumber: phoneNumber, firstName: firstName,lastName: lastName,password: passWord}),
          })
        } catch (error) {
          console.log('Error:', error);
        }
    };
    const [data, setData] = useState()
    const findPhone = async () => {
        await fetch('http://' + host + ':8080/user/getOneUser/' + phoneNumber, {
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
                Alert.alert("Sign up success")
                SignUp(phoneNumber,firstName,lastName,passWord)
                props.navigation.navigate("Login")
            }else{
                Alert.alert("Phone Already Exist")
            }
        })
    }

    

    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ marginTop: 40 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/logoDangKy.png')} style={{ height: 230, width: 260, marginLeft: 0 }} />
                </View>
                <View style={{ marginLeft: 40, marginTop: 0 }}>
                    <Text style={{ fontSize: 28, fontWeight: '700' }}>Sign up</Text>
                </View>
                <View style={{ marginTop: 20 }}>
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
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../../../assets/user.png')} style={{ height: 25, width: 25, marginTop: 20 }} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='First name'
                                    style={styles.input}
                                    value={firstName}
                                    onChangeText={setFirstName}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../../../assets/user.png')} style={{ height: 25, width: 25, marginTop: 20 }} />
                            <View style={styles.inputContainer}>

                                <TextInput
                                    placeholder='Last name'
                                    style={styles.input}
                                    value={lastName}
                                    onChangeText={setLastName}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../../../assets/lock.png')} style={{ height: 25, width: 25, marginTop: 20 }} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Password'
                                    style={styles.input}
                                    value={passWord}
                                    onChangeText={setPassWord}
                                    secureTextEntry
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={()=>{
                                    findPhone()
                                }}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'rgba(136,147,165,255)' }}>Join us before?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("Login")
                                }}
                            >
                                <Text style={{ marginLeft: 5, color: 'rgba(28,100,209,255)', fontWeight: '500' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

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
        paddingHorizontal: 20,
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
        marginTop: 50
    },
})