import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/logo.png'
import back from '../../../assets/back.png'

const Cart = ({ data1, host }) => {

  const [dataCart, setDataCart] = useState()

  const getCart = async () => {
    await fetch('http://' + host + ':8080/cart/' + data1.userId, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then((data) => {
        setDataCart(data)
        console.log(data)
      })
  }
  const [total,setTotal] = useState()
  const getTotal = async () => {
    await fetch('http://' + host + ':8080/cart/getTotal/' + data1.userId, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then((data) => {
        setTotal(data)
        console.log(data)
      })
  }

  useEffect(() => {
    getCart()
    getTotal()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 30, width: '90%', alignItems: 'center', justifyContent: 'space-around', height: 120, borderRadius: 20 }}>
          <Image source={{ uri: item.imageProduct }} style={{ width: 100, height: 100, borderRadius: 20 }} />
          <View style={{}}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '400' }}>{item.name}</Text>
            <Text style={{ marginTop: 30, fontSize: 20, fontWeight: '700' }}>${item.price}</Text>
          </View>
          <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ marginLeft: 40 }}>
              <TouchableOpacity
                style={{ height: 20, width: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                onPress={() => {
                  fetch('http://' + host + ':8080/cart/' + item.cartId, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                  })
                  getCart()
                  getTotal()
                }}
              >
                <Text style={{ color: '#fff' }}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 5 }}>
              <TouchableOpacity
                style={{ width: 25, height: 25, backgroundColor: '#fdc1c9', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
              >
                <Text style={{ color: 'white', fontSize: 19 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ width: 20, textAlign: 'center', fontSize: 17 }}>{item.quantity}</Text>
              <TouchableOpacity
                style={{ width: 25, height: 25, backgroundColor: '#fdc1c9', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
              >
                <Text style={{ color: 'white', fontSize: 19 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={back} style={{ height: 30, width: 30 }}></Image>
        </TouchableOpacity>
        {/* <Text style={styles.textHeader}>Welcome</Text> */}
        <Image source={logo} style={{ height: 60, width: 100 }}></Image>
        <TouchableOpacity>
          <Image style={styles.imageHeader}
            source={{ uri: 'https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000' }}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataCart}
        renderItem={renderItem}
        style={{ width: '100%', height: 500 }}
      />
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
        <View>
          <Text style={{ color: '#bababa', fontSize: 17 }}>Total</Text>
          <Text style={{ fontSize: 25, fontWeight: '700', marginTop: 5 }}>${total}</Text>
        </View>
        <TouchableOpacity
          style={{ marginTop: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: 150, height: 60, backgroundColor: '#fdc1c9' }}
          onPress={()=>{
            getTotal()
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 30
  },
  imageHeader: {
    width: 55,
    height: 55,
    borderRadius: 33
  },
})