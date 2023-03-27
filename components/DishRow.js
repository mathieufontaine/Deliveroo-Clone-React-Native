import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { formatCurrency } from "react-native-format-currency";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ title, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const [valueFormattedWithSymbol] = formatCurrency({
    amount: price,
    code: "EUR",
  });

  return (
    <TouchableOpacity
      onPress={() => setIsPressed(true)}
      className="bg-white border border-gray-200 p-4 "
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{title}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400">{valueFormattedWithSymbol}</Text>
        </View>
        <View className="border-b-2 border-gray-200">
          <Image source={{ uri: image.asset.url }} className="h-24 w-24" />
        </View>
      </View>

      {isPressed && (
        <View className="flex-row space-x-2 items-center pb-3">
          <TouchableOpacity>
            <MinusCircleIcon
              color="gray"
              size={30}
              onPress={() =>
                numberOfItems > 0 && setNumberOfItems(numberOfItems - 1)
              }
            />
          </TouchableOpacity>
          <Text>{numberOfItems}</Text>
          <TouchableOpacity>
            <PlusCircleIcon
              color="gray"
              size={30}
              onPress={() => setNumberOfItems(numberOfItems + 1)}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishRow;
