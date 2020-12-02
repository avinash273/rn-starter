import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({colorName}) => {
    return (
        <View>
        <Text>{colorName}</Text>
        <Button title={`Increase ${colorName}`} />
        <Button title={`Decrease ${colorName}`} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;