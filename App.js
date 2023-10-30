import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { product2 } from './src/data';
import MenuApp from './src/component/MenuApp';
import Screen2 from './src/component/Screen2';

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = () => {
  //   const results = product2.filter((item) =>
  //     item.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setSearchResults(results);
  //   // Chuyển kết quả tìm kiếm và searchText qua trang Screen2
  //   navigation.navigate('Screen2', { searchResults });
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuApp">
        <Stack.Screen
          name="MenuApp"
          component={MenuApp}
          options={{
            headerStyle: {
              backgroundColor: '#1BA9FF',
            },
            headerTitle: () => (
              <View style={{ marginRight: 10, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Image source={require('./src/image/search.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TextInput
                  style={{ backgroundColor: '#fff', width: 200, height: 40, marginLeft: 10 }}
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />
              </View>
            ),
            headerLeft: () => (
              <View style={{ marginRight: 10 }}>
                <Image source={require('./src/image/muiten.png')} style={{ width: 30, height: 30 }} />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Image source={require('./src/image/cart.png')} style={{ width: 30, height: 30 }} />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          // initialParams={{ searchResults }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
