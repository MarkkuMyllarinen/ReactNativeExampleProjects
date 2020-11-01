import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import History from './History';


export default function Calculator({ navigation }) {

    const Stack = createStackNavigator();

    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");

    const [historyList, setHistory] = React.useState([]);


    const [result, setResult] = React.useState("");

    const buttonPressedPlus = () => {
        var result = +num1 + +num2;
        setResult(result)
        setHistory(historyList => [...historyList, (num1 + " + " + num2 + " = " + result).toString()])
    }

    const buttonPressedMinus = () => {
        var result = +num1 - +num2;
        setResult(result)
        setHistory(historyList => [...historyList, (num1 + " - " + num2 + " = " + result).toString()])
    }

    const buttonHistory = () => {
        navigation.navigate("History")
    }

    return (<View style={styles.calcContainer}>


        <View style={styles.textBox}>
            <Text style={{fontSize: 40}}>Result is: {result}</Text>
            <TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={num1 => setNum1(num1)} value={num1} />
            <TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={num2 => setNum2(num2)} value={num2} />
        </View>
        <View style={styles.buttons}>
            <Button title="  +  " onPress={buttonPressedPlus}></Button>
            <Button title="  -  " onPress={buttonPressedMinus}></Button>
            <Button title="History" onPress={() => navigation.navigate('HistoryScreen', { historyList })}></Button>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    calcContainer: {
        width: "100%",
        flex: 1,
        marginVertical: 100,
        backgroundColor: '#fff'
    },
    buttons: {
        marginHorizontal: 100,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    textBox: {
        marginTop: 200,
        alignItems: "center",
        justifyContent: "space-between"
    }
});
