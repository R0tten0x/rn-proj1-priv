import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";

const LoginHeader = () => {
  return (
    <View>
      <Text
        style={{
          color: "#000",
          fontSize: s(36),
          fontWeight: "bold",
          paddingTop: vs(60),
          paddingLeft: s(24),
        }}
      >
        Welcome Back!
      </Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({});
