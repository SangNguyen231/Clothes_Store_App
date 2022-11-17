import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'


const Profile = () => {

  const [visible, setVisible] = useState(false)

  const [checkMale, setCheckMale] = useState(true)
  const [checkFemale, setCheckFemale] = useState(false)

  const [firstName, setFirstName] = useState('Nguyễn Trần Phước')

  const [lastName, setLastName] = useState('Sang')

  const [gender, setGender] = useState('Male')

  const [birthDay, setBirthDay] = useState('23/1/2001')

  const [date, setDate] = useState(new Date());
  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
    });
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setBirthDay(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
  };

  return (
    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#e2dcdc', '#e7dbd7', '#e8dad9']} style={styles.linearGradient}>
      <View style={{ backgroundColor: '#ebe7e5', width: 350, borderRadius: 20, marginTop: 60 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 30 }}>
          <Image source={require('../../../assets/icon/user1.png')} style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: '#625d5a' }}>{firstName} {lastName}</Text>
            <Text style={{ color: 'gray' }}>Name</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 30 }}>
          <Image source={require('../../../assets/icon/telephone.png')} style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: '#625d5a' }}>0898899703</Text>
            <Text style={{ color: 'gray' }}>Phone number</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 30 }}>
          <Image source={require('../../../assets/icon/gender.png')} style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: '#625d5a' }}>{gender}</Text>
            <Text style={{ color: 'gray' }}>Gender</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 30 }}>
          <Image source={require('../../../assets/icon/birthday.png')} style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: '#625d5a' }}>{birthDay}</Text>
            <Text style={{ color: 'gray' }}>Date of birth</Text>
          </View>
        </View>
        <View style={{ height: 20, width: 0 }}></View>
      </View>
      <View style={{ backgroundColor: '#ebe7e5', width: 350, borderRadius: 20, marginTop: 20 }}>
        <TouchableOpacity
          style={{ width: '100%', padding: 12, alignItems: 'center', flexDirection: 'row', marginLeft: 20, marginTop: 10 }}
          onPress={() => {
            if (checkMale == true) {
              setCheckMale(true)
              setCheckFemale(false)
            } else {
              setCheckMale(false)
              setCheckFemale(true)
            }
            setVisible(true)
          }}
        >
          <Image source={require('../../../assets/icon/edit.png')} style={{ height: 30, width: 30 }} />
          <Text style={{ color: '#625d5a', fontSize: 17, marginLeft: 20, width: 220 }}>Edit Profile</Text>
          <Image source={require('../../../assets/icon/next.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: '100%', padding: 12, alignItems: 'center', flexDirection: 'row', marginLeft: 20, marginTop: 10 }}
          onPress={() => {

          }}
        >
          <Image source={require('../../../assets/icon/setting.png')} style={{ height: 30, width: 30 }} />
          <Text style={{ color: '#625d5a', fontSize: 17, marginLeft: 20, width: 220 }}>Settings</Text>
          <Image source={require('../../../assets/icon/next.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <View style={{ height: 10, width: 0 }}></View>
      </View>
      <Modal
        visible={visible}
      >
        <View>
          <View style={{ backgroundColor: '#0a9cf9', height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => {
                setVisible(false)
              }}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 80, color: 'white', fontSize: 18 }}>Personal information</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
            <View style={{ marginLeft: 30, width: '70%' }}>
              <View>
                <TextInput
                  value={firstName}
                  style={{ fontSize: 17 }}
                  placeholder='Enter your first name'
                  onChangeText={setFirstName}
                />
              </View>
              <View style={{ backgroundColor: '#bbbbbb', width: '100%', height: 1, marginTop: 5 }}></View>
              <View style={{ marginTop: 10 }}>
                <TextInput
                  value={lastName}
                  style={{ fontSize: 17 }}
                  placeholder='Enter your last name'
                  onChangeText={setLastName}
                />
              </View>
              <View style={{ backgroundColor: '#bbbbbb', width: '100%', height: 1, marginTop: 10 }}></View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={showMode}
                >
                  <Text style={{ fontSize: 17 }}>{birthDay}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#bbbbbb', width: '100%', height: 1, marginTop: 10 }}></View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  checked={checkMale}
                  onPress={() => {
                    setCheckMale(true)
                    setCheckFemale(false)
                    setGender('Male')
                  }}
                />
                <Text>Male</Text>
                <CheckBox
                  checked={checkFemale}
                  onPress={() => {
                    setCheckMale(false)
                    setCheckFemale(true)
                    setGender('Female')
                  }}
                />
                <Text>Female</Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 120, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,101,255,255)',
                width: '100%',
                borderRadius: 20,
                padding: 12,
                alignItems: 'center',
                width: '80%',
              }}
              onPress={() => { setVisible(false) }}
            >
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
    alignItems: 'center'
  },
})