
import React ,{Component} from "react";
import { TouchableHighlight } from "react-native";
import {
    View,
    StyleSheet,
    TextTouchableHighlight,
    Text,
    TextInput,
    Image
} from 'react-native';


export default class Otp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View >
                <Image source={ require('./Download/logo.png')} 
                style={styles.logoView}/>
                <Image source={ require('./Download/Icon2.png')}
                style={styles.logoEdit}/>
                <Text style={styles.VerificationEdit}> Verification code</Text>
                <Text style={styles.VerifiationSamlltext}>Please enter the verification code sent to</Text>
                <Text style={styles.NumberEdit}>+91 7907338174</Text>
                </View>
                <View style={styles.SecondScreen}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        <TextInput  placeholder='' placeholderTextColor='red' style={styles.otpedit}/>
                        
                    </View>
                    <View style={styles.TouchableMainView}>
                        <TouchableHighlight style={styles.TouchableEdit}
                          underlayColor = 'transparent'
                           onPress={()=> this.props.navigation.navigate('Register')}>
                            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:14}}>Resent OTP</Text>
                        </TouchableHighlight>
                        <Text style={styles.Resentedit}>Resent after 28s</Text>
                        <View style={styles.finalView}>
                            <Image source={require ('./Download/call.png')}
                            style={styles.imageCall} ></Image>
                            <Text style={styles.contactedit}>Contact US</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        height:812,
        width:375,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
    },
    logoView:{
        alignItems:'center',
        height:42,
        width:162,
        marginLeft:40 ,
        marginTop:40,    
    },
    logoEdit:{
        height:141.29,
        width:127.29,
        marginLeft:60,
        marginTop:125,  //95
        backgroundColor:'#F9F9F9',
        borderRadius:0
    },
    VerificationEdit:{
        width:156,
        height:24,
        color:'#002333',
        fontSize:20,
        alignItems:'center',
        marginLeft:70,
        marginTop:70,
        fontWeight:'bold'
    },
    NumberEdit:{
        fontWeight:'bold',
        marginBottom:20,
        color:'#002333',
        marginLeft:80,
        marginTop:30,
        marginBottom:20
    },
    SecondScreen:{
        backgroundColor:'#002333',
        height:267,
        width: 395,
        alignItems:'center',
        marginLeft:18,
        borderRadius:20
    },
    otpedit:{
        backgroundColor:'#062E40',
        width:45,
        height:45,
        marginLeft:5,
        borderRadius:6,
        marginTop:35,
        borderColor:'#13394A'
    },
    TouchableEdit:{
        height:56,
        width:311,
        backgroundColor:'#00C458',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5,
        borderRadius:5 ,
        marginTop:10,
        marginLeft:5
    },
    Resentedit:{
        marginLeft:10,
        height:12, 
         width:76,
         fontSize:10,
         color:'#446270'    
    },
    contactedit:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,
        color:'#00C458'
    },
    VerifiationSamlltext:{
        alignItems:'center', fontSize:14,width:258,height:16, color:'#9F9F9F', marginTop:5
    },
    imageCall:{
        height:16.2, width:12.21, marginTop:2
    },
    finalView:{
        flexDirection:'row', marginLeft:0, marginTop:20
    },
    TouchableMainView:{
        flexDirection:'column', alignItems:'center', justifyContent:'center'
    }

})