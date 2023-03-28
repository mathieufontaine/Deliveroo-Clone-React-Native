import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/basketSlice";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View
      key={item.id}
      className="mx-3 flex-row items-center justify-between p-3 border-b-2 border-gray-200"
    >
      <View className="flex-row flex-1 items-center space-x-2">
        <Text>{item.quantity} X</Text>
        <Image
          source={{ uri: item.image.asset.url }}
          className="w-16 h-16 rounded-full"
        />
        <Text>{item.title}</Text>
      </View>
      <View className="flex-row space-x-2">
        <Text className="text-[#00CCBB]  font-bold">{item.price} €</Text>
        <TouchableOpacity
          onPress={() => dispatch(removeFromBasket({ id: item.id }))}
        >
          <XCircleIcon color="#00CCBB" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketItem;
