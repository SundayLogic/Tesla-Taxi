import { Icon } from "react-native-elements";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "PricingScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
          <View className="bg-gray-200 flex items-center justify-center p-5 pl-6 pb-8 pt-4 m-2 mt-9 w-40 rounded">
            <Image
              style={{
                width: 160,
                height: 120,
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
  );
};

export default NavOptions;
