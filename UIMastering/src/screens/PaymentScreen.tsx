import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethod from "../components/PaymentMethod";
import { CashIcon } from "../assets/icons";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddNewButton from "../components/AddNewButton";
import Total from "../components/Total";
import PayAndConfirm from "../components/PayAndConfirm";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <PaymentList />

      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
      </View>

      <View
        style={{
          paddingHorizontal: s(16),
        }}
      >
        <AddNewButton />
      </View>

      <View style={{ paddingHorizontal: s(16) }}>
        <Total />
      </View>

      <View style={{ paddingHorizontal: s(16) }}>
        <PayAndConfirm />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vs(50),
  },
  headerText: {
    fontSize: s(17),
    color: "#181C2E",
    marginStart: s(12),
  },
});
