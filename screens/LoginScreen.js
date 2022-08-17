import { View, Text } from "react-native";
import React from "react";
import SignIn from "../components/SignIn";

const LoginScreen = () => {
  return (
    <View className="h-full bg-[#F9FBFC]">
      <SignIn />
    </View>
  );
};

export default LoginScreen;
