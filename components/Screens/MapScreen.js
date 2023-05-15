import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../Redux/slices/navSlice";
import MapView from "react-native-maps";
import VehicleSlider from "../Organisms/VehicleSlider";

const testCoordinates = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = () => {
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 9,
        }}
      >
        <MapView
          style={{ flex: 1, width: "100%" }}
          mapType="standard"
          initialRegion={testCoordinates}
        />

        <View
          style={{ height: "40%", width: "100%", backgroundColor: "black" }}
        >
          <VehicleSlider />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
