import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import LeaderBoardData from '../../components/LeaderBoardData'
import ProfileStatus from '../../components/ProfileStatus'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import DropDown from '../../components/DropDown'
import { connect } from 'react-redux'
import topBg from '../../assets/images/topDesign.png'
import whiteBg from '../../assets/images/bg.svg'
import { normalize } from '../../utils/font'
import { getLeaderBoardData } from '../../actions/LeaderBoard/LeaderBoard'
class LeaderBoard extends Component {
  state = {
    selectedItem: {
      id: 'CITY',
      displayName: 'City'
    },
    dropDownItem: [
      {
        id: 'GENRE',
        displayName: 'Genre'
      },
      {
        id: 'CITY',
        displayName: 'City'
      },
      {
        id: 'OVERALL',
        displayName: 'Over All Standings'
      },
    ]
  }
  handleDropDownItemClick = (id) => {
    const item = this.state.dropDownItem.filter(item => item.id === id)[0]
    this.setState({
      selectedItem: item
    })
    this.props.dispatch(getLeaderBoardData(id))
  }
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.dispatch(getLeaderBoardData(this.state.selectedItem.id))
    })
  }
  render() {
    return (

      <View style={{ flex: 1, marginTop: normalize(50), marginRight: normalize(10), marginLeft: normalize(10), marginBottom: normalize(20) }}>
        <View>
          <Image source={topBg} style={{ width: '100%' }} />
          <Text style={{ position: 'absolute', top: normalize(20), right: normalize(40), color: '#fff', fontSize: 20, }}>LEADERBOARD</Text>
        </View>
        <ImageBackground source={whiteBg}
          style={{ flex: 6, borderRadius: 10, height: '100%' }}
          imageStyle={{ borderRadius: 10 }}>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-start', marginBottom: 15, marginLeft: 10 }}>
            <View style={styles.main}>
              <View style={{ flex: 0.4 }}>
                <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <View style={{ marginLeft: 10 }}>
                    <ImageBackground style={styles.avatar}
                      imageStyle={{ borderRadius: 120 }} source={{
                        uri: this.props.leaderBoardData.userData.url
                      }}>
                    </ImageBackground>
                    <Text style={{ marginRight: 10, marginTop: 10, opacity: 0.7 }}>{this.props.leaderBoardData.userData.name}</Text>
                  </View>
                  <View style={{ zIndex: 10 }}>
                    <ProfileStatus points={this.props.leaderBoardData.userData.points} level={this.props.leaderBoardData.userData.level} experience={this.props.leaderBoardData.userData.experience} />
                    <View style={{ zIndex: 20, marginTop: 5, alignSelf: 'flex-end' }}>
                      <DropDown onClick={this.handleDropDownItemClick} selectedItem={this.state.selectedItem} dropDownItem={this.state.dropDownItem} />
                    </View>
                  </View>
                </View>
              </View>
              <ScrollView style={{ flex: 4.7 }}>
                {
                  this.props.leaderBoardData.userList.map(data => (
                    <LeaderBoardData data={data} key={data.id} />
                  ))
                }
              </ScrollView>
            </View>
          </View>
        </ImageBackground>

        <TouchableOpacity style={styles.footer}>
          <LinearGradient
            start={[1, 1]} end={[1, 0]}
            colors={['#8CA2B9', '#9AAFC2', '#A4B6CA', '#AEBFD1', '#B2C3D3']}
            style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo size={30} name="share" color="white" />
            <Text style={styles.shareText}>Share</Text>
          </LinearGradient >
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  shareText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 19,
    color: '#fff',
    marginLeft: 20
  },
  heading: {
    alignItems: "flex-end",
    marginRight: 0,
    marginBottom: 30,
    justifyContent: 'center',
    flex: 0.9,
    backgroundColor: '#333B48',
    opacity: 0.8,
    height: 60,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  main: {
    borderRadius: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft: 5,
  },
  footer: {
    flex: 0.8,
    width: '100%',
    marginLeft: 'auto',
    backgroundColor: '#acbfd0',
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center',
    marginRight: 'auto',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row'
  },
  text: {
    marginTop: 30,
    color: '#FFFFFF'
  }
})
const mapStateToProps = (state) => {
  console.log(state)
  return {
    leaderBoardData: state.leaderboard.leaderBoardData ? state.leaderboard.leaderBoardData : {
      userData: {},
      userList: [],
    }
  }
}
export default connect(mapStateToProps)(LeaderBoard)