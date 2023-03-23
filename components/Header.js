import React from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/solid";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 mt-10 space-x-2">
      <Image
        source={require("../assets/logo.webp")}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-xl text-gray-500">Order food now!</Text>
        <Text className="font-bold text-2xl">
          Current location
          <ChevronDownIcon size={20} color="black" />
        </Text>
      </View>
      <UserIcon size={28} color="black" />
    </View>
  );
};

export default Header;
