import { View, Text, Image, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../Features/userSlice";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSubmit = async (values) => {
    const { username, password } = values;
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          dispatch(
            setUserLogin({
              name: result.firstName,
              token: result.token,
              photo: result.image,
            })
          );
        }
        navigation.navigate("Home");
      });
  };
  return (
    <View className="items-center p-5">
      <Image
        className="w-[70%] h-28 "
        source={{
          uri: "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg?w=2000",
        }}
        resizeMode="contain"
      />
      <View className="my-4">
        <Text className="text-lg font-semibold">Welcome to Delivery !</Text>
      </View>
      <View className=" w-full ">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <View
                className="bg-white w-full border-[#e8e8e8] border-[1px]"
                styles={{ paddingHorizontal: 10 }}
              >
                <TextInput
                  className="p-3"
                  placeholder="UserName"
                  onChangeText={handleChange("username")}
                  value={values.username}
                />
              </View>
              <View
                className="bg-white w-full border-[#e8e8e8] border-[1px] mt-4"
                styles={{ paddingHorizontal: 10 }}
              >
                <TextInput
                  className="p-3"
                  placeholder="PassWord"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  //   chuyển type text thành kiểu password
                  secureTextEntry={true}
                />
              </View>
              <View className="bg-[#00CCBB] mt-4 ">
                <Button color="white" onPress={handleSubmit} title="Login" />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignIn;
