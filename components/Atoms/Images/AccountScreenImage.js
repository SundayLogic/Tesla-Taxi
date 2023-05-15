import React from "react";
import { View, Image } from "react-native";

const AccountScreenImage = () => {
  return (
    <Image
      style={{
        width: 800,
        height: 400,
      }}
      source={require("../../../assets/front.png")}
    />
  );
};

export default AccountScreenImage;
