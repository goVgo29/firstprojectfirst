import React ,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native'


export default class Login extends Component{
    render(){
        return(
            <View style={styles.container} >
                <View  style={styles.logoView}>
                <Image source={ require('./Download/logo.png')} 
                style={styles.logoEdit}>
                </Image>
                <Text style={styles.textedit}>Enter your mobile number</Text>
                <Text style={styles.otpEdit}>
                    we will sent ypu on OTP to verify
                </Text>
                </View>
                <View style={styles.registerBackground} >
                    <View style={styles.registerView}>
                    <View style={styles.TextinputEdit}>
                    <TextInput
                    placeholder="+91"
                    placeholderTextColor='white'>
                    </TextInput>
                    </View>
                    <View style={styles.textInputmobilenum}>
                    <TextInput 
                    placeholder="Mobile Number"
                    placeholderTextColor='#446270'>
                    </TextInput>
                    </View>
                    </View>
                    <TouchableHighlight style={styles.continueEdit}
                    underlayColor = 'transparent'
                    onPress={()=> this.props.navigation.navigate('Otp')}>
                        <Text style={styles.touchableText}>
                            Continue
                        </Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        height:812,
        width:375,
        backgroundColor:'#FFFFFF',
        justifyContent:'center'
    },
    logoView:{
        alignItems:'center'    ,
        marginTop:20  
    },
    logoEdit:{
        height:60,
        width:250,
        marginBottom:40,
        marginTop:60   //90
    },
    textedit:{
        fontSize:20,
        fontWeight:'bold',
        color:'#002333',
        marginTop:300
    },
    otpEdit:{
        marginTop:5,
        fontSize:14
    },
    registerBackground:{
        height:195,
        width:395,
        backgroundColor:'#002333',
        marginTop:20,
        borderRadius:20,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    registerView:{
        height:'30%',
        width:'100%',
        backgroundColor:'#002333',
        marginBottom:0,
        borderRadius:0,
        flexDirection:'row'
    },
    TextinputEdit:{
        height:51,
        width:59,
        marginTop:0,
        marginLeft:40,
        backgroundColor:'#13394A',
        color:'white',
        fontStyle:'Gilroy-Regular ☞',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    textInputmobilenum:{
        height:51,
        width:244,
        marginTop:0,
        marginLeft:8,
        backgroundColor:'#13394A',
        borderRadius:5,
        paddingLeft:10
    },
    continueEdit:{
        height:56,
        width:311,
        backgroundColor:'#00C458',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        borderRadius:5,
        color:'white'    
    },
    touchableText:{
        color:'white'
    }
})