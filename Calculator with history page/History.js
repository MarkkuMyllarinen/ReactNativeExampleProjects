import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function History({ navigation, route }) {

    const { historyList } = route.params

    return (
        <View style={styles.HistoryContainer}>
            {historyList.map(item => <Text style={{fontSize: 20}} key={item}>{item}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    HistoryContainer: {
        marginHorizontal: 100,
        marginTop:50,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
