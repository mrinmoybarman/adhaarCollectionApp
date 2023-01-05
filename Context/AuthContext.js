import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./../Config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async (nrlmid, phone) => {
    console.log(`${BASE_URL}/login`);
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nrlmid, phone }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUserToken(json.token);
          AsyncStorage.setItem("userToken", json.token);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(`Login Error ${error}`);
    }
  };

  const register = async (phone,nrlmid,unique_device_id) => {
    console.log(`${BASE_URL}/register`);
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nrlmid, phone, unique_device_id }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUserToken(json.token);
          AsyncStorage.setItem("userToken", json.token);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(`Login Error ${error}`);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`Isloggedin error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, register, isLoading, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
