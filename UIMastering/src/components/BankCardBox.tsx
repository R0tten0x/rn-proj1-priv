import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRef, useEffect } from "react";
import { s, vs } from "react-native-size-matters";
import { CCardIcon } from "../assets/icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  // const animation = useRef<LottieView>(null);
  return (
    <View style={styles.container}>
      <CCardIcon />
      {/* <LottieView
        autoPlay
        ref={animation}
        style={{
          width: s(150),
          height: vs(150),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/cc.json")}
      /> */}
      <Text
        style={{
          fontSize: s(16),
          fontWeight: "bold",
          color: " #32243E",
          marginTop: vs(17),
        }}
      >
        No Mastercard Added
      </Text>
      <Text
        style={{
          fontSize: s(15),
          fontWeight: "400",
          color: "#2D2D2D",
          marginTop: vs(10),
          textAlign: "center",
        }}
      >
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8f9",
    borderRadius: s(10),
    marginTop: vs(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: s(35),
    paddingHorizontal: s(30),
  },
});
