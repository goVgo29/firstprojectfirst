import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon  from "react-native-vector-icons/MaterialIcons";


import Contact from "./Contact";
import Account from "./Account";
import HomePage from "./BottomTab/HomePage";
import Recent from "./BottomTab/Recent";
import Exams from "./BottomTab/Exams";


const Tab=createBottomTabNavigator()

function MyTab() {
  return(
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {fontSize:12},
      tabBarItemStyle:{width:100,height:50},
      tabBarStyle:{backgroundColor:'black'}
    }}
    >
      <Tab.Screen name='HomePage' component={HomePage} 
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='home' size={24} color='blue' />:<Icon name='home' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Exams' component={Exams}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='article' size={24} color='blue' />:<Icon name='article' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Contact' component={Contact}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='contact-support' size={24} color='blue' />:<Icon name='contact-support' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Profile' component={Account}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='person' size={24} color='blue' />:<Icon name='person' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Recent' component={Recent} 
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='play-arrow' size={24} color='blue' />:<Icon name='play-arrow' size={24} color='#ffffff'/>
      }}/>
    </Tab.Navigator>
  )
}
export default function BottomTab(){
  return(
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}