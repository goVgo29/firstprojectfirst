import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import Login from './Login';
import Otp from './Otp';
import Register from './Register';
import StudentDetails from './StudentDetails';
import HomeTour from './HomeTour';
import HomePage from './BottomTab/HomePage';
import Contact from './Contact';
import Exams from './BottomTab/Exams';
import Account from './Account';
import Recent from './BottomTab/Recent';
import DrawerContent from './Drawer/DrawerContent'
import Settings from './Settings';
import Biology from './Biology';
import Classes from './Classes';
import Videos from './TopTab/Videos';
import QnBank from './TopTab/QnBank';
import ChapterText from './TopTab/ChapterText';
import Resources from './TopTab/Resources';
import Lessons from './Lessons'



const Stack=createStackNavigator();


function NewStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name='Login'
      component ={Login}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='Otp'
      component ={Otp}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='Register'
      component ={Register}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='StudentDetails'
      component ={StudentDetails}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='HomeTour'
      component ={HomeTour}
      options={{headerShown:false}}/>
      {/* <Stack.Screen 
      name='HomePage'
      component ={MyTab}
      options={{headerShown: false}}/> */}
      <Stack.Screen 
      name='HomePage'
      component={MyDrawer}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='Biology'
      component ={Biology}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='Classes'
      component ={Classes}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name='Lessons'
      component ={Lessons}
      options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
const Tab=createBottomTabNavigator()
const Drawer=createDrawerNavigator()
const TopTab=createMaterialTopTabNavigator()

function MyTopTab(){
  return(
    
   <TopTab.Navigator>
      <View style={styles.container}>
      <View style={{height:289,width:395,backgroundColor:'#00202F',}}>
                    <View style={styles.DesignEdit}>
                    <Image style={styles.DesignImage}source={require('./Download/Design.png')}/>
                    </View>
                    <TouchableHighlight style={styles.BackSwitch}
                            onPress={()=> this.props.navigation.navigate('HomePage')}>
                            <View>
                                <Image source={require('./Download/Back.png')}></Image>
                            </View>
                         </TouchableHighlight >
                             <Text style={styles.HeadingText}>Long chapter name can be shown here</Text>
                         <View style={styles.subheaderEdit1}>
                              <View style={styles.subHeaderChapteredit}>
                                     <View style={styles.subHeaderInside}/>
                                 </View>
                             <Text style={styles.TextchapterEdit}>Chapters 1</Text>
                             <View style={styles.subHeaderEdit2}>
                                     <View style={styles.subHeaderInside}/>
                                 </View>
                             <Text style={styles.TextchapterEdit}>Part 3</Text>
                         </View>
      </View>
      </View>
          <TopTab.Screen 
             name='Videos'
             component={Videos}/>
             <TopTab.Screen 
             name='QnBank'
             component={QnBank}/>
             

   </TopTab.Navigator>
  )
}

function MyTab() {
  return(
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {fontSize:12},
      tabBarItemStyle:{width:100,height:50},
      tabBarStyle:{backgroundColor:'black'}
    }}>
      <Tab.Screen name='HomePage' component={HomePage} 
      options={{
        headerShown: false,
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='home' size={24} color='blue' />:<Icon name='home' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Exams' component={Exams}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='article' size={24} color='blue' />:<Icon name='article' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Contact' component={Contact}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='phone' size={24} color='blue' />:<Icon name='phone' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Profile' component={Account}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='person' size={24} color='blue' />:<Icon name='person' size={24} color='#ffffff'/>
      }}/>
      <Tab.Screen name='Recent' component={Recent} 
      options={{
        headerShown: false,
        tabBarActiveTintColor:'blue',
        tabBarInActiveTintColor:'grey',
        tabBarIcon:({focused})=> focused? <Icon name='play-arrow' size={24} color='blue' />:<Icon name='play-arrow' size={24} color='#ffffff'/>
      }}/>
    </Tab.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={()=> <DrawerContent/>}>
      <Drawer.Screen
      name='Menu'
      component={MyTab}
      options={{headerShown:false}}/> 
    </Drawer.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
       <NewStack/>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  DesignEdit:{
    height:180.86,
    width:238.77,
    position:'absolute'
},
DesignImage:{
    height:'100%',
    width:'100%',
    marginLeft:258,
    bottom:30
},BackSwitch:{
    height:32,
    width:32,
    marginLeft:30,
    marginTop:0
},
HeadingText:{
    fontSize:24,
    marginTop:50,
    color:'#ffffff',
    fontWeight:'bold',
    marginLeft:30,
    marginRight:30
},
subheaderEdit1:{
    flexDirection:'row',
    marginTop:15,
    marginLeft:30
},
subHeaderChapteredit:{
    height:16,
    width:16,
    borderColor:'#00C458',
    borderWidth:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:0
},
subHeaderInside:{
    height:10,
    width:10,
    backgroundColor:'#00C458',
    borderRadius:50
},
TextchapterEdit:{
    color:'#00C458',
    fontSize:10,
    fontWeight:'bold',
    marginLeft:5
},
subHeaderEdit2:{
  height:16,
  width:16,
  borderColor:'#00C458',
  borderWidth:1,
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  marginTop:0,
  marginLeft:25
}
})