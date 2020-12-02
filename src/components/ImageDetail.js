import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
    return(
    <View>
        <Image source = {require('../../assets/beach.jpg')}/>
        <Text>{props.titleName}</Text>
    </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;