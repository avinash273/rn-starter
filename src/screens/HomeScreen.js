import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

//navigating through screens use props and props.navigation.navigate
//1* --> is alternative using entire props object which has many properties
//1* const HomeScreen = props => {
const HomeScreen = ({navigation}) => {
  return( 
    <View>
      <Text style={styles.text}>Avinash's HomeScreen</Text>
      <Button
      title = "Go to Components Demo"
      //1* onPress = {() => props.navigation.navigate('Components')}
      onPress = {() => navigation.navigate('Components')}
      />

      <Button
      title = "Go to Image Demo"
      onPress = {() => navigation.navigate('Lists')}
      />

      <Button
      title = "Go to Image Demo"
      onPress = {() => navigation.navigate('Image')}
      />

      <Button
      title = "Go to Counter Demo"
      onPress = {() => navigation.navigate('Counter')}
      />

      <Button
      title = "Go to Color Demo"
      onPress = {() => navigation.navigate('Color')}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default HomeScreen;

/*
      <TouchableOpacity onPress = {() => navigation.navigate('Lists')}>
        <Text>Press to go to List Demo</Text>
      </TouchableOpacity>
*/