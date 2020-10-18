import React from 'react'
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const Card = ({ navigation, name, type, date, description, imgUrl, insideImage, clickHandle, id }) => (
  <TouchableOpacity onPress={() => clickHandle && clickHandle(id)} style={styles.container}>
    {insideImage ? <LinearGradient start={[1, 0]} end={[1, 1]} colors={["#3A3D5C", '#e7e8e6', '#e7e8e6', '#e7e8e6', "#000", "#000"]} style={{ flex: 1, height: type ? '73%' : '100%', display: 'flex', borderRadius: 10 }}>
      <ImageBackground source={{
        uri: imgUrl
      }}
        style={{ flex: 1, borderRadius: type ? 200 : 10 }}
        imageStyle={{ borderRadius: type ? 200 : 10, opacity: 0.7 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', marginBottom: 15, marginLeft: 10 }}>
          <Text style={[styles.name, { fontSize: 17 }]}>{name}</Text>
          <Text style={[styles.description, { fontSize: 15 }]}>{date}</Text>
          <Text style={[styles.description, { fontSize: 15 }]}>{description}</Text>
        </View>
      </ImageBackground>
    </LinearGradient > : <View style={{ flex: 1, minHeight: type ? '100%' : 90, display: 'flex' }}>
        <ImageBackground source={{
          uri: imgUrl
        }}
          style={{ flex: 1, borderRadius: type ? 200 : 8 }}
          imageStyle={{ borderRadius: type ? 200 : 8, opacity: 0.8 }}>
        </ImageBackground>
      </View >}
    {
      !insideImage && name && <View style={{ marginTop: 10, height: '27%' }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{date} | {description}</Text>
      </View>
    }
  </TouchableOpacity >
)

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    opacity: 1,
    fontWeight: 'bold',
  },
  description: {
    color: '#DAD7D7',
    opacity: 0.6
  },
  container: {
    opacity: 1,
    overflow: 'hidden',
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    flex: 1,
  }
})
export default Card