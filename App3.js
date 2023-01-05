import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AadhaarDetailsForm from './Pages/AadhaarDetailsForm';
import MyCamera from './Pages/MyCamera';
import Register from './Pages/Register';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkLogIn = async () => {
    try {
      const value = await AsyncStorage.getItem('storage_Key');
      if (value !== null) {
        console.log("checkLogin", value);
        setIsSignedIn(true);
      }
    } catch (error) {
      console.log("Error Fetching Token");
    }
  }

  useEffect(() => {
    checkLogIn();
  }, [])

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen component={Dashboard} name="Dashboard" options={{ headerShown: true }} />
          <Stack.Screen component={AadhaarDetailsForm} name="ENTER BENEFICIARY DETAILS" options={{ headerShown: true }} />
          <Stack.Screen component={MyCamera} name="Camera" options={{ headerShown: true }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen component={Register} name="Register" options={{ headerShown: false }} />
          <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
        </Stack.Navigator>
      )
      }
    </NavigationContainer>
  );
}