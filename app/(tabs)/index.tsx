import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listings";
import ListingData from "@/assets/data/airbnb-listings.json";
import ListingGeoData from "@/assets/data/neighborhoods.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Page = () => {
  const [category, setCategory] = useState("");
  const items = useMemo(() => ListingData as any, []);

  const onDataChange = (cat: string) => {
    setCategory(cat);
  };
  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onChangeCategory={onDataChange} />,
        }}
      />
      {/* <Listing listings={items} category={category} /> */}
      <ListingsMap listings={ListingGeoData} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
