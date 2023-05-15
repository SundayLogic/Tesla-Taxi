import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";
import MapView from "react-native-maps";
import VehicleSlider from "../Organisms/VehicleSlider";

const testCoordinates = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  return (
    <View className="mt-9 flex justify-center items-center h-screen w-screen">
      <MapView
        className="flex-1 h-screen w-full"
        mapType="standard"
        initialRegion={testCoordinates}
      />

      <View className="h-1/2 w-full bg-black">
        <VehicleSlider />
      </View>
    </View>
  );
};

export default MapScreen;
