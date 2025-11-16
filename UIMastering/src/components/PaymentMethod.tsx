import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CashIcon, Mastercard, Paypal, VisaCard } from "../assets/icons";
import { s, vs } from "react-native-size-matters";

const PaymentMethod = ({ isSelected = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, isSelected && styles.selectedCard]}>
          <CashIcon />
        </View>
        <Text style={styles.cardText}>Cash</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <VisaCard />
        </View>
        <Text style={styles.cardText}>Visa</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Mastercard />
        </View>
        <Text style={styles.cardText}>Mastercard</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Paypal />
        </View>
        <Text style={styles.cardText}>Paypal</Text>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    height: vs(72),
    width: s(85),
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  cardContainer: {
    height: vs(93),
    width: s(85),
  },
  selectedCard: {},
});
