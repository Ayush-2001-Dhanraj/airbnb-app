import { StyleSheet, View, Text } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";
import { ListingGeo } from "@/interfaces/listingsGeo";
import MapView from "react-native-map-clustering";

import { useRouter } from "expo-router";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

export default function ListingsMap({ listings }: Props) {
  const router = useRouter();

  const onMarkerSelected = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  };

  return (
    <View style={styles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        clusterColor="#000"
        clusterTextColor="#fff"
        clusterFontFamily="mon-sb"
      >
        {listings.features.map((item: ListingGeo) => (
          <Marker
            key={item.properties.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>$ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  marker: {
    backgroundColor: "#fff",
    padding: 6,
    elevation: 6,
    borderRadius: 12,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
});
