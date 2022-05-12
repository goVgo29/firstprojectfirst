import React,{Component} from "react";
import {
    view,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";


export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'column'}}>
                   <View style={{height:32, width:32,marginTop:40,backgroundColor:'002333',marginLeft:20}}>
                     <TouchableHighlight style={{height:'100%'}}
                     onPress={()=> this.props.navigation.navigate('MyTab')}>
                        <Image source={require('../Download/Menu.png')}
                        style={{height:'100%',marginRight:'100%',width:'100%'}} />
                     </TouchableHighlight>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                       <View style={{height:60,width:60,backgroundColor:'#00C458', borderRadius:50, borderColor:'#ffffff',borderWidth:3,marginLeft:20}}>
                       </View>
                       <View style={{marginLeft:20}}>
                           <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Joseph Kuruvila</Text>
                           <Text style={{color:'grey'}}>ID:1234</Text>
                       </View>
                       <View style={{height:9.9, width:6.36,marginTop:30,backgroundColor:'002333',marginLeft:20}}>
                          <TouchableHighlight style={{height:'100%'}}
                          onPress={()=> this.props.navigation.navigate('MyTab')}>
                             <Image source={require('../Download/drawable-hdpi/Next.png')}
                              style={{height:'100%',marginRight:'100%',width:'100%'}} />
                         </TouchableHighlight>
                       </View>
                   </View>
                </View>
                <View style={{flexDirection:'column',marginTop:30}}>
                    <View style={{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}> Exam corner</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}> Subscriptions</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}>Analytics</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}>Downloads</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}>Notifications</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomLeftRadius:0,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}>Refferals</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:18,borderBottomColor:'grey',borderBottomWidth:1,borderBottomLeftRadius:0,borderBottomEndRadius:40,marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'#00C458',borderWidth:1,borderRadius:5,marginBottom:15}}></View>
                        <Text style={{color:'grey',marginLeft:20}}>Share app</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,borderBottomColor:'white',marginLeft:25}}>
                        <View style={{height:30, width:30,borderColor:'red',borderWidth:1,borderRadius:5,marginBottom:10}}></View>
                        <Text style={{color:'red',marginLeft:20}}>Logout</Text>
                    </View>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                    <TouchableHighlight style={{height:47,width:193,borderWidth:1,borderColor:'#00C458',alignItems:'center',justifyContent:'center',borderRadius:7}}>
                        <Text style={{color:'#00C458'}}>Enquire Now</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#002333'
    }
})