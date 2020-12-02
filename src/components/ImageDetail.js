import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//const ImageDetail = props => {
const ImageDetail = ({imageScource, titleName, score}) => {
    return(
    <View>
        <Image source = {imageScource}/>
        <Text>{titleName}</Text>
        <Text>Score: {score}</Text>
    </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;