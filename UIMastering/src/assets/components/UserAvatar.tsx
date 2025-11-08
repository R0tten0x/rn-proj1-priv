import { View, Text, Image, StyleSheet } from "react-native";
import { s, ms } from "react-native-size-matters";
import React from "react";

const UserAvatar = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://sunamibandtour.com/assets/images/main.jpg" }}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});
