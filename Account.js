import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';

export default class Account extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View>
                  <View style={styles.mainView}>
                         <View style={styles.FirstImageView}>
                              <Image source={require('./Download/Design.png')}
                                  style={styles.firstImage}/>
                         </View>
                          <Text style={styles.HeadlineTex}>Profile</Text>
                          <View style={styles.SecondImageView}>
                             <Image source={require('./Download/Bell2.png')}
                             style={styles.SecondImage}/>
                         </View>
                         <View style={styles.ThirdImageView}>
                             <Image source={require('./Download/Menu2.png')}
                             style={styles.ThirdImage}/>
                             </View>
                                </View>
                            <View style={styles.SecondView}>
                                 <View style={styles.SecondView1}>
                                 <View style={styles.DetailsMainView}>
                                  <View style={styles.DetailsImageView}></View>
                                  <View style={styles.DetailsNameView}>
                                      <Text style={styles.DetailsNameText}>Joseph Kuruvila</Text>
                                      <Text style={styles.DetailsIDText}>ID : 123456789</Text>
                                    </View>
                                 </View>
                                 <View style={{borderBottomColor:'#EEEEEE',borderBottomWidth:1.5}}>
                                       <Text style={styles.PersonalText}>Personal Info</Text>
                                   </View>
                                     <View style={styles.PersonalSettingView}>
                                           <Text style={styles.PersonalSettingTextLeft}>Account Settings</Text>
                                          <Text style={styles.PersonalSettingTextRight1}>Aaron Taylor</Text>
                                      </View>
                                      <View style={styles.PersonalSettingView}>
                                        <Text style={styles.PersonalSettingTextLeft}>Email</Text>
                                        <Text style={styles.PersonalSettingTextRight2}>emaidid123@server.com</Text>
                                       </View>
                                      <View style={styles.PersonalSettingView}>
                                        <Text style={styles.PersonalSettingTextLeft}>Number</Text>
                                         <Text style={styles.PersonalSettingTextRight3}>+91 9876543210</Text>
                                     </View>
                                     <View style={{borderBottomColor:'#EEEEEE',borderBottomWidth:1.5}}>
                                       <Text style={styles.PersonalText}>Course Info</Text>
                                   </View>
                                     <View style={styles.PersonalSettingView}>
                                           <Text style={styles.PersonalSettingTextLeft}>Center</Text>
                                          <Text style={styles.CourseInfoText1}>Inmakes edu</Text>
                                      </View>
                                      <View style={styles.PersonalSettingView}>
                                        <Text style={styles.PersonalSettingTextLeft}>Course</Text>
                                        <Text style={styles.CourseInfoText2}>Plus Two Science</Text>
                                       </View>
                                      <View style={styles.PersonalSettingView}>
                                        <Text style={styles.PersonalSettingTextLeft}>Payment Status</Text>
                                         <Text style={styles.CourseInfoText3}>Free</Text>
                                     </View>
                                     <View style={styles.PersonalSettingView}>
                                        <Text style={styles.PersonalSettingTextLeft}>Expiry Date</Text>
                                         <Text style={styles.CourseInfoText4}>Not Applicable</Text>
                                     </View>
                          </View>
                          <View style={styles.CustomPaymentMainView}>
                                  <View style={styles.CustomImageView}>
                                  <Image style={styles.CustomImage}
                                    source={require('./Download/Bell.png')}/>
                                  </View>
                                  <Text style={styles.CustomText}>
                                  Custom Payment
                                 </Text>
                          </View>
                          <View style={styles.RefferalsView}> 
                                <View style={styles.RefferalsImageView}>
                                <Image style={styles.RefferalImage}
                                source={require('./Download/share.png')}/>
                                </View>
                                 <Text style={styles.RefferalsText}>
                                  Refferals
                                 </Text>
                          </View>
                          <View style={styles.SupportView}>

                          </View>
                      </View>
                      
               </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    mainView:{
        backgroundColor:"#00202F",height:289,width:395,alignItems:'center',flexDirection:'row',justifyContent:'center'
    },
    FirstImageView:{
       height:238.77,width:181.57,marginBottom:200,marginRight:10,marginLeft:10
    },
    firstImage:{
        height:'100%',width:'100%'
    },
    HeadlineTex:{
        color:'#ffffff',marginLeft:80,marginBottom:190,marginRight:70,fontSize:20,fontWeight:'bold'

        
    },
    SecondImageView:{
        height:18,width:14,marginBottom:190,marginLeft:0
    },
    SecondImage:{
        height:'100%',width:'100%'
    },
    ThirdImageView:{height:32,width:32,marginRight:170,marginBottom:190,marginLeft:20
    },
    ThirdImage:{
        height:'100%',width:'100%'
    },
    SecondView:{
        alignItems:'center',justifyContent:'center',
    },
    SecondView1:{
        elevation:8,backgroundColor:'#ffffff',flexDirection:'column',height:521,width:327,shadowColor:'black',shadowRadius:5,marginBottom:0,marginTop:-170
    },
    DetailsMainView:{
        flexDirection:'row',marginTop:10,marginBottom:0
    },
    DetailsImageView:{
        height:45,width:45,backgroundColor:'#00C458',borderRadius:50,marginRight:10,marginLeft:25,marginBottom:10
    },
    DetailsNameView:{
        flexDirection:'column'
    },
    DetailsNameText:{
        fontSize:14,color:'black', fontWeight:'bold'
    },
    DetailsIDText:{
        fontSize:10,color:'grey', fontWeight:'bold'
    },
    PersonalText:{
        marginTop:20,marginBottom:25,fontSize:16,fontWeight:'bold',color:'black',marginLeft:20
    },
    PersonalSettingView:{
        flexDirection:'row',borderBottomColor:'#EEEEEE',borderBottomWidth:1.5
    },
    PersonalSettingTextLeft:{
        fontSize:12,marginLeft:20,marginRight:70,marginBottom:20,marginTop:10,fontWeight:'600'
    },
    PersonalSettingTextRight1:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:-10
    },
    PersonalSettingTextRight2:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:50
    },
    PersonalSettingTextRight3:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:35
    },
    CourseInfoText1:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:40
    },
    CourseInfoText2:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:40
    },
    CourseInfoText3:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:-5
    },
    CourseInfoText4:{
        fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:20
    },
    CustomPaymentMainView:{
        Height:68,width:327,backgroundColor:'#00C458',marginTop:15,elevation:5,shadowColor:'black',alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:7
    },CustomText:{
        fontSize:20,fontWeight:'bold',color:'#ffffff',marginBottom:7
    },
    CustomImageView:{
        height:36,width:36,marginTop:26,marginBottom:10
    },
    CustomImage:{
      //  height:'100%',width:'100%'
    },
    RefferalsView:{
        Height:68,width:327,backgroundColor:'#00C458',marginTop:15,elevation:5,shadowColor:'black',alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:7
    },
    RefferalsImageView:{
        height:16.96,width:16.72,marginTop:26,marginBottom:20
    },
    RefferalImage:{
        marginRight:20
        //height:'100%',width:'100%' 
    },
    RefferalsText:{
        marginLeft:20,fontSize:20,fontWeight:'bold',color:'#ffffff',marginBottom:7,marginBottom:10
    },
    SupportView:{
        height:20,
    }
})