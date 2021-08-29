import React from "react";

// Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Scenes
import Home from "../scenes/home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
