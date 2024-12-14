import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import Navigation from "./routes/drawer.js";

// Prevent auto-hide of splash screen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "Roboto-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
    "Roboto-SemiBold": require("./assets/fonts/RobotoMono-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null; // Return nothing until fonts are loaded or error occurs
  }

  if (fontsError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error loading fonts.</Text>
      </View>
    );
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
