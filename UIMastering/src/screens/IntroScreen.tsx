import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";
import HalfSun from "../assets/HalfSun";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <HalfSun style={styles.halfSun} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfSun: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
