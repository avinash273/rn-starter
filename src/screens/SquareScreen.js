import React, {useReducer, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red);

    return (
        <View>
            <ColorCounter
            onIncrease={() => setRed(red + COLOR_INCREMENT)}
            onDecrease={() => setRed(red - COLOR_INCREMENT)}
            colorName="Red"
            />
            <ColorCounter
            onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}
            colorName="Green"
            />
            <ColorCounter
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
            colorName="Blue"
            />

            <View style={{height: 450, width: 500, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 25
    }
  });

export default SquareScreen;