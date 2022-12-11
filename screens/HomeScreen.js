import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import LoginScreen from "./LoginScreen";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, setSignOut } from "../Features/userSlice";
import { AsyncStorage } from "react-native";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  console.log("token:", userToken);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const signOut = () => {
    dispatch(setSignOut());
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView className="bg-white pt-5">
      {!userToken ? (
        <LoginScreen />
      ) : (
        <View>
          {/* Header */}
          <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now
              </Text>
              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" onPress={signOut} />
          </View>
          {/* Search */}
          <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
              <SearchIcon color="#00CCBB" />
              <TextInput
                placeholder="Restaurants and cuisines"
                keyboardType="default"
              />
            </View>
            <AdjustmentsIcon color="#00CCBB" />
          </View>
          {/* Body */}
          <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <Categories />
            <FeaturedRow
              id="123"
              title="Featured"
              description="paid placement form our partners"
            />
            <FeaturedRow
              id="1234"
              title="Tasty Discounts"
              description="paid placement form our partners"
            />
            <FeaturedRow
              id="12345"
              title="Offers near you !"
              description="paid placement form our partners"
            />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
