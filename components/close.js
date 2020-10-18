import React from 'react'
// import { AntDesign } from '@expo/vector-icons';
import { AntDesign } from 'react-native-vector-icons'
import { StyleSheet } from 'react-native'
const close = () => (
  <AntDesign name="close" color="white" style={styles.close} />
)

const styles = StyleSheet.create({
  close: {
    fontSize: 30,
    marginTop: '10%',
    marginLeft: 20
  },
})

export default close