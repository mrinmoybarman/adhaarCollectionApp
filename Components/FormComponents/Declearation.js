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
import BouncyCheckbox from "react-native-bouncy-checkbox";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FormContext } from "../../Context/FormContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../Config";

function Declearation(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { formData } = useContext(FormContext);

  const fileSubmit = async (file) => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let filename = file.uri.split('/').pop();  // we will pass it later
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      // let type = 'image';
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
            // console.log("file submit", json.data);
            return json.data;
          });
        return response;
      } catch (error) {
        console.error(`Login Error ${error}`);
        return error;
      }
    } catch (error) {
      console.error(error);
    };
  }

  const submitAadhar = async (data) => {
    // console.log(data);
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await fetch(`${BASE_URL}/aadhardata`, request)
        .then((response) => response.json())
        .then((json) => {
          console.log("Submit Adhaar Returns ", json);
          return json.data;
        });
      return response;
    } catch (error) {
      console.error(`Form Submit Error ${error}`);
      return error;
    }
  }

  const submitScheme = async (data) => {
    // console.log(data);
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await fetch(`${BASE_URL}/schemedata`, request)
        .then((response) => response.json())
        .then((json) => {
          console.log("Submit Scheme Returns ", json);
          return json.data;
        });
      return response;
    } catch (error) {
      console.error(`Form Submit Error ${error}`);
      return error;
    }
  }

  // FOR PMAYG done
  const submitPmaygData = async (data, houseHoldId) => {
    const isAadhar = data.isAdhaar;
    const house_no = houseHoldId;
    const benificiaryName = data.benificiaryName;
    const pmaygid = data.pmaygid;
    const aadharNo = data.aadharNo;
    // checking household have Addhaar Card
    if (isAadhar) {
      const aadharDocFront = await fileSubmit(data.aadharDocFront);
      const aadharDocBack = await fileSubmit(data.aadharDocBack);
      const consentDoc = await fileSubmit(data.consentDoc);
      const postDataAadhar = {
        householdId: house_no,
        schemeId: "1",
        type: "BENIFICIARY",
        benificiaryId: pmaygid,
        benificiaryName: benificiaryName,
        aadharNo: aadharNo,
        aadharDocFront: aadharDocFront,
        aadharDocBack: aadharDocBack,
        consentDoc: consentDoc,
        enteredBy: 'APP User'
      }

      submitAadhar(postDataAadhar);
    }

    // now submit the scheme

    const postDataScheme = {
      householdId: house_no,
      schemeId: "1",
      isFamily: 0,
      benificiaryId: pmaygid,
      benificiaryName: benificiaryName,
      noOfFamilyMember: "NOT APPLICABLE",
      isAadhar: isAadhar,
      enteredBy: "APP testing"
    }

    submitScheme(postDataScheme);
  }

  // FOR MGNREGA DONE
  const submitMgnregaData = async (data, houseHoldId) => {
    const houseNo = houseHoldId;
    const jobCardNo = data.jobCardNo
    const noOfFamilyMember = data.noOfFamilyMember;

    data.aadharDataAll.map(async (el, index) => {
      const isAadhar = el.isAdhaar;
      if (isAadhar) {
        const aadharDocFront = await fileSubmit(el.aadharDocFront);
        const aadharDocBack = await fileSubmit(el.aadharDocBack);
        const consentDoc = await fileSubmit(el.consentDoc);
        const aadharNo = el.aadharNo;
        const benificiaryName = el.familyMemberName;
        const postDataAadhar = {
          householdId: houseNo,
          schemeId: "2",
          type: "FAMILY",
          benificiaryId: jobCardNo,
          benificiaryName: benificiaryName,
          aadharNo: aadharNo,
          aadharDocFront: aadharDocFront,
          aadharDocBack: aadharDocBack,
          consentDoc: consentDoc,
          enteredBy: 'APP User'
        }
        submitAadhar(postDataAadhar);
      }
    });

    // now submit the scheme

    const postDataScheme = {
      householdId: houseNo,
      schemeId: "2", //for MGNREGA
      isFamily: 1,
      benificiaryId: jobCardNo,
      benificiaryName: "NOT APPLICABLE",
      noOfFamilyMember: noOfFamilyMember,
      isAadhar: '0',
      enteredBy: "APP testing"
    }

    submitScheme(postDataScheme);
  }

  // FOR IGNOAPS
  const submitSap = async (data, houseHoldId) => {
    const houseNo = houseHoldId;
    data.map(async(el,index) => {
        // every el is scheme
        console.log('index ',index,el);
        const schemeName = el.schemeName; // scheme Id 3
        const sanctionId = el.sanctionId;
        const aadharNo = el.aadharNo;
        const benificiaryName = el.benificiaryName;
        const isAdhaar = el.isAdhaar;
        let schemeId;
        if(schemeName === 'IGNOAPS'){
          schemeId = "3";
        }
        else if(schemeName === 'IGNWPS'){
          schemeId = "4";
        }
        else if(schemeName === 'IGNDPS'){
          schemeId = "5";
        }
        else if(schemeName === 'SKKSBPA'){
          schemeId = "6";
        }
        else{
          schemeId = "UNDEFINED";
        }


        if (isAdhaar) {
          const aadharDocFront = await fileSubmit(el.aadharDocFront);
          const aadharDocBack = await fileSubmit(el.aadharDocBack);
          const consentDoc = await fileSubmit(el.consentDoc);
          const postDataAadhar = {
            householdId: houseNo,
            schemeId: schemeId,
            type: "BENIFICIARY",
            benificiaryId: sanctionId,
            benificiaryName: benificiaryName,
            aadharNo: aadharNo,
            aadharDocFront: aadharDocFront,
            aadharDocBack: aadharDocBack,
            consentDoc: consentDoc,
            enteredBy: 'APP User'
          }
          submitAadhar(postDataAadhar);  
        }

        const postDataScheme = {
          householdId: houseNo,
          schemeId: schemeId,
          isFamily: 0,
          benificiaryId: sanctionId,
          benificiaryName: benificiaryName,
          noOfFamilyMember: "NOT APPLICABLE",
          isAadhar: isAdhaar,
          enteredBy: "APP testing"
        }
    
        submitScheme(postDataScheme);

    });

  }


  // FOR ALL
  const finalSubmit = () => {
    // first check for pmayg
    if (formData.pmaygData.hasPmayg) {
      const result = submitPmaygData(formData.pmaygData, formData.houseHoldId);
    }

    // first check for Mgnrega
    if (formData.mgnrega.hasMgnrega) {
      const result = submitMgnregaData(formData.mgnrega, formData.houseHoldId);
    }

    // first check for SAP
    if (formData.sap.hasSap) {
      console.log("SAP submition");
      // checking ignoaaps
      if(formData.sap.isCheckedIGNOAPS){
        const result = submitSap(formData.sap.sapData,formData.houseHoldId);
      }
    }


  }

  return (
    <>
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
            <View style={{ flex: 1 }}>
              <Text style={styles.topTilte2}>
                Details Filled for -PMYAG, MGNREGA, SAP
              </Text>
              <Text style={styles.topTilte4}>You can Preview the form or submit Directly</Text>
              <View>
                <TouchableOpacity style={styles.buttonsecondary} onPress={() => { console.log("goint to preveiew") }}>
                  <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "left",
                        fontWeight: "bold",
                        flex: 1
                      }}
                    >
                      Preview
                    </Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={22}
                      color="#fff"
                    />
                  </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 40 }}>
                  <Text style={{ fontSize: 40, fontWeight: 'bold' }}>--OR--</Text>
                </View>
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                flex: 1, marginVertical: 0, paddingHorizontal: 20
              }}>
                <BouncyCheckbox
                  size={35}
                  fillColor="green"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 5 }}
                  onPress={(isChecked) => {
                    setToggleCheckBox(isChecked);
                  }}
                ></BouncyCheckbox>
                <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: 'bold' }}>
                  I hereby declare that the details provided are verified.
                </Text>
              </View>
              {toggleCheckBox && (
                <View style={{ marginVertical: 40 }}>
                  <TouchableOpacity style={styles.button1} onPress={() => finalSubmit()}>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Submit
                      <MaterialIcons
                        name="arrow-forward-ios"
                        size={12}
                        color="#fff"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Declearation;



const styles = StyleSheet.create({
  topTilte1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topTilte2: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  topTilte4: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 18,
    paddingHorizontal: 10
  },
  buttonsecondary: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    backgroundColor: "#04aa6d",
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

