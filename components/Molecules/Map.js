import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native-web";
const Map = () => {
  const testCoordinates = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <MapView
      mapType="standard"
      className="flex-1"
      initialRegion={testCoordinates}
    />
  );
};

export default Map;
