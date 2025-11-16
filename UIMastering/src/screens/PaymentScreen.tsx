import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethod from "../components/PaymentMethod";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
        }}
      >
        <BackButton />
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <PaymentMethod />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vs(50),
    paddingHorizontal: s(16),
  },
  headerText: {
    fontSize: s(17),
    color: "#181C2E",
    marginStart: s(12),
  },
});
