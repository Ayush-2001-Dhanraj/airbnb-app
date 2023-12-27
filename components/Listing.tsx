import { View, Text, FlatList, ListRenderItem } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";

interface Props {
  listings: any[];
  category: string;
}

const Listing = ({ listings: items, category }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("Reloading listing", items.length);
    console.log("Reloading category", category);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`}>Go there</Link>
  );

  return (
    <View>
      <FlatList
        ref={listRef}
        renderItem={renderRow}
        data={isLoading ? [] : items}
      />
    </View>
  );
};

export default Listing;
