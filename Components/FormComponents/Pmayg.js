import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyCamera from "../../Pages/MyCamera";

function Pmayg(props) {
  const [showPmygForm, setShowPmaygForm] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const [openCameraForConsent, setOpenCameraForConsent] = useState(false);
  const [openCameraForFront, setOpenCameraForFront] = useState(false);
  const [openCameraForBack, setOpenCameraForBack] = useState(false);

  // const [isPmaygBenificiary, setIsPmaygBenificiary] = useState(false);
  const [hasPmayg, setHasPmayg] = useState(false); // this must go to redux
  const [pmaygid, setPmaygid] = useState(""); // this must go to redux
  const [isAdhaar, setIsAdhaar] = useState(false);  // this must go to redux
  const [benificiaryName, setBenificiaryName] = useState("");  //// this must go to redux
  const [aadharNo, setAadharNo] = useState("");  // this must go to redux
  const [aadharDocFront, setAaadharDocFront] = useState("");  // this must go to redux
  const [aadharDocBack, setAaadharDocBack] = useState("");  // this must go to redux
  const [consentDoc, setConsentDoc] = useState("");  // this must go to redux

  // console.log({hasPmayg,pmaygid,isAdhaar,benificiaryName,aadharNo,aadharDocFront,aadharDocBack,consentDoc});

  const gotoEnd = () => {
    setIsAdhaar(false);
    const step = props.step+1;
    props.setStep(Number(step));
    console.log("goint to MGNREGA");
    // please pass all data to parent 
    const pmaygData = {hasPmayg,pmaygid,isAdhaar,benificiaryName,aadharNo,aadharDocFront,aadharDocBack,consentDoc};
    props.setFormData({...props.formData,pmaygData});
  };

  return (
    <View style={{ flex: 1 }}>
      {!showPmygForm && (
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
                  * Did you receive PMAYG Scheme?
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
                    onPress={() => { setShowPmaygForm(true); setHasPmayg(true) }}
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
                    onPress={() => gotoEnd()}
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

      {/* show only when showPmygForm is true */}

      {showPmygForm && (
        <View style={{ flex: 1 }}>

          {!isAdhaar && (
            <>
              {/* taking the pmayg id  */}
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
                    <Text style={styles.topTilte2}>* PMAYG ID</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginRight: 20,
                      }}
                    >
                      <TouchableOpacity style={styles.buttonContainer}>
                        <TextInput
                          key={1}
                          style={{
                            color: "black",
                            padding: 1,
                            fontWeight: "bold",
                            width: 250,
                          }}
                          placeholder="ENTER PMAYG ID"
                          placeholderTextColor="#8b9cb5"
                          keyboardType="default"
                          maxLength={20}
                          onChangeText={setPmaygid}
                          value={pmaygid}
                          underlineColorAndroid="#f000"
                          blurOnSubmit={false}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

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
                          flex: 1,
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.topTilte2}>* BENEFICIARY NAME</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginRight: 20,
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
                                  width: 250,
                                }}
                                placeholder="ENTER BENIFICIARY NAME"
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                maxLength={20}
                                onChangeText={setBenificiaryName}
                                value={benificiaryName}
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

              {/* asking adhaar available  */}
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
                        * Is Aadhar Card Available?
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
                          onPress={() => { setShowContinue(true); setIsAdhaar(true) }}
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
                          onPress={() => gotoEnd()}
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
            </>
          )}

          {/* if benificiary has aadhaar  */}
          {isAdhaar && (
            <View style={{ flex: 1 }}>
              {!openCameraForConsent && (
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
                          <Text style={styles.topTilte2}>* Aadhaar No</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginRight: 20,
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
                                  width: 250,
                                }}
                                placeholder="ENTER AADHAR NO."
                                placeholderTextColor="#8b9cb5"
                                keyboardType="decimal-pad"
                                maxLength={20}
                                onChangeText={setAadharNo}
                                value={aadharNo}
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

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
                      <Text style={styles.topTilte2}>
                        * UPLOAD AADHAR PICTURE
                      </Text>

                      <TouchableOpacity
                        style={{}}
                        onPress={() => setOpenCameraForFront(true)}>
                        <View
                          style={{
                            flexDirection: "row",
                            borderColor: "#ccc",
                            borderBottomWidth: 1,
                            marginHorizontal: 30,
                            alignItems: "center",
                            justifyContent: 'space-between',
                            flex: 1
                          }}
                        >


                          <Ionicons
                            name="camera-outline"
                            size={30}
                            color="#666"
                          />
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 16
                            }}
                          >
                            Upload Front
                          </Text>

                        </View>
                      </TouchableOpacity>
                      {aadharDocFront.uri != undefined && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                          <Image style={{ width: '100%', aspectRatio: 1.3, margin: 'auto' }} source={{ uri: aadharDocFront.uri }} />
                        </View>
                      )}

                      <View style={{ height: 3, backgroundColor: '#000', marginTop: 10, marginBottom: 20 }}></View>

                      <TouchableOpacity
                        style={{}}
                        onPress={() => setOpenCameraForBack(true)}>
                        <View
                          style={{
                            flexDirection: "row",
                            borderColor: "#ccc",
                            borderBottomWidth: 1,
                            marginHorizontal: 30,
                            alignItems: "center",
                            justifyContent: 'space-between',
                            flex: 1
                          }}
                        >


                          <Ionicons
                            name="camera-outline"
                            size={30}
                            color="#666"
                          />
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 16
                            }}
                          >
                            Upload Back
                          </Text>

                        </View>
                      </TouchableOpacity>
                      {aadharDocBack.uri != undefined && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                          <Image style={{ width: '100%', aspectRatio: 1.3, margin: 'auto' }} source={{ uri: aadharDocBack.uri }} />
                        </View>
                      )}


                    </View>
                  </View>

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
                      <Text style={styles.topTilte2}>
                        * UPLOAD CONSENT FORM
                      </Text>

                      <TouchableOpacity
                        style={{}}
                        onPress={() => setOpenCameraForConsent(true)}>
                        <View
                          style={{
                            flexDirection: "row",
                            borderColor: "#ccc",
                            borderBottomWidth: 1,
                            marginHorizontal: 30,
                            alignItems: "center",
                            justifyContent: 'space-between',
                            flex: 1
                          }}
                        >


                          <Ionicons
                            name="camera-outline"
                            size={30}
                            color="#666"
                          />
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 16
                            }}
                          >
                            Upload Consent Form
                          </Text>

                        </View>
                      </TouchableOpacity>
                      {consentDoc.uri != undefined && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                          <Image style={{ width: '100%', aspectRatio: 1.3, margin: 'auto' }} source={{ uri: consentDoc.uri }} />
                        </View>
                      )}
                    </View>
                  </View>
                </>
              )}

              {openCameraForFront && (
                <Modal
                  animationType="slide"
                  transparent={true}
                >
                  <MyCamera setOpenCamera={setOpenCameraForFront} setDoc={setAaadharDocFront} />
                </Modal>
              )}

              {openCameraForBack && (
                <Modal
                  animationType="slide"
                  transparent={true}
                >
                  <MyCamera setOpenCamera={setOpenCameraForBack} setDoc={setAaadharDocBack} />
                </Modal>
              )}

              {openCameraForConsent && (
                <Modal
                  animationType="slide"
                  transparent={true}
                >
                  <MyCamera setOpenCamera={setOpenCameraForConsent} setDoc={setConsentDoc} />
                </Modal>
              )}

            </View>
          )}

          {!openCameraForConsent && showContinue && (

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
                onPress={() => { console.log({ hasPmayg, isAdhaar, pmaygid, benificiaryName, aadharNo }); gotoEnd(); }}>
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

        </View>

      )}
    </View>
  );
}

export default Pmayg;

const styles = StyleSheet.create({
  topTilte1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topTilte2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
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
