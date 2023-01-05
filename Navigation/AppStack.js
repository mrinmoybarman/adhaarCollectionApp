import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './../Pages/Dashboard';
import AadhaarDetailsForm from './../Pages/AadhaarDetailsForm';
import MyCamera from './../Pages/MyCamera';


const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Dashboard}
        name="Dashboard"
        options={{ headerShown: true }}
      />
      <Stack.Screen
        component={AadhaarDetailsForm}
        name="ENTER BENEFICIARY DETAILS"
        options={{ headerShown: true }}
      />
      <Stack.Screen
        component={MyCamera}
        name="Camera"
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
