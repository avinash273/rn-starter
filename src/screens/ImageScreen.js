import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            
            <ImageDetail
            titleName="Forest"
            imageScource = {require('../../assets/forest.jpg')}
            score="10"
            />

            <ImageDetail titleName="Beach" imageScource = {require('../../assets/mountain.jpg')} score="7"/>
            <ImageDetail titleName="Mountain" imageScource = {require('../../assets/beach.jpg')} score="6"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;