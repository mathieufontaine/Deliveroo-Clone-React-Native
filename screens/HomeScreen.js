import "react-native-url-polyfill/auto";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Search from "../components/Search";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await SanityClient.fetch(
        `*[_type == "category"]{
          _id,
          title,
          slug,
          image{
            asset->{
              _id,
              url
            }
          }
        }`
      );
      setCategories(categories);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const featured = await SanityClient.fetch(
        `*[_type == "featured"]{
          _id,
          title,
          slug,
          description,
          image{
            asset->{
              _id,
              url
            }
          },
          restaurants[]->{
            ...,
            image{
              asset->{
                _id,
                url
              }
            },
          }
        }`
      );
      setFeatured(featured);
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <Search />
      {categories?.length > 0 && <Categories categories={categories} />}
      {featured?.map((row) => (
        <FeaturedRow
          key={row._id}
          title={row.title}
          description={row.description}
          restaurants={row.restaurants}
        />
      ))}
    </SafeAreaView>
  );
}
