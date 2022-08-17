import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  //! CALL API
  useEffect(() => {
    fetch("https://62fa18cc3c4f110faa91fd51.mockapi.io/api/v1/Categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      // Dòng này để không cho hiện thanh scroll ngang
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categories.map((item) => {
        return (
          <CategoryCard key={item.id} imgUrl={item.imgUrl} title={item.title} />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
