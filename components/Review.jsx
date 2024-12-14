import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as Yup from "yup";
import ButtonFlat from "../shared/Button";

const reviewSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  body: Yup.string()
    .required("Body is required")
    .min(10, "Body must be at least 10 characters long"),
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm(); // Reset the form after submission
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title
                ? props.errors.title
                : ""}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body ? props.errors.body : ""}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating
                ? props.errors.rating
                : ""}
            </Text>

            <ButtonFlat
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
