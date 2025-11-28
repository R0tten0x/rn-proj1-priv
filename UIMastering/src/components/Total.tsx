import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
const Total = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#A0A5BA",
            fontSize: s(14),
            fontWeight: "semibold",
          }}
        >
          TOTAL:
        </Text>

        <Text
          style={{
            color: "#181c2E",
            fontSize: s(30),
            fontWeight: "semibold",
            paddingLeft: s(20),
            marginRight: s(5),
          }}
        >
          $96
        </Text>
      </View>
    </View>
  );
};

export default Total;

const styles = StyleSheet.create({
  container: {},
});
