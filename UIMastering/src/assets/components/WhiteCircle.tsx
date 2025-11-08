import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";
import WhatsApp from "../WhatsApp";

const WhiteCircle = () => {
  return (
    <TouchableOpacity style={styles.whiteCircle}>
      <WhatsApp />
    </TouchableOpacity>
  );
};

export default WhiteCircle;

const styles = StyleSheet.create({
  whiteCircle: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "lightgrey",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
