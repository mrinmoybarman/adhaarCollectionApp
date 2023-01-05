import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  CheckBox,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SapSchemes from "./SapSchemes";
import SapSchemesContainer from "./SapSchemesContainer";

function Nsap(props) {
  const [showSapSelect, setShowSapSelect] = useState(true);
  const [showSapForm, setShowSapForm] = useState(false);
  const [isCompleted,setIsCompleted] = useState(false); // main login 

  const [hasSap,setHasSap] = useState(false) // redux
  const [sapData,setSapData] = useState([]); // redux
  const [isCheckedIGNOAPS, setIsCheckedIGNOAPS] = useState(false); //redux
  const [isCheckedIGNWPS, setIsCheckedIGNWPS] = useState(false); //redux
  const [isCheckedIGNDPS, setIsCheckedIGNDPS] = useState(false);  //redux
  const [isCheckedSKKSBPA, setIsCheckedSKKSBPA] = useState(false);  //redux

  const [showSchemes,setShowSchemes] = useState(false);

  const sap = { hasSap, sapData, isCheckedIGNOAPS, isCheckedIGNWPS, isCheckedIGNDPS, isCheckedSKKSBPA };

  // console.log(sap);

  useEffect(() => {
    if (isCompleted) {
      console.log("submit pmayg data to central")
      props.setFormData({ ...props.formData, sap });
      const step = props.step + 1;
      props.setStep(Number(step)); // to nsap
    }
  }, [isCompleted]);

  return (
    <>

      {!showSapForm && (
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#0002",
              borderRadius: 10,
              padding: 10,
              opacity: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text style={styles.topTilte2}>
                  * Did you receive Any SAP Scheme?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {setHasSap(true);setShowSapForm(true)}}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        paddingHorizontal: 10,
                      }}
                    >
                      YES
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() =>{setHasSap(false);setIsCompleted(true)}}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        paddingHorizontal: 10,
                      }}
                    >
                      NO
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}

      {showSapForm && (
        <>
          {/* that means household have any of the schemes  */}
          {showSapSelect && (
            <>
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0002', marginVertical: 10, borderRadius: 10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>Please Select Schemes Under SAP (You can select multiple Schemes for Multiple Benificiaries)</Text>
                </View>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0002', marginVertical: 10, borderRadius: 10 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="green"
                    unfillColor="white"
                    iconStyle={{ borderColor: "white" }}
                    innerIconStyle={{ borderWidth: 4 }}
                    onPress={(isChecked) => {setIsCheckedIGNOAPS(isChecked)}}
                  />
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>IGNOAPS - Indira Gandhi National Old Age Pension Scheme.</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0002', marginVertical: 10, borderRadius: 10 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="green"
                    unfillColor="white"
                    iconStyle={{ borderColor: "white" }}
                    innerIconStyle={{ borderWidth: 4 }}
                    onPress={(isChecked) => {setIsCheckedIGNDPS(isChecked)}}
                  />
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>IGNDPS - Indira Gandhi National Disability Pension Scheme.</Text>
                </View>


                <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0002', marginVertical: 10, borderRadius: 10 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="green"
                    unfillColor="white"
                    iconStyle={{ borderColor: "white" }}
                    innerIconStyle={{ borderWidth: 4 }}
                    onPress={(isChecked) => {setIsCheckedIGNWPS(isChecked)}}
                  />
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>IGNWPS - Indira Gandhi National Widow Pension Scheme.</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0002', marginVertical: 10, borderRadius: 10 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="green"
                    unfillColor="white"
                    iconStyle={{ borderColor: "white" }}
                    innerIconStyle={{ borderWidth: 4 }}
                    onPress={(isChecked) => {setIsCheckedSKKSBPA(isChecked)}}
                  />
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>SKKSBPA - Shwahid Kushal Konwar Sarbajanin Briddha Pension Scheme.</Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: "#000",
                }}
              >
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    setShowSapSelect(false);
                    setShowSchemes(true);
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>

            </>
          )}

          {showSchemes && (
              <SapSchemesContainer isCheckedIGNOAPS={isCheckedIGNOAPS} isCheckedIGNWPS={isCheckedIGNWPS} isCheckedIGNDPS={isCheckedIGNDPS} isCheckedSKKSBPA={isCheckedSKKSBPA} sapData={sapData} setSapData={setSapData} setIsCompleted={setIsCompleted}/>
          )}

          

          {/* {isCheckedIGNOAPS && showSchemes &&(
            <SapSchemes scheme="IGNOAPS" sapData={sapData} setSapData={setSapData} />
          )}

          {isCheckedIGNWPS && showSchemes &&(
            <SapSchemes scheme="IGNWPS" sapData={sapData} setSapData={setSapData} />
          )}

          {isCheckedIGNDPS && showSchemes &&(
            <SapSchemes scheme="IGNWPS" sapData={sapData} setSapData={setSapData} />
          )}

          {isCheckedSKKSBPA && showSchemes &&(
            <SapSchemes scheme="SKKSBPA" sapData={sapData} setSapData={setSapData} />
          )} */}

        </>
      )}
    </>
  );
}

export default Nsap;

const styles = StyleSheet.create({
  topTilte1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topTilte2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
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
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    color: "#000",
  },
});
