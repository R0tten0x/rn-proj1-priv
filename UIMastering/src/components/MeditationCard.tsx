import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { CameraIcon } from "../assets/icons";

const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - s(16) * 3) / 2;

interface MeditationCardProps {
  imageURI: string;
  title: string;
  date: string;
}

const MeditationCard: FC<MeditationCardProps> = ({ imageURI, title, date }) => {
  return (
    <ImageBackground
      source={{
        uri: imageURI,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.camIconView}>
          <CameraIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    // width: s(155),
    width: cardWidth,

    borderRadius: s(12),
    overflow: "hidden",
    paddingTop: vs(18),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },
  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "semibold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
  },
  camIconView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: s(5),
  },
  dateText: {
    fontSize: vs(11),
    color: "#fff",
    marginStart: s(4),
  },
  liveBadge: {
    height: vs(22),
    width: s(45),
    backgroundColor: "#E41111",
    borderRadius: s(90),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: vs(7),
    right: s(10),
  },
  liveText: {
    color: "#fff",
    fontSize: s(11),
    fontWeight: "semibold",
  },
});
