import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./app/store";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";

let persistor = persistStore(store);

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <TailwindProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Restaurant" component={RestaurantScreen} />
              <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{ presentation: "modal", headerShown: false }}
              />
              <Stack.Screen
                name="PreparingOrderScreen"
                component={PreparingOrderScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DeliveryScreen"
                component={DeliveryScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </PersistGate>
    </Provider>
  );
}
