import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import InputBox from '../components/InputBox'
import Constants from 'expo-constants';
// import { Ionicons } from '@expo/vector-icons';
class Search extends Component {
  state = {
    searchValue: ''
  }
  onChangeHandle = (type, value) => {
    this.setState({
      searchValue: value
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <InputBox inputData={{
          value: this.state.searchValue,
          onChangeHandle: this.onChangeHandle,
          placeholder: 'Search',
          type: 'search'
        }} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  }
})
export default Search