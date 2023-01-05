import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./../Config";
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    console.log('Form Context', formData);

    return (
        <FormContext.Provider
            value={{ formData, setFormData }}
        >
            {children}
        </FormContext.Provider>
    );
};
