import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.title}
          imgURL={category.image.asset.url}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
