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

export default class StudentDetails extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                <Image source={ require('./Download/logo.png')} 
                  style={styles.logoView}/>
                    <View style={{flexDirection:'row'}}>
                        <Image source={ require('./Download/Icon.png')}
                        style={styles.logoEdit}> 
                        </Image>
                        <Text style={styles.iconText} >ICON</Text>
                    </View>
                    <Text style={styles.Studendetailedit}>Select your school board</Text>
                </View>
                <View style={styles.SecondScreen}>
                  <TextInput placeholder='Select board' placeholderTextColor='#446270' style={styles.fullnameEdit}/>
                  <TextInput placeholder='Select class' placeholderTextColor='#446270' style={styles.DetailsEdit}/>
                  <TouchableHighlight style={styles.RegisterBoxEdit}
                   underlayColor = 'transparent'
                   onPress={()=> this.props.navigation.navigate('HomeTour')}>
                      <Text style={{color:'#FFFFFF'}}>Continue</Text>
                  </TouchableHighlight>
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
        //flexDirection:'column',
        alignItems:'center',
    },
    logoView:{
        alignItems:'center',
        height:42,
        width:169,
        marginLeft:60 ,
        marginBottom:90,
        marginTop:0,
        
    },
    logoEdit:{
        height:126,
        width:126,
        marginLeft:80,
        marginBottom:60,
        marginTop:30,
        backgroundColor:'#FFFFFF',
        borderRadius:0
    },
    iconText:{
        marginTop:0,
        marginRight:0,
        position:'absolute',
        right:115,
        bottom:120,
        fontWeight:'bold',
        color:'#000000'
        
    },
    Studendetailedit:{
        alignItems:'center',
        height:24,
        width:222,
        fontWeight:'bold',
        fontSize:18,
        marginLeft:50,
        color:'#002333',
        marginTop:70,
        marginBottom:20,

    },
    SecondScreen:{
        backgroundColor:'#002333',
        height:286,
        width: 395,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginLeft:17.3,
        marginTop:0,
        marginBottom:20,
        
        
    },
    fullnameEdit:{
        height:51,
        width:311,
        marginBottom:10,
        marginLeft:8,
        backgroundColor:'#13394A',
        borderRadius:5,
        paddingLeft:10,
        marginTop:25,
        borderWidth:1,
        borderColor:'#007345',
    },
    DetailsEdit:{
        height:51,
        width:311,
        marginBottom:10,
        marginLeft:8,
        backgroundColor:'#13394A',
        borderRadius:5,
        paddingLeft:10,
        borderColor:'#007345',
        borderWidth:1

    },
    RegisterBoxEdit:{
        height:56,
        width:311,
        backgroundColor:'#00C458',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        borderRadius:5,
        marginTop:30

    }
})