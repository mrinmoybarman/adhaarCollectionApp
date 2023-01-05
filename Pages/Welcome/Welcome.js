import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Welcome({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <TouchableOpacity style={{ backgroundColor: "blue", width: "30%", marginRight: 5 }} onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: 'white' }}>Welcome</Text>
            </TouchableOpacity>
        </View>
    )
}
