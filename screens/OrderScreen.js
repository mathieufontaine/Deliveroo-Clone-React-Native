import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.View animation="bounceIn" duration={1500} iterationCount={1}>
        <Text className="text-3xl my-6 font-bold text-white">
          Order Placed!
        </Text>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      >
        <Text className="text-2xl my-6 font-bold text-white">
          Waiting for restaurant to accept
        </Text>
      </Animatable.View>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default OrderScreen;
