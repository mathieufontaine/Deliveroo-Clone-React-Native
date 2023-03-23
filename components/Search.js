import { View, Text } from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { TextInput } from "react-native";

const Search = () => {
  return (
    <View className="flex-row justify-between items-center mx-4 space-x-2">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded-xl">
        <MagnifyingGlassIcon size={28} color="black" />
        <TextInput placeholder="Search for food" />
      </View>
      <AdjustmentsHorizontalIcon size={28} color="black" />
    </View>
  );
};

export default Search;
