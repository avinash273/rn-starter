import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = "Avinash";
    return (
        <View>
            <Text style = {styles.textStyle}>We are in components screen</Text>
            <Text style = {styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;