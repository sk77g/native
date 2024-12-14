import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Card = (props) => {
  return (
    <View style={Style.Card}>
        <View style={Style.CardContent}>
            {props.children}
        </View>
    </View>
  )
}
const Style = StyleSheet.create({
    Card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6     

    },
    CardContent:{
        marginHorizontal: 18,
        marginVertical: 20,
    }
})
export default Card