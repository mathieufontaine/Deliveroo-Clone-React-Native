import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { selectItems } from "../features/basketSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basket = useSelector(selectItems);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5 ">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <ArrowLeftIcon className="h-5" color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>
        <View>
          <View className=" pb-4">
            <Text className="text-white text-2xl font-bold text-center">
              {restaurant?.title}
            </Text>
            <Text className="text-white font-bold text-center">
              {restaurant?.address}
            </Text>
          </View>
          <View className="p-6 bg-white rounded-lg mx-4 shadow-md">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="font-bold ">Order is on the way!</Text>
                <Text className=" text-gray-400">Estimated delivery time:</Text>
                <Text className="text-4xl font-bold my-2">30 minutes</Text>
              </View>
              <Image
                source={{ uri: basket[0]?.image.asset.url }}
                className="rounded-full h-24 w-24"
              />
            </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          </View>
        </View>
      </SafeAreaView>

      <MapView
        className="flex-1 -mt-10 z-0"
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.description}
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: restaurant?.image.asset.url }}
          className="h-20 w-20 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-lg">{restaurant?.title}</Text>
          <Text className="text-gray-400">{restaurant?.address}</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
