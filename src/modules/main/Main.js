import { FlatList, StyleSheet, Text, View, Animated, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'

import OnboardingItem from './OnboardingItem'
import slides from './slides'
import Paginator from './Paginator'

export default Main = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const scrollX = useRef(new Animated.Value(0)).current

    const slidesRef = useRef(null)

    const ViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    return (
        <View>
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff' }}>
                <Image source={require('../../../assets/logo.png')} style={{width:200, height:150}}/>
                <View style={{}}>
                    <FlatList
                        style={{ marginTop:-400 }}
                        data={slides}
                        renderItem={({ item }) => <OnboardingItem item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={ViewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                    />
                </View>
                <View style={{marginTop:-370}}>
                    <Paginator data={slides} scrollX={scrollX} />
                </View>
                <View style={{ top: 0 }}>
                    <View style={[{ width: 250, height: 40, backgroundColor: 'rgba(0,101,255,255)', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }]}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("Login")
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ width: 250, height: 40, backgroundColor: 'rgba(241,243,247,255)', alignItems: 'center', justifyContent: 'center', borderRadius: 50, top: 10 }]}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("Register")
                            }}
                        >
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})