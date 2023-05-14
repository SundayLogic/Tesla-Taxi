import React from "react";
import { View, Image } from "react-native";

const PromotionalVideo = () => {
  return (
    <Image
      className=" self-center"
      style={{
        width: 400,
        height: 200,
      }}
      source={require("../../../assets/promotionalVideo.gif")}
    />
  );
};

export default PromotionalVideo;
