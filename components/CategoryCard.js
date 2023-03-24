import { Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const CategoryCard = ({ title, imgURL, description }) => {
  return (
    <TouchableOpacity className="bg-gray-200 mr-2 relative rounded-xl">
      <Image className="h-20 w-20 rounded-xl" source={{ uri: imgURL }} />
      <Text className="absolute bottom-1 left-1 font-bold text-lg text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
