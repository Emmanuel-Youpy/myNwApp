import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mytabs from "./navigation/Mytabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store/store";
import { useGetTrendingNewsQuery } from "./services/trendingNewsApi";

const Stack = createNativeStackNavigator();

export default function App() {
  const { data: trendingNews } = useGetTrendingNewsQuery();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Mytabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <StatusBar style="auto" /> */
}
