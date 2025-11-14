import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={s(17)} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    justifyContent: "center",
    alignItems: "center",
  },
});
