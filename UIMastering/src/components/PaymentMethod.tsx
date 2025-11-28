import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC, ReactNode } from "react";
import {
  CashIcon,
  CheckMark,
  MasterCard,
  Paypal,
  VisaCard,
} from "../assets/icons";
import { s, vs } from "react-native-size-matters";

interface PaymentMethodProps {
  isSelected?: boolean;
  title: String;
  icon: ReactNode;
  onPress?: () => void;
}

const PaymentMethod: FC<PaymentMethodProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected && (
        <View style={styles.checkMark}>
          <CheckMark />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        {icon}
      </View>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    width: s(85),
  },
  card: {
    height: vs(72),
    width: s(85),
    borderRadius: s(10),
    backgroundColor: "#F0F5FA",
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
  selectedCard: {
    backgroundColor: "#fff",
    borderColor: "#ff7622",
    borderWidth: s(2),
  },
  checkMark: {
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#ff7622",
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    position: "absolute",
    zIndex: 1,
    top: s(-10),
    right: s(-5),
    alignItems: "center",
    justifyContent: "center",
  },
});
