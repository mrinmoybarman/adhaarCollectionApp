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


function InitStage(props) {
    const [houseHoldId, setHouseHoldId] = useState(''); // this must go to redux

    const gotoEnd = () => {
        const step = props.step + 1;
        props.setStep(Number(step));
        console.log("goint to PMAYG");
        // please pass all data to parent 
        props.setFormData({ ...props.formData, houseHoldId });
    };

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
                    <View>
                        <Text style={styles.topTilte2}>* ENTER HOUSEHOLD NUMBER</Text>
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
                                    placeholder="ENTER HOUSEHOLD NUMBER"
                                    placeholderTextColor="#8b9cb5"
                                    keyboardType="default"
                                    maxLength={20}
                                    onChangeText={setHouseHoldId}
                                    value={houseHoldId}
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
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
                onPress={() => { console.log({ houseHoldId }); gotoEnd(); }}>
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
    )
}

export default InitStage


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
