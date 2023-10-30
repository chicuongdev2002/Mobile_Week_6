import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React  from "react";
import {View,Image} from "react-native";
const Tab=createBottomTabNavigator();
import Home from "./Home";
import Screen2 from "./Screen2";
export default function MenuApp(){
return(
    <Tab.Navigator
    tabBarOptions={{
        showLabel: false, // Ẩn tiêu đề
        style: {
          backgroundColor: '#1BA9FF', // Đặt màu nền
        },
      }}

    >
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/khac.png')} style={{width:30,height:30}}/>
            ),
        }}
        />
           <Tab.Screen 
        name="Screen2" 
        component={Screen2}
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/home.png')} style={{width:30,height:30}}/>
            ),
           
        }}
        />
           <Tab.Screen 
        name="Favorite" 
        component={''}
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=>(
                <Image source={require('../image/back.png')} style={{width:30,height:30}}/>
            )
        }}
        />
    </Tab.Navigator>
);
}