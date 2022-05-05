import React from 'react';
import { StyleSheet, SafeAreaView, View, Text,Alert, } from 'react-native';
import { 
  Avatar,
  Caption,
  Title,
  TouchableRipple,
  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const ProfileScreen =() => {
  return (
    <SafeAreaView style={styles.container}>
     <View style= {styles.userInfoSection}>
        <View style = {{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
          source = {{
            uri: 'https://www.shareicon.net/data/512x512/2016/05/26/771204_man_512x512.png',
          }}
           size = {80}
           />
           <View style={{marginLeft: 20}}>
             <Title style={[styles.title, {
               marginTop: 15,
               marginBottom: 5,
             }]}>Janwel Jigy Castillo</Title>
             <Caption style={styles.caption}>@Capt_Doffence</Caption>
             </View>
        </View>
     </View>
     
     <View style={styles.userInfoSection}>
     <View style={styles.row}>
       <Icon name= "map-marker-radius" size ={20} color= "#DAB035"/>
       <Text style={{color: "#ffffff", marginLeft: 20 }}>Binangonan, Rizal</Text>
     </View>
     <View style={styles.row}>
       <Icon name= "phone" size ={20} color= "#DAB035"/>
       <Text style={{color: "#ffffff", marginLeft: 20 }}>09533722529</Text>
     </View>
     <View style={styles.row}>
       <Icon name= "email" size ={20} color= "#DAB035"/>
       <Text style={{color: "#ffffff", marginLeft: 20 }}>janweljigycastillo20@gmail.com</Text>
     </View>
     </View>
     <View style={styles.infoBoxWrapper}>
     <View style={[styles.infoBox,{
       borderRightColor:'#DAB035',
       borderRightWidth:3,
       backgroundColor:'#ffffff',
      }]}>
       <Title>5</Title>
       <Caption>Pending List</Caption>
      </View>
      <View style={[styles.infoBox,{
      borderRightColor:'#DAB035',
       
       backgroundColor:'#ffffff',
      }]}>
       <Title>10</Title>
       <Caption>Completed List</Caption>
      </View>
     </View>
     
     <View style={styles.menuWrapper}>
     <TouchableRipple onPress={() => {}}>

         <View style={styles.menuItem}>
           <Icon name="heart-outline" color="#DAB035" size={25}/>
         <Text style={styles.menuItemText}>Your Favorites</Text>
         </View>
       </TouchableRipple>
       <TouchableRipple onPress={() => {}}>
         <View style={styles.menuItem}>
           <Icon name="credit-card" color="#DAB035" size={25}/>
         <Text style={styles.menuItemText}>Wallet</Text>
         </View>
       </TouchableRipple>
       <TouchableRipple onPress={() => {}}>
         <View style={styles.menuItem}>
           <Icon name="share-outline" color="#DAB035" size={25}/>
         <Text style={styles.menuItemText}>Tell Your Friends</Text>
         </View>
       </TouchableRipple>
       <TouchableRipple onPress={() => {}}>
         <View style={styles.menuItem}>
           <Icon name="account-check-outline" color="#DAB035" size={25}/>
         <Text style={styles.menuItemText}>Support</Text>
         </View>
       </TouchableRipple>

     </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#11606F',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ffffff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  userInfoSection: {
    paddingHorizontal:30,
    marginBottom :25,
  },
  caption: {
    fontSize:14,
    lineHeight: 14,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row',
    marginBottom:10,

  },
  infoBoxWrapper: {
    borderBottomColor:'#DAB035',
    borderBottomWidth:3,
    borderTopColor:'#DAB035',
    borderTopWidth:3,
    flexDirection:'row',
    height: 100,
    
  },
  infoBox:{
    width: '50%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  menuWrapper: {
    marginTop:10,
  },
  menuItem: {
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,

  },
  menuItemText: {
    color: '#ffffff',
    marginLeft:20,
    fontWeight:'600',
    fontSize:16,
    lineHeight:26,
  },

});
