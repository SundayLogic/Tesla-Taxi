import React from "react";
import { SafeAreaView, View } from "react-native";
import NavOptions from "../Organisms/NavOptions";

import GooglePlacesSearchBar from "../Molecules/GooglePlaceSearchBar";
import TaxiLogo from "../Atoms/Images/TaxiLogo";
import PromotionalVideo from "../Atoms/Images/PromotionalVideo";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex justify-center items-center bg-black">
      <View className="p-4 justify-center">
        <TaxiLogo />
        <NavOptions />
        <GooglePlacesSearchBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
