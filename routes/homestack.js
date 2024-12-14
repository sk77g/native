import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";

import ReviewDetails from "../components/ReviewDetails";
import Headercom from "../shared/Headercom";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C2FFC7', // Default header background color
        },
        // headerTitleAlign: "center", // Center-align header title (optional)
      }}
    >
      <Stack.Screen
        name="GameZone"
        component={Home}
        options={({ navigation }) => ({
              headerTitle: () => <Headercom navigation={navigation} title={"GameZone"} />, // Pass navigation as a prop
        })}
      />

      <Stack.Screen name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
