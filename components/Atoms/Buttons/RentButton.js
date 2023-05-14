import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RentButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      className="h-1/4 bg-gray-200 flex items-center justify-center p-5 w-80 rounded"
    >
      <Text className=" text-xl tracking-widest font-bold">RENT</Text>
    </TouchableOpacity>
  );
};
export default RentButton;
