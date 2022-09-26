import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/Categories";
import Details from "./pages/Details";
import Meals from "./pages/Meals";

const Stack = createNativeStackNavigator();

const Oguznavi = () => {

  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{
        headerTitleStyle: {color: '#fc991d'},
        headerTitleAlign: 'center',
      }} />
      <Stack.Screen name="Meals" component={Meals} options={{
        headerTitleStyle: {color: '#fc991d'},
        headerTitleAlign: 'center',
        headerTintColor: '#fc991d'
      }} />
      <Stack.Screen name="Details" component={Details} options={{
        headerTitleStyle: {color: '#fc991d'},
        headerTitleAlign: 'center',
        headerTintColor: '#fc991d'
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  )


}

export default Oguznavi;