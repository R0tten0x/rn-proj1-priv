import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";
import SendArrow from "../assets/icons";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendArrow />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#1077AF",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
