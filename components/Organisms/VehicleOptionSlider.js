import { Icon } from "react-native-elements";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../Atoms/Buttons/BackButton";

const data = [
  {
    id: "1",
    title: "Model X",
    image: "https://links.papareact.com/5w8",
    multiplier: 1.2,
  },
  {
    id: "2",
    title: "Model 3",
    image: "https://links.papareact.com/3pn",
    multiplier: 1,
  },
  {
    id: "3",
    title: "Model S",
    image: "https://links.papareact.com/7pf",
    multiplier: 1.4,
  },
];
const VehicleOptionSlider = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-center">
        <BackButton />
        <Text className="text-center py-2 text-xl text-white font-bold tracking-wider">
          Select a vehicle
        </Text>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("PricingScreen")}
          >
            <View className="bg-gray-200 flex items-center justify-center p-5 pl-6 pb-8 pt-4 m-2 mt-9 w-40 rounded">
              <Image
                style={{
                  width: 140,
                  height: 80,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text className="mt-2 text-xl font-semibold">{item.title}</Text>
              <Icon
                className="p-2 bg-black rounded-full w-10 mt-4"
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
export default VehicleOptionSlider;
