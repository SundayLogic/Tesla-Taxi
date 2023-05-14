import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../Redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const GooglePlacesSearchBar = () => {
  // Location Setup
  const locationLatitudeLongitude = {
    lat: 51.5194,
    long: 0.127,
  };
  // Needs Fixing
  const API = "AIzaSyDcjLh4OgyMaKfH3JG-PtMM4EBTOl8HBp8";
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
    <GooglePlacesAutocomplete
      className="mb-2"
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
      onPress={() => navigation.navigate("MapScreen")}
      returnKeyType={"search"}
      enablePoweredByContainer={false}
      placeholder="where from?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={800}
      isRowScrollable={true}
    />
  );
};

export default GooglePlacesSearchBar;
