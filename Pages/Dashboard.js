import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../Context/AuthContext';



function Dashboard({ navigation }) {
    
    const {logout} = useContext(AuthContext);
    
    const onPress = () => {
        console.log('button pressed');
    }

    
    return (
        <>
            <View style={styles.toptitlebox}>
                <Text style={styles.topTilte}>Panchayat & Rural Development</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./../assets/emblame-golden.png')} style={{ height: 30, width: 20, marginLeft: 10 }} />
                </View>
            </View>
            <View style={styles.toptitlebox}>
                <Text style={styles.topTilte}>Benificiary Aadhaar Card Entry !</Text>
            </View>
            <View style={styles.dash}>
                <View style={styles.dashbox1}>
                    <View style={styles.round}>
                        <TouchableOpacity
                            style={styles.button.round}
                            onPress={() => navigation.navigate('ENTER BENEFICIARY DETAILS')}
                        >
                            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Add Aadhaar Details</Text>
                            <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashbox2}>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
                        <MaterialIcons name='supervised-user-circle' size={50} color="#000" />
                        <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', flex: 1 }}>457</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', flex: 1 }}>Total Number Of Form Submitted</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1, backgroundColor: '#0002', borderRadius: 10, padding: 2, opacity: 0.5 }}>
                    <View style={{ flex: 1, backgroundColor: '#0002', borderRadius: 10, padding: 10, opacity: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#000' }}>
                            <Text style={styles.topTilte}>Registered Today</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={onPress}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Press Here</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ color: '#0009' }}>Name</Text>
                            <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                        </View>

                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Jimson Boro</Text>
                                <Text style={{ fontWeight: 'bold' }}>1234-5678-92</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#0009' }}>Name</Text>
                                <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                            </View>
                        </View>

                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Jimson Boro</Text>
                                <Text style={{ fontWeight: 'bold' }}>1234-5678-92</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#0009' }}>Name</Text>
                                <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                            </View>
                        </View>

                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Jimson Boro</Text>
                                <Text style={{ fontWeight: 'bold' }}>1234-5678-92</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#0009' }}>Name</Text>
                                <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                            </View>
                        </View>

                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Jimson Boro</Text>
                                <Text style={{ fontWeight: 'bold' }}>1234-5678-92</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#0009' }}>Name</Text>
                                <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                            </View>
                        </View>

                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Jimson Boro</Text>
                                <Text style={{ fontWeight: 'bold' }}>1234-5678-92</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#0009' }}>Name</Text>
                                <Text style={{ color: '#0009' }}>Adhaar No.</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

            <TouchableOpacity
                                style={styles.button}
                                onPress={logout}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Press Here To Log Out</Text>
                            </TouchableOpacity>

        </>
    )
}

export default Dashboard


const styles = StyleSheet.create({
    toptitlebox: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    topTilte: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dash: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    dashbox1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        aspectRatio: 1,
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#00000011',
        border: '1px solid #000',
    },
    dashbox2: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 180,
        aspectRatio: 1,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#00000011',
        border: '1px solid #000',
    },
    round: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#4557FB',
        padding: 20,
        aspectRatio: 1,
        flex: 1,
        justifyContent: 'space-around',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
        backgroundColor: 'white'
    }
});
