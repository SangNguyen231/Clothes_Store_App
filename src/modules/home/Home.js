import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ScrollView, Animated, Pressable, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import back from '../../../assets/back.png'
import { AntDesign } from '@expo/vector-icons'
import SimpleSelectButton from 'react-native-simple-select-button'


const Home = () => {
  const {height, windth} = Dimensions.get('window');
  const [choise, setChoise] =  useState('All');
  const [products, setProducts] = useState([]);

  const getAllProduct= async ()=>{
    fetch('https://63512fa53e9fa1244e57aeb0.mockapi.io/store/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  const checkButton=(category)=>{
    setChoise(category)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={back} style={{height:30, width:30}}></Image>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Welcome</Text>
        <TouchableOpacity>
          <Image style={styles.imageHeader}
                  source={{uri:'https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000'}}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}> 
        <TextInput placeholder='Search' style={styles.searchText}></TextInput>
        <TouchableOpacity>
          <AntDesign name='search1' size={27} style={styles.buttonSearch}></AntDesign>
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        <Image style={styles.banner} 
              source={{uri:'https://img.freepik.com/free-psd/fashion-store-banner-template_23-2148675200.jpg?w=2000'}}></Image>
      </View>

      <View style={{flex:1}}>
        
        <ScrollView contentContainerStyle={styles.categoryContainer} horizontal={true}>
            {/* <TouchableOpacity style={[styles.buttonCategory]}>
              <Text style={styles.textCategory}>All</Text>
            </TouchableOpacity> */}
            <View style={{width:60, marginRight:30}}>
              <SimpleSelectButton text="All" 
                                  buttonDefaultColor={'#E4E2E2'} 
                                  buttonSelectedColor={'pink'} 
                                  isChecked={choise==='All'?true:false} 
                                  textDefaultColor={'black'}
                                  textSelectedColor={'white'}
                                  onPress={()=>checkButton('All')}></SimpleSelectButton>
            </View>
            
            <View style={{width:60, marginRight:30}}>
              <SimpleSelectButton text="Men" 
                                  buttonDefaultColor={'#E4E2E2'} 
                                  buttonSelectedColor={'pink'} 
                                  textDefaultColor={'black'}
                                  textSelectedColor={'white'}
                                  isChecked={choise==='Men'?true:false} 
                                  onPress={()=>checkButton('Men')}></SimpleSelectButton>
            </View>

            <View style={{width:75, marginRight:30}}>
              <SimpleSelectButton text="Women" 
                                  buttonDefaultColor={'#E4E2E2'} 
                                  buttonSelectedColor={'pink'} 
                                  textDefaultColor={'black'}
                                  textSelectedColor={'white'}
                                  isChecked={choise==='Women'?true:false} 
                                  onPress={()=>checkButton('Women')}></SimpleSelectButton>
            </View>

            <View style={{width:60}}>
              <SimpleSelectButton text="Kid" 
                                  buttonDefaultColor={'#E4E2E2'} 
                                  buttonSelectedColor={'pink'} 
                                  textDefaultColor={'black'}
                                  textSelectedColor={'white'}
                                  isChecked={choise==='Kid'?true:false} 
                                  onPress={()=>checkButton('Kid')}></SimpleSelectButton>
            </View>
            
        </ScrollView>
      </View>

      <View style={styles.FlatList}>
        <FlatList data={products}
                  renderItem={
                    ({item, index})=>{
                      return(
                        <View style={styles.ListContainer}>
                          <View style={styles.itemContainer}>
                            <Image style={styles.imgProduct}
                                    source={{uri:item.imageModel}}>
                                    </Image>
                            <View style={{width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                              <View style={{width:'75%'}}>
                                <Text style={[styles.itemName]}>{item.name}</Text>
                                <Text style={[styles.itemPrice]}>{item.price}$</Text>
                              </View>
                              <TouchableOpacity style={styles.buttonCart}>
                                <AntDesign name='shoppingcart' size={20}></AntDesign>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      )
                    }
        } numColumns={2}></FlatList>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%',
    marginTop:5,
    padding:15,
  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    flex:1,
  },
  textHeader:{
    fontSize:22,
    fontWeight:'bold'
  },
  imageHeader:{
    width:55,
    height:55,
    borderRadius:33
  },
  searchContainer:{
    width:'95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:0.8,
  },
  searchText:{
    backgroundColor:'white',
    borderRadius:30,
    height:45,
    width:'85%',
    paddingLeft:15,
    elevation:15,
    shadowColor: 'black',
    fontSize:16
  },
  buttonSearch:{
    backgroundColor:'pink',
    padding:5,
    borderRadius:10,
    elevation:20,
    shadowColor: 'black',
  },
  bannerContainer:{
    width:'100%',
    elevation:20,
    shadowColor: 'black',
    flex:1.5
  },
  banner:{
    width:'100%',
    height:'100%',
    borderRadius:20,
    
  },
  categoryContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  buttonCategory:{
    width:90,
    height:35,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginRight:15
  },
  textCategory:{
    fontSize:16,
    textAlign:'center'
  },
  FlatList:{
    width:'100%',
    flex:4,
  },
  ListContainer:{
    width:'45%',
    height:'100%',
    margin:10,
  },
  itemContainer:{
    width:'100%',
    height:310,
    elevation:10,
    shadowColor:'black',
    borderRadius:15,
    backgroundColor:'white'
  },
  imgProduct:{
    width:'100%',
    height:'75%',
    borderRadius:15
  },
  itemName:{
    paddingTop:10,
    fontWeight:'bold',
  },
  itemPrice:{
    fontWeight:'bold',
    paddingTop:5,
    color:'gray'
  },
  buttonCart:{
    width:30,
    height:30,
    borderColor:'back',  
    borderRadius:12, 
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    elevation:5,
    shadowColor:'black'
  }
})