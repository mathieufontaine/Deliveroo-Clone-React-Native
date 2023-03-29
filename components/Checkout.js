import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Checkout = ({ total }) => {
  const navigation = useNavigation();

  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="">Subtotal</Text>
        <Text className="">{total} €</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery fee</Text>
        <Text className="text-gray-400">2.50 €</Text>
      </View>
      <View className="flex-row justify-between ">
        <Text className="font-bold">Total</Text>
        <Text className="font-extrabold">{total + 2.5} €</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderScreen")}
        className="bg-[#00CCBB] rounded-lg p-3"
      >
        <Text className="text-white text-center">Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
