import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Register} name="Register" options={{ headerShown: false }} />
      <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack