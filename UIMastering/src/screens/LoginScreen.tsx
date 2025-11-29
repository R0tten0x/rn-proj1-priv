import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginButtons from "../components/LoginButtons";

const LoginScreen = () => {
  return (
    <View>
      <View>
        <LoginHeader />
      </View>

      <View>
        <LoginButtons />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
