import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectTotal, selectItems } from "../features/basketSlice";
import { formatCurrency } from "react-native-format-currency";
import { useNavigation } from "@react-navigation/native";

const Basket = () => {
  const basketTotal = useSelector(selectTotal);
  const basket = useSelector(selectItems);

  const [valueFormattedWithSymbol] = formatCurrency({
    amount: basketTotal,
    code: "EUR",
  });

  const navigation = useNavigation();

  return (
    <View className="absolute w-full bottom-2 z-50 p-4">
      <TouchableOpacity className="bg-[#00CCBB] rounded-lg mx-4 flex-row items-center justify-between p-4">
        <Text className="text-white text-lg font-extrabold px-4 py-2 bg-[#01A296]">
          {basket.length}
        </Text>
        <Text className="text-white text-lg font-extrabold flex-1 text-center">
          View Basket
        </Text>
        <Text className="text-white  text-lg font-extrabold">
          {valueFormattedWithSymbol}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
