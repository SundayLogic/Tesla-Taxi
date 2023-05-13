import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";
import Map from "../Molecules/Map";
const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  return (
    <View className="mt-9 flex justify-center items-center h-screen w-screen">
      <View className="h-1/2 w-full bg-yellow-200">
        <Text>Other</Text>
      </View>
      <View className="h-1/2 w-full bg-green-200">
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
