import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { CashIcon, MasterCard, Paypal, VisaCard } from "../assets/icons";
import PaymentMethod from "./PaymentMethod";
import { s, vs } from "react-native-size-matters";

const paymentMethods = [
  { title: "Cash", icon: <CashIcon /> },
  { title: "Visa", icon: <VisaCard /> },
  { title: "Mastercard", icon: <MasterCard /> },
  { title: "Paypal", icon: <Paypal /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PaymentMethod
            title={item.title}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.title)}
            isSelected={selectedMethod === item.title}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
