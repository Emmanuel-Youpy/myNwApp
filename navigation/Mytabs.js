import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNews from "../screens/HomeNews";
import Setting from "../screens/Setting";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Mytabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Setting") {
            iconName = focused
              ? "ios-notifications-sharp"
              : "ios-notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNews}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Mytabs;
