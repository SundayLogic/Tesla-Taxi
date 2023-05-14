import React from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";

const AccountScreen = () => {
  //Working on adding pin to map using Redux
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView className="mt-9 flex justify-center items-center h-screen w-screen">
      <Text>Account Screen</Text>
    </SafeAreaView>
  );
};

export default AccountScreen;
