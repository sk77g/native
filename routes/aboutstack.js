import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/About";
import Headercom from "../shared/Headercom";
const Stack = createStackNavigator();

const AboutStack = () => {
  return (
  
      <Stack.Navigator 
       screenOptions={{
        headerStyle: {
          backgroundColor: '#C2FFC7', // Default header background color
        },  
         // Center-align header title (optional)
      }}>
        <Stack.Screen
          name="GameZone"
          component={About}
          options={({ navigation }) => ({
            headerTitle: () => <Headercom navigation={navigation}  title={"About Game Zone"}/>, // Custom title
          })}
        />
      
      </Stack.Navigator>

  );
};

export default AboutStack;