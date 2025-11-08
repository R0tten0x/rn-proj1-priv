import { StyleSheet, Text, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import React from "react";
import UserAvatar from "../assets/components/UserAvatar";
import BackButton from "../assets/components/BackButton";
import SendButton from "../assets/components/SendButton";
import WhiteCircle from "../assets/components/WhiteCircle";

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <SendButton />
      <WhiteCircle />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(60),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: s(17),
  },
});
