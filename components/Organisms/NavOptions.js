import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const data = [
    {
        id: "1",
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]
const NavOptions = () => {
    return(
        <FlatList 
        data={data}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity>
                <View className="bg-gray-200 flex items-center justify-center p-2 pl-6 pb-8 pt-4">
                    <Image
                    style={{
                        width:120,
                        height: 120,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: item.image
                    }}
                    />
                    <Text>{item.title}</Text>
                </View>
         
            </TouchableOpacity>
        )}
        />
    );
}

export default NavOptions;