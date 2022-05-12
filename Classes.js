import React,{Component} from "react";
import {View,Text,TouchableHighlight,StyleSheet,StatusBar,Image,ScrollView,SafeAreaView,ImageBackground} from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


export default class Classes extends Component{
    render(){
        return(
           
            <View style={styles.container}>
                <StatusBar hidden ={true} barStyle='dark-content'/>
                <View style={{height:289,width:395,backgroundColor:'#00202F',}}>
                    <View style={styles.DesignEdit}>
                    <Image style={styles.DesignImage}source={require('./Download/Design.png')}/>
                    </View>
                    <TouchableHighlight style={styles.BackSwitch}
                    underlayColor='transparent'
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
                         <View style={styles.toptabedit}>
                             <View style={styles.TopTabVideos}>
                                <Text style={styles.VideoText}>Videos</Text>
                             </View>
                             <Text style={styles.TabText}>Chapter Test</Text>
                             <Text style={styles.TabText}>Resources</Text>
                             <Text style={styles.TabText}>QN Bank</Text>
                         </View>
                         <View style={styles.ViewBeforeScroolview}>   
                             <ScrollView vertical={true}>
                             <TouchableHighlight 
                             underlayColor='transparent'
                             onPress={()=>this.props.navigation.navigate('Lessons')}>
                                         
                                         <View style={styles.ScrollfirstView}>
                                     <View style={{height:297,width:309}}>
                                     <Image source={require('./Download/Classroom.jpg')}
                                         style={{height:'70%',width:'100%'}}/>
                                     </View>
                                      <Text style={styles.scrooviewtext}>Long chapter name can be shown here</Text>
                                      <View style={styles.scrollview11}>
                                         <View style={styles.FirstRadioButton}>
                                             <View style={styles.secondRadioButton}/>
                                       </View>
                                             <Text style={styles.chapterText}>Chapters 1</Text>
                                       <View style={styles.Radiobttonview2}>
                                             <View style={styles.secondRadioButton}/>
                                        </View>
                                             <Text style={styles.radiobuttontext}>Part 3</Text>
                                      </View>
                                 </View>
                                     </TouchableHighlight>
                                  <View style={styles.lastMainView}>
                                     <View style={{height:159,width:309}}>
                                       <Image source={require('./Download/Classroom.jpg')}
                                         style={{height:'100%',width:'100%'}}/>
                                     </View>
                                  <View>
                                     <Text>Long chapter name can be shown here</Text>
                                     <View></View>
                                   </View>
                                  </View>
                             </ScrollView>
                             
                         </View>
                </View>
                
            </View>
          
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    DarkThemeedit:{
        height:289,
        width:395,
        backgroundColor:'#00202F',
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
        marginTop:70,
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
    },
    toptabedit:{
        flexDirection:'row',
        marginTop:64
    },
    TopTabVideos:{
        borderBottomColor:'green',
        borderBottomWidth:2,
        marginLeft:30
    },
    VideoText:{
        marginTop:0,
        marginBottom:10,
        color:'#ffffff'
    },
    TabText:{
        marginLeft:30,
        color:'grey',
    },
    ViewBeforeScroolview:{
        height:523,marginLeft:37,marginTop:20
    },
    ScrollfirstView:{
        elevation:3,shadowColor:'black',height:317,width:312,shadowRadius:0,shadowColor:'black',borderColor:'black'
    },
    scrooviewtext:{
        marginTop:-70,fontSize:20,color:'black',fontWeight:'bold',marginRight:0
    },
    scrollview11:{
        flexDirection:'row',marginTop:5,marginLeft:60,marginBottom:2
    },
    FirstRadioButton:{
        height:16,width:16,borderColor:'#9F9F9F',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:0
    },
    secondRadioButton:{
        height:10,width:10,backgroundColor:'#9F9F9F',borderRadius:50
    },
    chapterText:{
        color:'#9F9F9F',fontSize:10,fontWeight:'bold',marginLeft:5
    },
    Radiobttonview2:{
        height:16,width:16,borderColor:'#9F9F9F',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:0,marginLeft:25
    },
    radiobuttontext:{
        color:'#9F9F9F',fontSize:10,fontWeight:'bold',marginLeft:5
    },
    lastMainView:{
        elevation:5,shadowColor:'black',marginTop:10
    }
})