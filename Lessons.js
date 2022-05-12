import React,{Component} from "react";
import {View,Text,StyleSheet,Image,StatusBar,ImageBackground} from 'react-native'


export default class Lessons extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false}/>
                   <View style={styles.ImageView}>
                         <ImageBackground style={styles.ImageBackgroundEdit}
                         source={require('./Download/Classroom.jpg')}>
                             <Image style={styles.ImageEdit}  source={require('./Download/Play.png')}/>
                         </ImageBackground>
                         
                  </View>
                     <View style={styles.DisplayColor}>
                         <View style={styles.firstTextEdit}>
                             <View style={styles.MainTextView}>
                                <Text style={styles.MainText}>
                                    Long Chapter Name can be here shown here
                                </Text>
                             </View>
                              <View style={styles.DownlodButton}>
                                 <Image source={require('./Download/Downld.png')} style={{marginRight:50}}></Image>
                                 <Text style={styles.Downloadcolor}>Downloads</Text>
                              </View>
                         </View>
                         <View style={styles.PagesChangeEdit}>
                             <Image source={require('./Download/Previous.png')}
                             style={styles.PreviousImage}></Image>
                             <Text style={styles.TextPrevious}> Previous</Text>
                             <View style={{alignItems:'center',flexDirection:'row'}}>
                                      <View style={styles.Page1SwitchEdit}>
                                             <View style={styles.Page1SwitchEdit2}/>
                                       </View>
                                      <Text style={styles.pageedit}>Page 1</Text>
                             </View>
                             <Text style={styles.NextText1}>Next</Text>
                             <Image source={require('./Download/drawable-hdpi/Next.png')}
                             style={styles.NextImage}></Image>
                         </View>
                         <View style={styles.Box1}>
                             <Text style={{fontSize:12,color:'#ffffff',marginLeft:20,marginRight:20}}>Your sample question can be shown here no matter how long.</Text>
                             <View style={styles.Box1ImageView}>
                                 <Image style={styles.Box1Image} source={require('./Download/question.jpg')} />
                             </View>
                         </View>
                         <View style={styles.Box2}>
                             <Text style={{fontSize:12,color:'#446270'}}>Ask a question?</Text>
                             <View style={styles.Box22View}>
                                 <Text style={{fontWeight:'bold',color:'black'}}>Post</Text>
                             </View>
                         </View>
                         <View style={styles.Box3}>
                             <View style={styles.Box3ImageView}>
                                 <Image source={require('./Download/whatsapp.png')}></Image>
                             </View>
                             <Text style={styles.Box3text}>Chat with teacher</Text>
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
    ImageView:{
        width:395,
        height:235,
        position:'relative'
    },
    ImageBackgroundEdit:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    DisplayColor:{
        backgroundColor:'#00202F',
        height:577,
        width:395,
        //alignItems:'center'

    },
    firstTextEdit:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'grey',
        marginBottom:20,
    },
    MainTextView:{
        borderRightColor:'grey',
        borderRightWidth:2,
        marginRight:40,
        marginLeft:20,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        marginBottom:5,
    },
    MainText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        marginRight:40,
        marginLeft:10,
        marginBottom:10,
        marginTop:10
        
    },
    DownlodButton:{
        marginRight:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    Downloadcolor:{
        color:'white',
        marginRight:50,
        fontSize:8,
        marginTop:5
    },
    PagesChangeEdit:{
        flexDirection:'row',
        borderBottomColor:'grey',
        borderBottomWidth:2,
        marginTop:0,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10

    },
    PreviousImage:{
        marginBottom:15
    },
    NextText1:{
        fontSize:10,marginBottom:20,fontWeight:'bold',marginRight:5,color:'white'
    },
    NextText:{
        fontSize:8,
        marginBottom:20,
        fontWeight:'bold',
        marginRight:5
    },
    NextImage:{
        marginBottom:15,
        height:20,
        width:10
    },
    TextPrevious:{
        fontSize:8,
        marginRight:110,
        color:'white',
        marginTop:5,
        marginBottom:20
    },
    Page1SwitchEdit:{
        height:16,
        width:16,
        borderColor:'#00C458',
        borderWidth:1,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        marginLeft:0,
        marginRight:10,
        marginBottom:20
    },
    Page1SwitchEdit2:{
        height:10,
        width:10,
        backgroundColor:'#00C458',
        borderRadius:50
    },
    pageedit:{
        fontSize:10,
        marginRight:80,
        marginBottom:20,
        color:'#00C458'
    },
    Box1:{
        height:60,
        width:311,
        backgroundColor:'#000000',
        marginTop:150,
        marginLeft:37,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
        
    },
    Box2:{
        height:48,
        width:311,
        backgroundColor:'#062E40',
        borderColor:'#13394A',
        borderWidth:1.5,
        marginTop:20,
        marginLeft:37,
        borderRadius:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    Box3:{
        height:56,
        width:311,
        backgroundColor:'#00202F',
        borderColor:'#00C458',
        borderWidth:1.5,
        marginTop:20,
        marginLeft:37,
        flexDirection:'row',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
    },
    Box1ImageView:{
        height:30,
        width:30,
        borderRadius:50,
        backgroundColor:'white'
    },
    Box1Image:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    Box22View:{
        height:32,
        width:52,
        backgroundColor:'white',
        marginLeft:110,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3
    },
    Box3text:{
        fontSize:14,
        color:'#00C458',
        marginLeft:10,
        fontWeight:'bold'
    },


})