import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter colorName="Red"/>
            <ColorCounter colorName="Blue"/>
            <ColorCounter colorName="Green"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;