import { Icon } from "react-native-elements";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="absolute top-3 left-5 p-2 rounded-full bg-white"
    >
      <Icon name="chevron-left" type="fontawesome" />
    </TouchableOpacity>
  );
};

export default BackButton;
