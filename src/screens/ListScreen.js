import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Avinash'},
        {name: 'Akash'},
        {name: 'Maddy'},
        {name: 'Andy'}
    ];
    return (
    <FlatList
    data = {friends}
    renderItem = {({ item }) => {
    return <Text>{item.name}</Text>
    }}
    />);
};

const styles = StyleSheet.create({});

export default ListScreen;