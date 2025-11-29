import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SplashScreen from "../components/SplashScreen";
import { s, vs } from "react-native-size-matters";

const Splash = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <Text style={styles.splashText}>Stylish</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  splashText: {
    fontSize: s(40),
    fontWeight: "bold",
    color: "#F83758",
    marginStart: s(10),
  },
});
