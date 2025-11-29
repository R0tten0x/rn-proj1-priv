import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const LoginButtons = () => {
  return (
    <View>
      // Username View.
      <View style={styles.usernameInput}>
        <FontAwesome name="user" size={24} color="gray" />
        <TextInput
          style={styles.inputText}
          placeholder="Username or Email"
          keyboardType="default"
        />
      </View>
    </View>
  );
};

export default LoginButtons;

const styles = StyleSheet.create({
  inputText: {
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: "#A8A8A9",
    height: s(45),
  },
  usernameInput: {},
});
