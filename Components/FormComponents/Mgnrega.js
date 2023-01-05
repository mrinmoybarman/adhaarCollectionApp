import React, { useEffect, useState } from "react";
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

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FamilyMemberAadhaar from "./FamilyMemberAadhaar";
import FamilyStepContainer from "./FamilyStepContainer";

function Mgnrega(props) {
  const [showMgnregaForm, setShowMgnregaForm] = useState(false);
  const [showAdhaarFamily, setShowAdhaarFamily] = useState(false);
  const [showBasic, setShowBasic] = useState(true);

  const [isCompleted, setIsCompleted] = useState(false); //testing

  const [hasMgnrega, setHasMgnrega] = useState(false); // to redux
  const [noOfFamilyMember, setNoOfFamilyMember] = useState(""); // to redux
  const [jobCardNo, setJobCardNo] = useState(""); // to redux

  // this will be manupulated by the child component
  const [aadharDataAll, setAadharDataAll] = useState([]); // for every member of the family

  const mgnrega = { hasMgnrega, jobCardNo, noOfFamilyMember, aadharDataAll };

  // console.log({isCompleted});

  useEffect(() => {
    if (isCompleted) {
      console.log("submit pmayg data to central")
      props.setFormData({ ...props.formData, mgnrega });
      const step = props.step + 1;
      props.setStep(Number(step)); // to nsap
    }
  }, [isCompleted]);

  return (
    <>
      {!showMgnregaForm && (
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
                  * Did you receive MGNREGA Scheme?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: 20,
                  }}
                >
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                      setHasMgnrega(true);
                      setShowMgnregaForm(true);
                    }}
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
                    onPress={() => {
                      setHasMgnrega(false);
                      setIsCompleted(true);
                      // props.setStep(2);
                    }}
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

      {showMgnregaForm && (
        <>
          {showBasic && (
            <>
              {/* fetching job card Id  */}
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
                  <View>
                    <Text style={styles.topTilte2}>
                      * MGNREGA JOB CARD ID NO.
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          flex: 1,
                        }}
                      >
                        <TouchableOpacity style={styles.buttonContainer}>
                          <TextInput
                            key={1}
                            style={{
                              color: "black",
                              padding: 1,
                              fontWeight: "bold",
                            }}
                            placeholder="ENTER JOB CARD NO."
                            placeholderTextColor="#8b9cb5"
                            keyboardType="decimal-pad"
                            maxLength={50}
                            onChangeText={setJobCardNo}
                            value={jobCardNo}
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* No of Family member  */}
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
                  <View>
                    <Text style={styles.topTilte2}>
                      * NO OF FAMILY MEMBERS UNDER JOBCARD ID
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity style={styles.buttonContainer}>
                        <TextInput
                          key={1}
                          style={{
                            color: "black",
                            padding: 1,
                            fontWeight: "bold",
                          }}
                          placeholder="ENTER NO. OF FAMILY MEMBER"
                          placeholderTextColor="#8b9cb5"
                          keyboardType="decimal-pad"
                          maxLength={50}
                          onChangeText={setNoOfFamilyMember}
                          value={noOfFamilyMember}
                          underlineColorAndroid="#f000"
                          blurOnSubmit={false}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}

          {/* no of family member loop */}

          {noOfFamilyMember > 0 && (
            <>
              {showAdhaarFamily && (
                <FamilyStepContainer
                  noOfFamilyMember={noOfFamilyMember}
                  aadharDataAll={aadharDataAll}
                  setAadharDataAll={setAadharDataAll}
                  setStep={props.setStep}
                  isCompleted={isCompleted}
                  setIsCompleted={setIsCompleted}
                />
              )}
            </>
          )}

          {!showAdhaarFamily && (
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
                  setShowBasic(false);
                  setShowAdhaarFamily(true);
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
          )}
        </>
      )}
    </>
  );
}

export default Mgnrega;

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
    alignItems: "flex-start",
    paddingLeft:20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    color: "#000",
  },
});
