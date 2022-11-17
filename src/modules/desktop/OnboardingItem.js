import { StyleSheet, Text, View, useWindowDimensions, Image, Animated, ImageBackground } from 'react-native'
import React, {useState, useRef} from 'react'

const MainItem = ({item}) => {
  const { width } = useWindowDimensions()
    
  return (
    <View style={{}}>
      <Image source={item.image} style={{width, resizeMode:'contain', flex:1}}/>
    </View>
  )
}

export default MainItem

const styles = StyleSheet.create({
})