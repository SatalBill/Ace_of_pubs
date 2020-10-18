import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PointsIcon from '../assets/icons/pointsIcon.png'
import LevelIcon from '../assets/icons/levelIcon.png'
import ExperienceIcon from '../assets/icons/experienceIcon.png'
const ProfileStatus = ({ points, experience, level, textColor}) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image source={ExperienceIcon} />
      <Text style={[styles.text, {color: textColor ? textColor : 'black'}]}>{experience}</Text>
    </View>
    <View style={styles.iconContainer}>
      <Image source={PointsIcon} />
      <Text style={[styles.text, {color: textColor ? textColor : 'black'}]}>{points}</Text>
    </View>
    <View style={styles.iconContainer}>
      <Image source={LevelIcon} />
      <Text style={[styles.text, {color: textColor ? textColor : 'black'}]}>{level}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 220
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    opacity: 0.8,
  }
})
export default ProfileStatus