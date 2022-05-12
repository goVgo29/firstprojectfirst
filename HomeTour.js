import React ,{Component} from "react";
import {
    View,
    StyleSheet,
    TextTouchableHighlight,
    Text,
    TextInput,
    Image
} from 'react-native';

import Onboarding from "react-native-onboarding-swiper";
import { NavigationContainer } from "@react-navigation/native";


const HomeTour = ({navigation}) =>{
    return(
        <Onboarding
        onSkip={()=> navigation.navigate('HomePage')}
        onDone={()=> navigation.navigate('HomePage')}
  pages={[
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06014a',
      image: <Image source={require('./Download/study5.jpg')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        image: <Image source={require('./Download/study3.jpg')} 
        style={styles.SecondImage}/>,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5d018',
        image: <Image source={require('./Download/study8.png')}
        style={styles.thirdImage} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
   
  ]}
/>
    )
    

}
export default HomeTour;
const styles=StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06014a'
      },
      firstImage:{
          height:350,
           width:350,
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      SecondImage:{
          height:350,
           width:350,
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5d018' //'#a9d9d9'
      },
      thirdImage:{
          height:350,
           width:350,
      },
})