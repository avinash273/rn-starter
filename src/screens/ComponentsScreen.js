import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is a ComponentScreen</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;