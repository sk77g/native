import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const Headercom = ({navigation , title}) => {
    const openDrawer = () =>{
        navigation.openDrawer();
    } 
  return (
    <View style={styles.header}>
        {<Ionicons name="menu-outline" onPress={openDrawer} size={35} color="black" style={styles.icon} />}
        <View style={styles.headline}>
            <Text style={styles.headerText}>{title}</Text>
            <Image source={require("../assets/heart_logo.png")} style={styles.headerImage}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"100%",
        textAlign:"center",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        color: "transparent"
    },
    headerText:{
        fontWeight: "bold",
        fontSize: 20,
        color:"#333",
        letterSpacing: 1,
    },
    icon:{
        position:"absolute",
        left:1
    }
    ,headline:{    
         flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",

        
      },
    headerImage:{
        width:26,
        height:26,
        marginLeft:10
      }
})

export default Headercom