import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";
import PricingScreenImage from "../Atoms/Images/PricingScreenImage";
import TaxiLogo from "../Atoms/Images/TaxiLogo";
import RentButton from "../Atoms/Buttons/RentButton";

const PricingScreen = () => {
  //Working on adding pin to map using Redux
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView className="flex justify-center items-center bg-black h-full w-full">
      <TaxiLogo />
      <View className="pt-2">
        <PricingScreenImage />
      </View>
      <View className="px-7 justify-end space-y-10 flex items-center">
        <Text className="text-white text-xl pb-6">
          Autopilot magically steers, accelerates, and brakes the car while you
          relax. It's simply amazing.
        </Text>
        <RentButton />
      </View>
    </SafeAreaView>
  );
};

export default PricingScreen;
