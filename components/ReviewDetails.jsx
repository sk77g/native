import React from "react";
import {Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";

const ReviewDetails = ({ navigation, route }) => {
  const { title, rating, body, key } = route.params;
  const images = {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  };
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.label}>{body}</Text>
        <View>
          <View style={styles.rating}>
            <Text>GameZone rating</Text>
            <Image source={images[rating]}/>
          </View>
        </View>
      </Card>

      {/* <Button title="go to review page " onPress={pressHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
    backgroundColor: "#f0f0f0", // Optional background color
  },
  label: {
    fontSize: 15,
    fontWeight: 400,
    paddingVertical:10,
    color: "#333", // Text color
  },
  rating:{    
    
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    padding:16,
    borderTopColor:"#eee",
    borderTopWidth: 1
  }
});
export default ReviewDetails;
