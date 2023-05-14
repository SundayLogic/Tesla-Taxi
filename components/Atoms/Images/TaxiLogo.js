import React from "react";
import { View, Image } from "react-native";

const TaxiLogo = () => {
  return (
    <Image
      className="mt-4 mb-2 self-center"
      style={{
        width: 200,
        height: 100,
        resizeMode: "contain",
      }}
      source={require("../../../assets/taxi.png")}
    />
  );
};

export default TaxiLogo;
