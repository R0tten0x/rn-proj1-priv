import { StyleSheet, View, Text } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { type FC } from "react";
import SendButton from "./SendButton";

interface SocialSection {
  label: string;
  icon: React.ReactNode;
}

const SocialSection: FC<SocialSection> = ({ label, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteCircle}>{icon}</View>
      <Text style={styles.text}>{label}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
    paddingRight: 15,
    paddingLeft: 15,
  },
  text: {
    flex: 1,
    marginStart: s(14),
    fontSize: s(12),
    color: "#8083A3",
  },
  whiteCircle: {
    borderWidth: s(1),
    backgroundColor: "white",
    borderColor: "#E4E6E8",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
