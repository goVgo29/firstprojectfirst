import React,{Component} from "react";
import {View,Text,Image,TouchableHighlight,ScrollView,StyleSheet} from 'react-native';



export default class Biology extends Component{
    render(){
        return(
            <View style={styles.mainView}>
                <View style={styles.View1} >
                  <View style={styles.firstImageView}>
                    <Image style={styles.firstImage}source={require('./Download/Design.png')}/>
                    </View>
                         <TouchableHighlight style={styles.firstTouchabl}
                            onPress={()=> this.props.navigation.navigate('HomePage')}>
                            <View>
                                <Image source={require('./Download/Back.png')}></Image>
                            </View>
                         </TouchableHighlight >
                             <Text style={styles.TitleText}>Biology</Text>
                         <View style={styles.InsideView}>
                              <View style={styles.RadiobuttonFirstView}>
                                     <View style={styles.RadiobuttonSecondView}/>
                                 </View>
                             <Text style={styles.RadiobuttonFirstText}> 12 Chapters</Text>
                             <View style={styles.RadiobuttonFirstView2}>
                                     <View style={styles.RadiobuttonSecondView}/>
                                 </View>
                             <Text style={styles.RadiobuttonSecondText}> 124 hours</Text>
                         </View>
                </View>
                <View style={styles.View2}>
                     <ScrollView Vertical={true}>
                       <TouchableHighlight
                       underlayColor='transparent'
                       onPress={()=>this.props.navigation.navigate('Classes')}>
                          <View style={styles.SecondTouchableMainView}>
                             <Text style={styles.Sentences}>Long chapter name can be shown here</Text>
                             <View style={styles.secondMainView}>
                             <View  style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>Chapter 1</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <View style={styles.thirdRadiobuttonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>3 Parts</Text>
                              </View>
                             </View>
                           </View>
                      </TouchableHighlight>
                      <View style={styles.View3}>
                          <Text style={styles.Sentences}>Long chapter name can be shown here</Text>
                          <View style={styles.secondMainView}>
                             <View  style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>Chapter 1</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>3 Parts</Text>
                             </View>
                          </View>
                      </View>
                      <View style={styles.View3}>
                          <Text style={styles.Sentences}>Long chapter name can be shown here</Text>
                          <View style={styles.secondMainView}>
                             <View  style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>Chapter 1</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>3 Parts</Text>
                             </View>
                          </View>
                      </View>
                      <View style={styles.View3}>
                          <Text style={styles.Sentences}>Long chapter name can be shown here</Text>
                          <View style={styles.secondMainView}>
                             <View  style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>Chapter 1</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>3 Parts</Text>
                             </View>
                          </View>
                      </View>
                      <View style={styles.View3}>
                          <Text style={styles.Sentences}>Long chapter name can be shown here</Text>
                          <View style={styles.secondMainView}>
                             <View  style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>Chapter 1</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <View style={styles.SecondradioButtonFirstView}>
                                     <View style={styles.SecondradioButtonSecondView}/>
                                 </View>
                                 <Text style={{marginLeft:10}}>3 Parts</Text>
                             </View>
                          </View>
                      </View>
                     </ScrollView>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    mainView:{
        flex:1
    },
    View1:{
        backgroundColor:'#00202F',height:235,width:395
    },
    firstImageView:{
        height:180.86,width:238.77,position:'absolute'
    },
    firstImage:{
        height:'100%',width:'100%',marginLeft:258,bottom:30
    },
    firstTouchabl:{
        height:32,width:32,marginLeft:30,marginTop:20
    },
    TitleText:{
        fontSize:24,marginTop:50,color:'#ffffff',fontWeight:'bold',marginLeft:30
    },
    InsideView:{
        flexDirection:'row',marginTop:15,marginLeft:30
    },
    RadiobuttonFirstView:{
        height:16,width:16,borderColor:'#00C458',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:0
    },
    RadiobuttonSecondView:{
        height:10,width:10,backgroundColor:'#00C458',borderRadius:50
    },
    RadiobuttonFirstText:{
        color:'#00C458',fontSize:10,fontWeight:'bold',marginLeft:5
    },
    RadiobuttonFirstView2:{
        height:16,width:16,borderColor:'#00C458',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:0,marginLeft:25
    },
    RadiobuttonSecondText:{
        color:'#00C458',fontSize:10,fontWeight:'bold',marginLeft:5
    },
    View2:{
        marginTop:-20
    },
    SecondTouchableMainView:{
        height:115,width:311,shadowColor:'black',elevation:5,backgroundColor:'white',marginLeft:40,borderRadius:5
    },
    Sentences:{
        fontSize:18,fontWeight:'bold',color:'#002333',marginLeft:30,marginRight:40
    },
    secondMainView:{
        flexDirection:'row',marginLeft:30,marginTop:20
    },
    SecondradioButtonFirstView:{
        height:16,width:16,borderColor:'#9F9F9F',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:3
    },
    SecondradioButtonSecondView:{
        height:10,width:10,backgroundColor:'#9F9F9F',borderRadius:50
    },
    thirdRadiobuttonFirstView:{
        height:16,width:16,borderColor:'#9F9F9F',borderWidth:1,borderRadius:50,alignItems:'center',justifyContent:'center',marginLeft:40,marginTop:3
    },
    View3:{
        height:115,width:311,shadowColor:'black',elevation:5,backgroundColor:'white',marginLeft:40,marginTop:10,borderRadius:5
    },
})
