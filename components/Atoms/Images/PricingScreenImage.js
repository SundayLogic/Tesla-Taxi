import React from "react";
import { View, Image } from "react-native";

const PricingScreenImage = () => {
  return (
    <Image
      className=""
      style={{
        width: 600,
        height: 200,
      }}
      source={require("../../../assets/lane.gif")}
    />
  );
};

export default PricingScreenImage;
