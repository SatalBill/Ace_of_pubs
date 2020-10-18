import React, { Component } from 'react'
import { View, FlatList, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search'
import Card from '../../components/Card'
import { connect } from 'react-redux'
import { FetchEvents, FetchPubs, FetchNews, clearEventDetailCreater } from '../../actions/Discover/discover'


class Discover extends Component {
  state = {
    discoverData: [
      {
        id: '1',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '2',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '3',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '4',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '5',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '6',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
    ],
    trendingPubsData: [
      {
        id: '1',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
      {
        id: '2',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
      {
        id: '3',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
      {
        id: '4',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
      {
        id: '5',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
      {
        id: '6',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
      },
    ],
    newsData: [
      {
        id: '1',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '2',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '3',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '4',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '5',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },
      {
        id: '6',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'Parking Lot',
        isLive: false
      },]
  }
  viewAll = () => {
    this.props.navigation.navigate('ViewAll')
  }
  eventClickHandle = (id) => {
    this.props.dispatch(clearEventDetailCreater())
    this.props.navigation.navigate('EventDetails', { id })
  }
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.dispatch(FetchEvents())
      this.props.dispatch(FetchPubs())
      this.props.dispatch(FetchNews())
    })
  }
  render() {
    return (
      <ScrollView style={{ marginLeft: 12, flex: 1 }}>
        <View style={{ marginTop: 10 }}>
          <Search />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Discover</Text>
          <TouchableOpacity onPress={this.viewAll}>
            <Text style={styles.viewAllButton}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ display: 'flex', height: '19%' }}
          initialNumToRender={5}
          data={this.props.events}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: 160, display: 'flex', height: '100%', flexDirection: 'row' }}>
              <Card id={item.id} name={item.name} description={item.description} date={item.date} imgUrl={item.imgUrl} clickHandle={this.eventClickHandle} />
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={true}

        />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Trending Pubs</Text>
        </View>
        <FlatList
          style={{ display: 'flex', height: 135 }}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={5}
          data={this.props.pubs}
          renderItem={({ item }) => (
            <View style={{ width: 105, display: 'flex', height: '100%', flexDirection: 'row', marginRight: 12 }}>
              <Card id={item.id} type="circle" imgUrl={item.imgUrl} />
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={true}

        />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>News</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            style={{ width: '50%' }}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            data={this.props.news ? this.props.news.filter((news, index) => index % 2 === 0) : []}
            renderItem={({ item }) => (
              <View style={{ height: 220, marginBottom: 10 }}>
                <Card id={item.id} name={item.name} description={item.description} imgUrl={item.imgUrl} />
              </View>
            )}
            keyExtractor={item => item.id}


          />
          <FlatList
            style={{ width: '50%' }}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            data={this.props.news ? this.props.news.filter((news, index) => index % 2 !== 0) : []}
            renderItem={({ item }) => (
              <View style={{ height: 220, marginBottom: 10 }}>
                <Card id={item.id} name={item.name} description={item.description} imgUrl={item.imgUrl} />
              </View>
            )}
            keyExtractor={item => item.id}

          />
        </View>
      </ScrollView >
    )
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: '#FFFFFF'
  },
  heading: {
    color: 'white',
    fontSize: 34,
    marginBottom: 20,
  },
  viewAllButton: {
    color: 'red',
    marginRight: 10,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  }
})
const mapStateToProps = (state) => {
  return {
    events: state.discover.events ? state.discover.events.slice(0, 5) : [],
    pubs: state.discover.pubs,
    news: state.discover.news
  }
}
export default connect(mapStateToProps)(Discover)