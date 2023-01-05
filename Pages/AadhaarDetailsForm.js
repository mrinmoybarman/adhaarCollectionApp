import React, { useContext, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


import Pmayg from "../Components/FormComponents/Pmayg";
import Mgnrega from "../Components/FormComponents/Mgnrega";
import Nsap from "../Components/FormComponents/Nsap";
import Declearation from "../Components/FormComponents/Declearation";
import { BASE_URL } from "../Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormContext } from "../Context/FormContext";
import InitStage from "../Components/FormComponents/InitStage";

function AadhaarDetailsForm({ navigation }) {
  const [step, setStep] = useState(0);
  
  const {formData,setFormData} = useContext(FormContext);

  const finalSubmit =async() => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let filename = file.uri.split('/').pop();  // we will pass it later
      console.log('file name',filename);
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let formData = new FormData();
      formData.append('photo', { uri: file.uri, name: filename, type });
      try {
        const response = await fetch(`${BASE_URL}/submit`, {
          method: 'POST',
          body: formData,
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${userToken}` 
          }
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
          });
      } catch (error) {
        console.error(`Login Error ${error}`);
      }
    } catch (error) {
        console.error(error);
    };
  }

  return (
    <View style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {step === 0 && <InitStage setStep={setStep} step={step} formData={formData} setFormData={setFormData}/>}
        
        {step === 1 && <Pmayg setStep={setStep} step={step} formData={formData} setFormData={setFormData}/>}

        {step === 2 && <Mgnrega setStep={setStep} step={step}  formData={formData} setFormData={setFormData} />}

        {step === 3 && <Nsap setStep={setStep} step={step} formData={formData} setFormData={setFormData} />}

        {step === 4 && <Declearation setStep={setStep} step={step} formData={formData} setFormData={setFormData} finalSubmit={finalSubmit}/>}

      </ScrollView>

      
    </View>
  );
}

export default AadhaarDetailsForm;

const styles = StyleSheet.create({
  toptitlebox: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  topTilte1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topTilte2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dash: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  dashbox1: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    aspectRatio: 1,
    padding: 5,
    borderRadius: 15,
    backgroundColor: "#00000011",
    border: "1px solid #000",
  },
  dashbox2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 180,
    aspectRatio: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00000011",
    border: "1px solid #000",
  },
  round: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#4557FB",
    padding: 20,
    aspectRatio: 1,
    flex: 1,
    justifyContent: "space-around",
  },
  button1: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    backgroundColor: "#007bff",
  },
  button2: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    backgroundColor: "#dc3545",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 100,
    borderRadius: 30,
    backgroundColor: "#fff",
    color: "#000",
  },
  checkbox: {
    alignSelf: "center",
  },
});
