import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Avinash', age: 10},
        {name: 'Akash', age: 20},
        {name: 'Maddy', age: 30},
        {name: 'Asndy', age: 40}
    ];
    return (
    <FlatList
    keyExtractor = {(friend) => friend.name}
    data = {friends}
    renderItem = {({ item }) => {
    return <Text style = {styles.textStyle}>Name:{item.name} age:{item.age}</Text>;
    }}
    />);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5
    }
});

export default ListScreen;