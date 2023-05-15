import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../Redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const GooglePlacesSearchBar = () => {
  const locationLatitudeLongitude = {
    lat: 51.5194,
    long: 0.127,
  };
  const API_KEY = "AIzaSyDcjLh4OgyMaKfH3JG-PtMM4EBTOl8HBp8"; // Replace with your API key
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
        key: API_KEY,
        language: "en",
      }}
      onPress={() => navigation.navigate("MapScreen")}
      returnKeyType="search"
      enablePoweredByContainer={false}
      placeholder="Where from?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={800}
      isRowScrollable={true}
    />
  );
};

export default GooglePlacesSearchBar;
