import { Icon } from "react-native-elements";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
const test =
  "https://th.bing.com/th/id/R.7912a489638760e3958b73e7df03498d?rik=chPkWo5L%2bGQFcA&pid=ImgRaw&r=0";

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
    screen: "AccountScreen",
  },
];
const HomeOptions = () => {
  const navigation = useNavigation();
  return <Text>Hello</Text>;
};

export default HomeOptions;
