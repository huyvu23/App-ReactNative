import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../Features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) {
    return null;
  }
  return (
    <View className="absolute bottom-10 w-full z-50 ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 p-4 flex-row rounded-lg items-center space-x-1 bg-[#00CCBB] "
      >
        <Text className="text-white font-extrabold text-lg py-1 px-2 bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basketTotal} $
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
