import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import store from "./app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";
import Navigator from "./rootNavigator/Navigator";

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <TailwindProvider>
          <Navigator />
        </TailwindProvider>
      </PersistGate>
    </Provider>
  );
}
