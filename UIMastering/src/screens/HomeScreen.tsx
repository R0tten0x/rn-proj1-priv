import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditations</Text>
      <Text style={styles.subheading}>Lorum Ipsum is simply dummy text</Text>
      <TopTabs />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            imageURI={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(150),
          paddingTop: vs(24),
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(60),
    paddingHorizontal: s(16),
  },
  title: {
    fontSize: s(20),
    fontWeight: "bold",
    color: "#1D150F",
    marginBottom: vs(8),
  },
  subheading: {
    fontSize: s(14),
    color: "#2C2016",
    marginBottom: vs(16),
  },
});
