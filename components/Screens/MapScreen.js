import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";
import Map from "../Molecules/Map";
import VehicleOptionSlider from "../Organisms/VehicleOptionSlider";
const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView className="mt-9 flex justify-center items-center h-screen w-screen">
      <View className="h-2/3 w-full bg-yellow-200">
        <Map />
      </View>
      <View className="h-1/2 w-full bg-black">
        <VehicleOptionSlider />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
