import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons';
import { Ionicons } from 'react-native-vector-icons';
const InputBox = ({ inputData: { type, value, onChangeHandle, placeholder } }) => (
  <View behavior="padding" style={[styles.container, type !== 'search' ? styles.inputField : styles.searchBoxStyles]}>
    {type === 'search' && <Ionicons
      name="md-search"
      color="white"
      size={22}
      style={{ marginRight: 15, marginLeft: 20 }}
    />}
    <TextInput
      style={styles.inputBox}
      value={value}
      onChangeText={(text) => { onChangeHandle(type, text) }}
      placeholder={placeholder}
      autoCapitalize="none"
      keyboardType={type === 'phone' ? 'phone-pad' : type === 'email' ? 'email-address' : 'default'}
      autoCorrect={false}
      blurOnSubmit={true}
      secureTextEntry={type === 'password' ? true : false}
    />
  </View >
)

const styles = StyleSheet.create({
  container: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: "row",
  },
  inputField: {
    width: '95%',
    paddingRight: 20,
    borderRadius: 7,
    borderWidth: 0,
    height: 40,
    paddingLeft: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',

  },
  searchBoxStyles: {
    width: '95%',
    borderRadius: 7,
    borderWidth: 0,
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#2F3541',
  },
  inputBox: {
    width: '95%',
    fontSize: 14,
    alignContent:'center',
    color: 'rgba(255,255,255,0.5)',
  },
})

export default InputBox