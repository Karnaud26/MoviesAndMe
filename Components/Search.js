import React from 'react'
import {View, TextInput, Button} from 'react-native'


class Search extends React.Component   {
  render() {
    return (
      <View>
        <TextInput placeholder='Enter the text here'/>
        <Button title='Search' onPress={() => {}}/>
      </View>
    )
  }
}
