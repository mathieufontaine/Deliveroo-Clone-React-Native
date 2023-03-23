import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 10 }}
    >
      <CategoryCard
        title="Pokebowl"
        imgURL="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      />
      <CategoryCard
        title="Pasta"
        imgURL="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
      />
      <CategoryCard
        title="Burger"
        imgURL="https://www.diabetes.co.uk/wp-content/uploads/2022/08/junkfoodadvertising.jpg"
      />
      <CategoryCard
        title="Pokebowl"
        imgURL="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      />
      <CategoryCard
        title="Pasta"
        imgURL="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
      />
      <CategoryCard
        title="Burger"
        imgURL="https://www.diabetes.co.uk/wp-content/uploads/2022/08/junkfoodadvertising.jpg"
      />
    </ScrollView>
  );
};

export default Categories;
