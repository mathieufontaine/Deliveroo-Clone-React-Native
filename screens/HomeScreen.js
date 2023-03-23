import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Search from "../components/Search";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <Search />
      <Categories />
    </SafeAreaView>
  );
}
