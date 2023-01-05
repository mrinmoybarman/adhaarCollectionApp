import React, { useState } from "react";
import {
    Button,
    Image,
    CheckBox,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyCamera from "../../Pages/MyCamera";

function SapSchemes(props) {

    const [sanctionId, setSanctionId] = useState("");
    const [benificiaryName, setBenificiaryName] = useState("");
    const [isAdhaar, setIsAdhaar] = useState(false); // to redux
    const [aadharNo, setAadharNo] = useState(""); // to redux

    const [openCameraForConsent, setOpenCameraForConsent] = useState(false);
    const [openCameraForFront, setOpenCameraForFront] = useState(false);
    const [openCameraForBack, setOpenCameraForBack] = useState(false);
    const [aadharDocFront, setAaadharDocFront] = useState(""); // this must go to redux
    const [aadharDocBack, setAaadharDocBack] = useState(""); // this must go to redux
    const [consentDoc, setConsentDoc] = useState(""); // this must go to redux

    const schemeName = props.scheme;
    // console.log({ sanctionId,benificiaryName,isAdhaar,aadharNo,aadharDocFront,aadharDocBack,consentDoc,schemeName });

    // console.log('Scheme', props.noOfScheme);
    // console.log('Scheme', props.index);


    const handleSubmit = () => {
        // console.log('====================================');
        // console.log("handle submit");
        // console.log('====================================');
        let schemeName = props.scheme;
        props.setSapData([
            ...props.sapData,
            {sanctionId,benificiaryName,isAdhaar,aadharNo,aadharDocFront,aadharDocBack,consentDoc,schemeName} 
        ]);
        setSanctionId("");
        setBenificiaryName("");
        setIsAdhaar(false);
        setAadharNo("")
        setOpenCameraForConsent(false);
        setOpenCameraForFront(false);
        setOpenCameraForBack(false);
        setAaadharDocFront("");
        setAaadharDocBack("");
        setConsentDoc("");
        if (props.noOfScheme == props.index + 1) {
            // console.log("central set Step 1");
            props.setIsCompleted(true);
        } else {

            // console.log("family set step",props.index+1);
            // console.log(props.index+1);
            props.setSapStep(props.index + 1);
        }
    };

    const placeholder = `${props.scheme} SANCTION ID`

    return (
        <>
            {!isAdhaar && (
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
                            <View>
                                <Text style={styles.topTilte2}>* {props.scheme} SANCTION ID</Text>
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
                                            placeholder={placeholder}
                                            placeholderTextColor="#8b9cb5"
                                            keyboardType="decimal-pad"
                                            maxLength={100}
                                            onChangeText={setSanctionId}
                                            value={sanctionId}
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
                                }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.topTilte2}>* BENEFICIARY NAME</Text>
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
                                                placeholder="ENTER BENIFICIARY NAME"
                                                placeholderTextColor="#8b9cb5"
                                                keyboardType="ascii-capable"
                                                maxLength={50}
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
                                        <TouchableOpacity style={styles.button1} onPress={() => setIsAdhaar(true)}>
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

                                        <TouchableOpacity style={styles.button2} onPress={()=>{setIsAdhaar(false);handleSubmit();}}>
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

            {isAdhaar && (
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
                                        * ENTER AADHAR NO. OF THE BENIFICIARY
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
                                                placeholder="ENTER AADHAR NO. OF THE BENIFICIARY"
                                                placeholderTextColor="#8b9cb5"
                                                keyboardType="decimal-pad"
                                                maxLength={50}
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

                    {/* document of family member  */}
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
                            <Text style={styles.topTilte2}>* UPLOAD AADHAR PICTURE</Text>

                            <TouchableOpacity
                                style={{}}
                                onPress={() => setOpenCameraForFront(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        borderColor: "#ccc",
                                        borderBottomWidth: 1,
                                        marginHorizontal: 30,
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flex: 1,
                                    }}
                                >
                                    <Ionicons name="camera-outline" size={30} color="#666" />
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 16,
                                        }}
                                    >
                                        Upload Front
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {aadharDocFront.uri != undefined && (
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        style={{ width: "100%", aspectRatio: 1.3, margin: "auto" }}
                                        source={{ uri: aadharDocFront.uri }}
                                    />
                                </View>
                            )}

                            <View
                                style={{
                                    height: 3,
                                    backgroundColor: "#000",
                                    marginTop: 10,
                                    marginBottom: 20,
                                }}
                            ></View>

                            <TouchableOpacity
                                style={{}}
                                onPress={() => setOpenCameraForBack(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        borderColor: "#ccc",
                                        borderBottomWidth: 1,
                                        marginHorizontal: 30,
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flex: 1,
                                    }}
                                >
                                    <Ionicons name="camera-outline" size={30} color="#666" />
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 16,
                                        }}
                                    >
                                        Upload Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {aadharDocBack.uri != undefined && (
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        style={{ width: "100%", aspectRatio: 1.3, margin: "auto" }}
                                        source={{ uri: aadharDocBack.uri }}
                                    />
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
                            <Text style={styles.topTilte2}>* UPLOAD CONSENT FORM</Text>

                            <TouchableOpacity
                                style={{}}
                                onPress={() => setOpenCameraForConsent(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        borderColor: "#ccc",
                                        borderBottomWidth: 1,
                                        marginHorizontal: 30,
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flex: 1,
                                    }}
                                >
                                    <Ionicons name="camera-outline" size={30} color="#666" />
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 16,
                                        }}
                                    >
                                        Upload Consent Form
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {consentDoc.uri != undefined && (
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        style={{ width: "100%", aspectRatio: 1.3, margin: "auto" }}
                                        source={{ uri: consentDoc.uri }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>


                    {openCameraForFront && (
                        <Modal animationType="slide" transparent={true}>
                            <MyCamera
                                setOpenCamera={setOpenCameraForFront}
                                setDoc={setAaadharDocFront}
                            />
                        </Modal>
                    )}

                    {openCameraForBack && (
                        <Modal animationType="slide" transparent={true}>
                            <MyCamera
                                setOpenCamera={setOpenCameraForBack}
                                setDoc={setAaadharDocBack}
                            />
                        </Modal>
                    )}

                    {openCameraForConsent && (
                        <Modal animationType="slide" transparent={true}>
                            <MyCamera
                                setOpenCamera={setOpenCameraForConsent}
                                setDoc={setConsentDoc}
                            />
                        </Modal>
                    )}
                </>
            )}

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
                onPress={() => {handleSubmit();}}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Continue To Next SAP Scheme
                </Text>
              </TouchableOpacity>
            </View>



        </>
    )
}

export default SapSchemes



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
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: "#fff",
        color: "#000",
    },
});
