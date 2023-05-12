import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import NavOptions from "../Organisms/NavOptions";

const HomeScreen = () => {
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
            <NavOptions/>
            </View>
          
        </SafeAreaView>
    );
}

export default HomeScreen;