import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantsCard from "./RestaurantsCard";

const FeaturedRow = ({ id, title, description }) => {
  // !HOOK
  const [restaurantsCard, setRestaurantsCard] = useState([]);

  const listDished = [
    {
      id: 0,
      name: "Coca",
      description: "esse",
      price: 1,
      image:
        "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 1,
      name: "Hamburger",
      description: "officia",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    },
    {
      id: 2,
      name: "Flora",
      description: "in",
      price: 43,
      image:
        "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Pizza",
      description: "et",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    },
    {
      id: 4,
      name: "Ice cream",
      description: "commodo",
      price: 36,
      image:
        "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  //! CALL API
  useEffect(() => {
    fetch("https://62fa18cc3c4f110faa91fd51.mockapi.io/api/v1/Restaurants")
      .then((res) => res.json())
      .then((result) => {
        setRestaurantsCard(result);
      });
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4 items-center">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurants */}
        {restaurantsCard.map((item) => {
          return (
            <RestaurantsCard
              id={item.id}
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              dished={listDished}
              long={20}
              lat={0}
              short_description="Description"
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
