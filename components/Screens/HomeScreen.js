import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import NavOptions from "../Organisms/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../Redux/slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  // Location Setup
  const locationLatitudeLongitude = {
    lat: 51.5194,
    long: 0.127,
  };
  // Needs Fixing
  const API = "AIzaSyDcjLh4OgyMaKfH3JG-PtMM4EBTOl8HBp8";
  const handlePress = (data, details = null) => {
    dispatch(
      setOrigin({
        location: locationLatitudeLongitude,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
  };
  return (
    <SafeAreaView className="flex justify-center items-center bg-black">
      <View className="p-10">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 20,
            },
          }}
          query={{
            key: API,
            language: "en",
          }}
          //Needs fixing
          onPress={handlePress.bind(this)}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          placeholder="where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
