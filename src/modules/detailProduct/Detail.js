import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ReadMore from "@fawazahmed/react-native-read-more";

export default function Detail({ navigation }) {
  const route = useRoute();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(route.params);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageProduct }} style={styles.image}></Image>
      </View>

      <View style={styles.textName}>
        <Text style={[styles.text, { width: "60%" }]}>{data.name}</Text>
        <Text style={styles.text}>${data.price}</Text>
      </View>

      <ScrollView style={{marginLeft:30, marginRight:30, marginTop:10,marginBottom:10}}>
            {/* <Text style={styles.describe}>{data.describe}</Text> */}
            <ReadMore style={styles.describe}>
                {data.describe}
            </ReadMore>
      </ScrollView>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.textBuy}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCart}>
          <FontAwesome5 name="cart-plus" size={20} color="pink" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    height: "62%",
    width: "100%",
    elevation: 30,
    shadowColor: "black",
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  textName: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    marginBottom: 0,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  describe: {
    color: "#B9B9B9",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnBuy: {
    width: "75%",
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  textBuy: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft:30,
    marginRight:30,
    marginBottom:20
  },
  btnCart: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
});
