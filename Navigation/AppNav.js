import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { FormProvider } from "./../Context/FormContext";

import { AuthContext } from "../Context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

function AppNav() {
  const {isLoading, userToken, login, logout, register} = useContext(AuthContext);

  if (isLoading) {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (<FormProvider><AppStack /></FormProvider>) : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
