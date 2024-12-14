import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
} from "react-native";
import Card from "../shared/Card";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Review from "./Review";
const Home = ({ navigation }) => {
  const [modelOpen, setmodelOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReview) => {
      return [review, ...currentReview];
    });
    setmodelOpen(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <AntDesign
              name="closesquareo"
              style={styles.modalToggle}
              size={30}
              color="#FF748B"
              onPress={() => setmodelOpen(false)}
            />
            <Review addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Entypo
        name="add-to-list"
        size={30}
        color="#FF748B"
        style={styles.modalToggle}
        onPress={() => setmodelOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review Details", item)}
          >
            <Card>
              <Text style={styles.label}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  modalToggle: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderCurve: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
