import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView, Animated, Pressable, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import back from '../../../assets/back.png'
import { AntDesign } from '@expo/vector-icons'
import SimpleSelectButton from 'react-native-simple-select-button'

import Profile from '../profile/Profile'
import Main from '../main/Main'
import Cart from '../cart/Cart'
import { useRoute } from '@react-navigation/native'

const Home = ({navigation}) => {

  const [colorHome, setColorHome] = useState('#fdc1c9');
  const [colorCart, setColorCart] = useState('#fff');
  const [colorUser, setColorUser] = useState('#fff');

  const [screen, setScreen] = useState(0);

  const route = useRoute();

  const [host, setHost] = useState('192.168.1.228')

  const [data1, setData1] = useState()

  let data = route.params

  const getUser = async () => {
    await fetch('http://' + data.host + ':8080/user/getUser/' + data.phoneNumber, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then((data) => {
        setData1(data)
      })
  }

  useEffect(() => {
    getUser()
    setHost(data.host)
  }, []);

  const handleChangeScreen = () => {
    switch (screen) {
      case 0:
        return <Main navigation={navigation} data1={data1} host={host}/>;
      case 1:
        return <Cart data1={data1} host={host}/>;
      case 2:
        return <Profile data1={data1} host={host}/>;
    }
  };

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'space-between'}}>
      <View style={{width:'100%',height:'90%'}}>
        {handleChangeScreen()}
      </View>
      <View style={{width:'90%', height:70, backgroundColor:'#fff', borderRadius:50, flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:30}}>
        <TouchableOpacity
          style={{backgroundColor: colorHome, justifyContent:'center', alignItems:'center', width: 80, height: 50, borderRadius:50}}
          onPress={()=>{
            setScreen(0)
            setColorHome('#fdc1c9')
            setColorCart('#fff')
            setColorUser('#fff')
            getUser()
          }}
        >
          <Image source={require('../../../assets/icon/home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: colorCart, justifyContent:'center', alignItems:'center', width: 80, height: 50, borderRadius:50}}
          onPress={()=>{
            setScreen(1)
            setColorHome('#fff')
            setColorCart('#fdc1c9')
            setColorUser('#fff')
            getUser()
          }}
        >
          <Image source={require('../../../assets/icon/shopping.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: colorUser, justifyContent:'center', alignItems:'center', width: 80, height: 50, borderRadius:50}}
          onPress={()=>{
            setScreen(2)
            setColorHome('#fff')
            setColorCart('#fff')
            setColorUser('#fdc1c9')
            getUser()
          }}
        >
          <Image source={require('../../../assets/icon/user.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  
})