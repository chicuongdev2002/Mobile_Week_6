import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { product2 } from '../data';
import { useRoute } from '@react-navigation/native';
function Screen2() {
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const route = useRoute();
  //   // Lấy kết quả tìm kiếm từ route.params và cập nhật trạng thái searchResults
  //   const { searchResults } = route.params;
  //   setSearchResults(searchResults);
  // }, [route.params]);
  return (
    <View>
      <FlatList
        data={product2}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View style={styles.productInfo}>
              <Image
                source={item.image}
                style={styles.productImage}
              />
                 <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image
                source={item.rate}
                style={styles.productRate}
              />
                 <View style={{width:20}}></View>
                <Text style={styles.productQuantity}>({item.quantity})</Text>
            </View>
            <View style={{flexDirection:'row',alignContent:'space-between'}}>
            <Text style={styles.productPrice}>{item.price}00</Text>
            <View style={{width:50}}></View>
                <Text style={styles.productDiscount}>-{item.discount}%</Text>
            </View>
            </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    //flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  productInfo: {
    // flexDirection: "row",
    flex: 1,
  },
  productImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  productRate: {
    width: 100,
    height: 15,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  productShop: {
    fontSize: 15,
    color: "gray",
  },
  productActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chatButton: {
    backgroundColor: "red",
    height: 50,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  chatButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  productAdditionalInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productQuantity: {
    fontSize: 12,
  },
  productPrice: {
    fontSize: 12,
    color:'#000',
    fontWeight:'bold'
  },
  productDiscount: {
    fontSize: 12,
  },
});

export default Screen2;
