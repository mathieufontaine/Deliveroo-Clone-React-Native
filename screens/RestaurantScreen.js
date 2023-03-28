import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";
import Basket from "../components/Basket";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const {
    genre,
    address,
    description,
    image,
    title,
    rating,
    dishes,
    long,
    lat,
  } = useRoute().params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        genre,
        address,
        description,
        image,
        title,
        rating,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const basket = useSelector((state) => selectItems(state));

  return (
    <>
      <ScrollView className="relative">
        <View className="relative">
          <Image
            source={{ uri: image.asset.url }}
            className="h-56 w-full p-4 bg-gray-300"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon color="#00CCBB" size={22} />
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="font-bold text-2xl">{title}</Text>
          <View className="flex-row items-center space-x-1 mt-2">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className=" text-sm text-gray-500">
              <Text className="text-green-500">{rating}</Text> - {genre}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon color="black" opacity={0.5} size={22} />
            <Text className=" text-sm text-gray-500">{address}</Text>
          </View>
          <Text className="text-sm text-gray-500 pt-2">{description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4">
          <QuestionMarkCircleIcon color="#00CCBB" opacity={0.5} size={22} />
          <Text className="text-sm text-gray-500 flex-1">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" opacity={0.5} size={22} />
        </TouchableOpacity>
        <View className="pb-36">
          <Text className="font-bold text-xl p-4">Menu</Text>
          {dishes.map((dish) => (
            <DishRow key={dish._id} id={dish._id} {...dish} />
          ))}
        </View>
      </ScrollView>

      {basket.length > 0 && <Basket />}
    </>
  );
};

export default RestaurantScreen;
