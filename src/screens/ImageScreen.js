import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail titleName="Forest"/>
            <ImageDetail titleName="Beach"/>
            <ImageDetail titleName="Mountain"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;