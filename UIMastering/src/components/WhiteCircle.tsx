import { StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";

const WhiteCircle = () => {
  return <View style={styles.whiteCircle}></View>;
};

export default WhiteCircle;

const styles = StyleSheet.create({
  whiteCircle: {
    borderWidth: s(1),
    backgroundColor: "white",
    borderColor: "#E4E6E8",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
