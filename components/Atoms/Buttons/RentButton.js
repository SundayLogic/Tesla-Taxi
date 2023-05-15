import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RentButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-1/4 bg-gray-200 flex items-center justify-center p-5 w-80 rounded"
    >
      <Text className="text-xl font-bold uppercase">RENT</Text>
    </TouchableOpacity>
  );
};

export default RentButton;
