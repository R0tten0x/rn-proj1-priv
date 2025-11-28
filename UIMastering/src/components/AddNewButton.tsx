import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { PlusIcon } from "../assets/icons";
import Feather from "@expo/vector-icons/Feather";

const AddNewButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="plus" size={24} color="#FF7622" />
      <Text style={styles.addCardText}>ADD NEW</Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: vs(15),
    borderWidth: s(2),
    borderColor: "#f0f5fa",
    borderRadius: s(10),
    marginTop: vs(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addCardText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: s(14),
    color: "#FF7622",
  },
});
