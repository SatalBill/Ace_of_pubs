import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
class DropDown extends Component {
  state = {
    shouldPopUpVisible: false,
  }
  toggleDropDown = () => {
    this.setState({
      shouldPopUpVisible: !this.state.shouldPopUpVisible
    })
  }
  render() {
    return (
      <View style={[{ position: 'relative', backgroundColor: 'red', borderRadius: 7 }, styles.shadow]}>
        <TouchableOpacity onPress={this.toggleDropDown} style={[{ width: 200, height: 35, marginTop: 2, justifyContent: 'center' }, styles.shadow, styles.button]}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Text>{this.props.selectedItem.displayName}</Text>
            <AntDesign style={{ position: 'absolute', right: 10 }} name={this.state.shouldPopUpVisible ? 'caretdown':'caretright'} color='#000' size={11} />
          </View>
        </TouchableOpacity>
        {this.state.shouldPopUpVisible && <View style={{ backgroundColor: 'white', top: 0, height: 70, width: 200, borderRadius: 7 }}>
          {this.props.dropDownItem.filter(item => item.id !== this.props.selectedItem.id).map((item) => (
            <TouchableOpacity onPress={() => {
              this.toggleDropDown()
              this.props.onClick(item.id)
            }} key={item.id} style={[{ marginTop: 2, flex: 1, height: '100%', flex: 1, width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.shadow, styles.button]}>
              <Text>{item.displayName}</Text>
            </TouchableOpacity>
          ))
          }
        </View>}
      </View >
    )
  }
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 3
  },
  shadow: {
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    elevation: 1,
    shadowRadius: 70,
    backgroundColor: "#fff"
  }
})
export default DropDown