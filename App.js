/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View, Text} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}>

      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
    );
  };
}
