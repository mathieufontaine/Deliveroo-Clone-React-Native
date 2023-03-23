import { View, Text, Image } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 mt-10 space-x-2">
        <Image
          source={require("../assets/logo.webp")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xl text-gray-500">
            Order food now!
          </Text>
          <Text className="font-bold text-2xl">
            Current location
            <ChevronDownIcon size={20} color="black" />
          </Text>
        </View>
        <UserIcon size={28} color="black" />
      </View>
      {/* search */}
      <View className="flex-row justify-between items-center mx-4 space-x-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded-xl">
          <MagnifyingGlassIcon size={28} color="black" />
          <TextInput placeholder="Search for food" />
        </View>
        <AdjustmentsHorizontalIcon size={28} color="black" />
      </View>
    </SafeAreaView>
  );
}
