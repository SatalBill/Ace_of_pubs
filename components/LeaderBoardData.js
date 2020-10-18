import React from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import PointsIcon from '../assets/icons/pointsIcon.png'
const LeaderBoardData = ({ data: { url, name, rank, city, points } }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ marginTop: 8, flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3D3D3', opacity: 0.8, borderRadius: 15, height: 50 }}>
      <Image style={{ alignSelf: 'center', borderRadius: 15, width: 28, height: 28 }}
        source={{ uri: url }}>
      </Image>
    </View>
    <View style={{ marginLeft: 20, flex: 3, height: 70, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderColor: '#eee8e8' }}>
      <View style={{ flex: 2 }}>
        <Text>{name}</Text>
        <Text>Rank: {rank}, {city}</Text>
      </View>
      <Image source={PointsIcon} style={{ width: 35, marginRight: 20, height: 35 }}></Image>
      <View style={{ flex: 1 }}>
        <Text>{points}</Text>
      </View>
    </View>
  </View>
)
export default LeaderBoardData