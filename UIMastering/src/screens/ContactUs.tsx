import { StyleSheet, Text, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import SocialSection from "../components/SocialSection";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      // Contact Us Outside inside mainview.
      <Text style={styles.contactTitle}>Contact Us</Text>
      // Social Section View
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          label="Instagram"
          icon={<Entypo name="instagram" size={24} color="#178AD9" />}
        />
        <SocialSection
          label="GitHub"
          icon={<AntDesign name="github" size={24} color="#178AD9" />}
        />
        <SocialSection
          label="TikTok"
          icon={<FontAwesome6 name="tiktok" size={24} color="#178AD9" />}
        />
        <SocialSection
          label="LinkedIn"
          icon={<Entypo name="linkedin" size={24} color="#178AD9" />}
        />
        <SocialSection
          label="X"
          icon={<FontAwesome6 name="x-twitter" size={24} color="#178AD9" />}
        />
      </View>
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
  socialContainer: {
    backgroundColor: "#F5f5Fa",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
  contactTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: s(20),
    marginLeft: s(20),
  },
});
