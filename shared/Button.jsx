import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const ButtonFlat = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
           <Text style={styles.buttonText} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#F72C5B"
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"

    }
})
export default ButtonFlat