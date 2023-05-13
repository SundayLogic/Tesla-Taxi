import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import NavOptions from "../Organisms/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env";

const HomeScreen = () => {
    const API = "AIzaSyDcjLh4OgyMaKfH3JG-PtMM4EBTOl8HBp8";
    return(
        <SafeAreaView className="flex justify-center items-center bg-red-400">
            <View className="p-5 ">
                <Image
                    className="bg-purple-200"
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete 
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 20,
                        }
                    }}
                    query= {{
                        key: API,
                        language: "en"
                    }}
                    onPress={(data,details=null) => {
                        console.log(data)
                    }}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    placeholder='where from?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions/>
            </View>
          
        </SafeAreaView>
    );
}

export default HomeScreen;