import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";

const Page = () => {
  const [category, setCategory] = useState("");
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
      <Listing listings={[]} category={category} />
    </View>
  );
};

export default Page;
