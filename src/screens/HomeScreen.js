import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//navigating through screens use props and props.navigation.navigate
const HomeScreen = props => {
  return(
    <View>
      <Text style={styles.text}>Avinash Shanker's HomeScreen</Text>
      <Button
      title = "Go to Components Demo"
      onPress = {() => props.navigation.navigate('Components')}
      />

      <TouchableOpacity onPress = {() => props.navigation.navigate('Lists')}>
        <Text>Press to go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;