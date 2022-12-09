import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Basket");
    }, 3000);
  }, []);
  return (
    <>
      <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-white text-lg my-10 font-bold text-center"
        >
          Waiting Restaurant to accept your order !
        </Animatable.Text>
        <Progress.Circle size={60} indeterminate={true} color="white" />
      </SafeAreaView>
    </>
  );
}
