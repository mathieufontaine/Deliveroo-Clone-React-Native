import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectItems } from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import Checkout from "../components/Checkout";
import BasketItem from "../components/BasketItem";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectItems);
  const [itemsBasket, setItemsBasket] = useState([]);

  useMemo(() => {
    const itemsBasket = items.reduce((acc, item) => {
      const found = acc.find((i) => i.id === item.id);
      if (found) {
        found.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setItemsBasket(itemsBasket);
  }, [items]);

  const total = itemsBasket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <SafeAreaView className="flex-1  bg-gray-100">
      <View className=" shadow-xs p-3 bg-white">
        <Text className="text-lg font-bold text-center">Basket</Text>
        <Text className="text-center text-gray-400">{restaurant.title}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-gray-100 absolute top-6 right-3"
        >
          <XCircleIcon color="#00CCBB" size={22} />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between p-3 bg-white my-5">
        <Text>Delivery in 20 mins</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1  bg-white">
        <Text className="text-lg font-bold text-center p-3">
          {itemsBasket.length} {itemsBasket.length > 1 ? "items" : "item"}
        </Text>
        {itemsBasket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </ScrollView>

      <Checkout total={total} />
    </SafeAreaView>
  );
};

export default BasketScreen;
