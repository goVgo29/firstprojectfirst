import React ,{Component} from "react";
import { TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    View,
    StyleSheet,
    TextTouchableHighlight,
    Text,
    TextInput,
    Image,
    ScrollView
} from 'react-native';


export default class HomePage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.MainViewUptoClasses}>
                    <TouchableHighlight
                    underlayColor='white'  
                    onPress={()=>this.props.navigation.navigate('DrawerContent')}> 
                    <View style={styles.firstIconView}>
                         <Icon name='menu' size={20} color='blue'></Icon>
                    </View>
                    </TouchableHighlight>
                    <Image source={require('../Download/logo.png')} style={styles.firstImage}></Image>

                    <View style={styles.RadioButtonFirstView1}>
                        <View style={styles.RadioButtonSecondView1}></View>
                        <Text style={{color:'#00C458'}}> Classes</Text>
                    </View>
                </View>
                <View style={styles.MainTextView}>
                        <Text style={styles.Greetings}>Goodmorning</Text>
                        <Text style={styles.NameText}>Joseph Kuruvila</Text>
                </View>
                <View style={styles.OurClassView}>
                {/* <Image  source={require('../downloads/1.png')} ></Image> */}
                    <Text style={styles.OurClassText}>class</Text>
                    <Text style={styles.OurClassPlusTwo}>Plus Two Science</Text>
                </View>
                <View>
                    <ScrollView style={styles.SecondScrollView} horizontal={true}>
                        <TouchableHighlight style={styles.S1TouchableHiglight}
                        onPress={()=>this.props.navigation.navigate('Biology')}><View style={styles.S1TouchableHiglightView1}>
                        <View style={styles.S1TouchableHiglightView2}></View>
                        <Text style={{color:'#002333',fontWeight:'bold'}}> Biology</Text></View></TouchableHighlight>
                        <TouchableHighlight style={styles.S2TouchableHiglight}><View style={styles.S2TouchableHiglightView1}>
                        <View style={styles.S2TouchableHiglightView2}></View>
                        <Text style={{color:'#002333',fontWeight:'bold'}}> Physics</Text></View></TouchableHighlight>
                        <TouchableHighlight style={styles.S3TouchableHiglight}><View style={styles.S3TouchableHiglightView1}>
                        <View style={styles.S3TouchableHiglightView2}></View>
                        <Text style={{color:'#002333',fontWeight:'bold'}}> Chemistry</Text></View></TouchableHighlight>
                        <TouchableHighlight style={styles.S4TouchableHiglight}><View style={styles.S4TouchableHiglightView1}>
                        <View style={styles.S4TouchableHiglightView2}></View>
                        <Text style={{color:'#002333',fontWeight:'bold'}}> Mathamatics</Text></View></TouchableHighlight>
                    </ScrollView>
                    <Text style={styles.RecentCourseText}>Recent courses</Text>
                    <ScrollView style={styles.ThirdScrollview} horizontal={true}>
                        <TouchableHighlight style={styles.ThirdScrollviewTouchable1}>
                            <Image style={styles.Touchable1Image} source={require('../Download/chemistry.jpg')}/></TouchableHighlight>
                        <TouchableHighlight style={styles.ThirdScrollviewTouchable2}
                        onPress={()=>this.props.navigation.navigate('Biology')}>
                            <Image style={styles.Touchable2Image} source={require('../Download/bio.jpg')}/></TouchableHighlight>
                        <TouchableHighlight style={styles.ThirdScrollviewTouchable3}>
                            <Image style={styles.Touchable3Image} source={require('../Download/physics.jpg')}/></TouchableHighlight>
                    </ScrollView>
                    <ScrollView style={styles.fourthScrollview} horizontal={true}>
                        <View style={styles.fourthScrollviewMainView1}>
                            <View style={styles.fourthScrollviewsubMainView1}>
                                <View style={styles.View1}/>
                                <Text style={styles.Text1A}>Target live classes</Text>
                                <Text style={styles.Text1B}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            </View>
                            <TouchableHighlight style={styles.Touchable1}>
                               <Text style={styles.TouchableText1}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.fourthScrollviewMainView2}>
                            <View style={styles.fourthScrollviewsubMainView2}>
                                <View style={styles.View2}/>
                                <Text style={styles.Text2A}>Avail free online counselling section</Text>
                                <Text style={styles.Text2B}>By LearningHub's career experts</Text>
                            </View>
                            <TouchableHighlight style={styles.Touchable2}>
                               <Text style={styles.TouchableText2}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.fourthScrollviewMainView3}>
                            <View style={styles.fourthScrollviewsubMainView3}>
                                <View style={styles.View3}/>
                                <Text style={styles.Text3A}>Target live classes</Text>
                                <Text style={styles.Text3B}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            </View>
                            <TouchableHighlight style={styles.Touchable3}>
                               <Text style={styles.TouchableText3}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <View style={{height:20}}></View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    MainViewUptoClasses:{
        flexDirection:'row', marginTop:20
    },
    firstIconView:{
        height:30,width:30, paddingLeft:0,marginLeft:40
    },
    firstImage:{
        height:30,width:100,marginLeft:10,marginRight:10
    },
    RadioButtonFirstView1:{
        height:35,width:90, borderColor:'#00C458',borderWidth:1.5, backgroundColor:'white', flexDirection:'row',marginLeft:70,alignItems:'center',borderRadius:5
    },
    RadioButtonSecondView1:{
        height:16,width:16,backgroundColor:'#007345',marginLeft:5, borderRadius:50
    },
    MainTextView:{
        flexDirection:'column',marginTop:40,marginLeft:30
    },
    Greetings:{
        fontSize:15,fontWeight:'bold',marginLeft:5,color:'#002333'
    },
    NameText:{
        fontWeight:'bold',fontSize:24,marginLeft:5,color:'#002333',marginBottom:22
    },
    OurClassView:{
        backgroundColor:'#06014a', height:70,width:'75%',marginLeft:50,borderRadius:4
    },
    OurClassText:{
        color:'grey',marginTop:7 ,marginLeft:20
    },
    OurClassPlusTwo:{
        color:'white',marginTop:5 ,marginLeft:20,fontWeight:'bold'
    },
    SecondScrollView:{
        marginHorizontal:30, marginTop:20
    },
    S1TouchableHiglight:{
        height:40,width:90, borderColor:'#002333',borderWidth:2, backgroundColor:'white', marginHorizontal:0,borderRadius:8
    },
    S1TouchableHiglightView1:{
        flexDirection:'row',marginTop:7
    },
    S1TouchableHiglightView2:{
        height:20,width:20,backgroundColor:'#00C458',marginLeft:5, borderRadius:50
    },
    S2TouchableHiglight:{
        height:40,width:90, borderColor:'#002333',borderWidth:2, backgroundColor:'white', marginHorizontal:10,borderRadius:8
    },
    S2TouchableHiglightView1:{
        flexDirection:'row',marginTop:7
    },
    S2TouchableHiglightView2:{
        height:20,width:20,backgroundColor:'#00C458',marginLeft:5, borderRadius:50
    },
    S3TouchableHiglight:{
        height:40,width:100, borderColor:'#002333',borderWidth:2, backgroundColor:'white', marginHorizontal:2,borderRadius:8
    },
    S3TouchableHiglightView1:{
        flexDirection:'row',marginTop:7
    },
    S3TouchableHiglightView2:{
        height:20,width:20,backgroundColor:'#00C458',marginLeft:5, borderRadius:50
    },
    S4TouchableHiglight:{
        height:40,width:120, borderColor:'#002333',borderWidth:2, backgroundColor:'white', marginHorizontal:8,borderRadius:8
    },
    S4TouchableHiglightView1:{
        flexDirection:'row',marginTop:7
    },
    S4TouchableHiglightView2:{
        height:20,width:20,backgroundColor:'#00C458',marginLeft:5, borderRadius:50
    },
    RecentCourseText:{
        fontSize:15,marginTop:25,marginLeft:30,fontWeight:'bold',color:'#002333'
    },
    ThirdScrollview:{
        marginHorizontal:20, marginTop:15
    },
    ThirdScrollviewTouchable1:{
        height:120,width:180, borderColor:'#000000',borderWidth:1, backgroundColor:'white', marginHorizontal:10,borderRadius:8
    },
    Touchable1Image:{
        height:'99.9%',width:'99.9%',borderRadius:7
    },
    ThirdScrollviewTouchable2:{
        height:120,width:180, borderColor:'#000000',borderWidth:1, backgroundColor:'white', marginHorizontal:10,borderRadius:8
    },
    Touchable2Image:{ 
        height:'99.9%',width:'99.9%',borderRadius:7   
    },
    ThirdScrollviewTouchable3:{
        height:120,width:180, borderColor:'#000000',borderWidth:1, backgroundColor:'white', marginHorizontal:10,borderRadius:8
    },
    Touchable3Image:{     
        height:'99.9%',width:'99.9%',borderRadius:7 
    },
    fourthScrollview:{
        marginHorizontal:20, marginTop:20
    },
    fourthScrollviewMainView1:{
        height:300,width:210, borderColor:'green',borderWidth:2,backgroundColor:'#002333', marginHorizontal:10,borderRadius:8,
    },
    fourthScrollviewsubMainView1:{
        alignItems:'center',marginTop:10
    },
    View1:{
        height:80,width:80,backgroundColor:'#002E43',borderRadius:50,marginRight:50
    },
    Text1A:{
        color:'#ffffff', fontSize:16,fontWeight:'bold',marginTop:10
    },
    Text1B:{
        color:'#828e94', fontSize:14,fontWeight:'bold',textAlign:'center',marginLeft:30,marginRight:20,textAlign:'center'
    },
    Touchable1:{
        height:"15%",width:"60%",backgroundColor:'green',marginLeft:40,marginTop:20,borderRadius:5
    },
    TouchableText1:{
        marginTop:10,marginLeft:8
    },
    fourthScrollviewMainView2:{
        height:300,width:210, borderColor:'green',borderWidth:2,backgroundColor:'#002333', marginHorizontal:10,borderRadius:8
    },
    fourthScrollviewsubMainView2:{
        alignItems:'center',marginTop:10
    },
    View2:{
        height:80,width:80,backgroundColor:'#002E43',borderRadius:50,marginRight:50
    },
    Text2A:{
        color:'#ffffff', fontSize:16,fontWeight:'bold',marginTop:10,marginLeft:30
    },
    Text2B:{
        color:'#828e94', fontSize:14,fontWeight:'bold',textAlign:'center',marginLeft:30,marginRight:20,textAlign:'center',marginTop:47
    },
    Touchable2:{
        height:"15%",width:"60%",backgroundColor:'green',marginLeft:40,marginTop:20,borderRadius:5
    },
    TouchableText2:{
        marginTop:10,marginLeft:8
    },
    fourthScrollviewMainView3:{
        height:300,width:210, borderColor:'green',borderWidth:2,backgroundColor:'#002333', marginHorizontal:10,borderRadius:8,
    },
    fourthScrollviewsubMainView3:{
        alignItems:'center',marginTop:10
    },
    View3:{
        height:80,width:80,backgroundColor:'#002E43',borderRadius:50,marginRight:50
    },
    Text3A:{
        color:'#ffffff', fontSize:16,fontWeight:'bold',marginTop:10
    },
    Text3B:{
        color:'#828e94', fontSize:14,fontWeight:'bold',textAlign:'center',marginLeft:30,marginRight:20,textAlign:'center',marginTop:0
    },
    Touchable3:{
        height:"15%",width:"60%",backgroundColor:'green',marginLeft:40,marginTop:20,borderRadius:5
    },
    TouchableText3:{
        marginTop:10,marginLeft:8
    },
})