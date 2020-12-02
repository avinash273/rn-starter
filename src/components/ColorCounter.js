import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({colorName, onIncrease, onDecrease}) => {
    return (
        <View>
        <Text style={styles.text}>{colorName}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${colorName}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${colorName}`} />
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 20
    }
});

export default ColorCounter;