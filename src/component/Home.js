import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { product } from '../data'

function Home() {
  return (
    <View>
      <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <View>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row",flex:1 }}>
              <View style={{ flexDirection: "row", margin: 10,flex:7 }}>
                <Image
                  source={item.image}
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 15, color: "gray" }}>{item.shop}</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'red', height: 50, flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }}>Chat</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Home;
