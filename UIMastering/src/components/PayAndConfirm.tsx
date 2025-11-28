import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
const PayAndConfirm = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.addCardText}>PAY & CONFIRM</Text>
    </TouchableOpacity>
  );
};

export default PayAndConfirm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff7622",
    height: vs(52),
    borderRadius: s(12),
    marginTop: vs(65),
    justifyContent: "center",
    alignContent: "center",
  },
  addCardText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: s(14),
    color: "#fff",
  },
});
