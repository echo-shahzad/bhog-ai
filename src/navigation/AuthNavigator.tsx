// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import UsernameScreen from '../screens/Auth/UsernameScreen';
import ContactScreen from '../screens/Auth/ContactScreen';
import FoodQuizScreen from '../screens/Auth/FoodQuizScreen';
import FoodAllergensScreen from '../screens/Auth/FoodAllergensScreen';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Username" component={UsernameScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="FoodAllergens" component={FoodAllergensScreen}/>
      <Stack.Screen name="FoodQuiz" component={FoodQuizScreen} />

    </Stack.Navigator>
  );
};

export default AuthNavigator;
