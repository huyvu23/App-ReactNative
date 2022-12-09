import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
export default function DeliveryScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
          <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <XIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
          </View>

          <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-4xl font-bold"> 40-45 Minutes</Text>
              </View>
              <Image
                source={{
                  uri: "http://links.papareact.com/fls",
                }}
                className="h-20 w-20"
              />
            </View>
            <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
            <Text className="mt-3 text-gray-500">
              Your order is being prepared
            </Text>
          </View>
        </SafeAreaView>

        <MapView
          className="flex-1 -mt-10 z-0"
          mapType="mutedStandard"
          initialRegion={{
            latitude: 20.993776,
            longitude: 105.811417,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 20.993776,
              longitude: 105.811417,
            }}
            identifier="origin"
            pinColor="#00CCBB"
          />
        </MapView>

        <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          />
          <View className="flex-1">
            <Text className="text-lg">Huy Vu</Text>
            <Text className="text-gray-400">Your Rider</Text>
          </View>
          <Text className="text-[#00CCBB] text-g mr-5 font-bold">Call</Text>
        </SafeAreaView>
      </View>
    </>
  );
}
