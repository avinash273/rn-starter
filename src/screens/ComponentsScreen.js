import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    return <View>
        <Text style={styles.textStyle}>This is a ComponentScreen</Text>
        </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;