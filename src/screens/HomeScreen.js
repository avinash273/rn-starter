import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//navigating through screens use props and props.navigation.navigate
//1* --> is alternative using entire props object which has many properties
//1* const HomeScreen = props => {
const HomeScreen = ({navigation}) => {
  return( 
    <View>
      <Text style={styles.text}>Avinash Shanker's HomeScreen</Text>
      <Button
      title = "Go to Components Demo"
      //1* onPress = {() => props.navigation.navigate('Components')}
      onPress = {() => navigation.navigate('Components')}
      />

      <TouchableOpacity onPress = {() => navigation.navigate('Lists')}>
        <Text>Press to go to List Demo</Text>
      </TouchableOpacity>

      <Button
      title = "Go to Image Demo"
      onPress = {() => navigation.navigate('Image')}
      />

    </View>
  );
};
 
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;