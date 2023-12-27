import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ListingData from "@/assets/data/airbnb-listings.json";
import { ListingInterface } from "@/interfaces/listing";
import Animated from "react-native-reanimated";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const listing: ListingInterface = ListingData.filter(
    (data) => data.id === id
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image />
      </Animated.ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
