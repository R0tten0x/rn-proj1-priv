import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { PlusIcon } from "../assets/icons";

const AddNewButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.addCardText}>+ ADD NEW</Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: vs(52),
    borderWidth: s(2),
    borderColor: "#f0f5fa",
    borderRadius: s(10),
    marginTop: vs(15),
    justifyContent: "center",
    alignContent: "center",
  },
  addCardText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: s(14),
    color: "#FF7622",
  },
});
