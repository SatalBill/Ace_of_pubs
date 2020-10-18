import React, { Component } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity, Text, SafeAreaView,Platform } from 'react-native'
import Card from '../../components/Card'
import Search from '../../components/Search'
import { connect } from 'react-redux'
import { FetchEvents, clearEventDetailCreater } from '../../actions/Discover/discover'
class ViewAllDiscover extends Component {
  state = {
    discoverAll: [
      {
        id: '1',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
      {
        id: '2',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
      {
        id: '3',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
      {
        id: '4',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
      {
        id: '5',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
      {
        id: '6',
        imgUrl: 'http://cdn-cms5.hotelrunner.com/assets/photos/original/71211e1f-c1cc-4213-8b97-b84f4e0b186c.jpg',
        name: 'Stranger Things',
        date: '10 july',
        description: 'fucking awesome',
        isLive: false
      },
    ]
  }
  eventClickHandle = (id) => {
    // alert(id)
    this.props.dispatch(clearEventDetailCreater())
    this.props.navigation.navigate('EventDetails', { id })
  }
  handleFilter = () => {
    this.props.navigation.navigate('Filter')
  }
  componentDidMount() {
    this.props.dispatch(FetchEvents())
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ width: '82%', alignSelf: 'flex-end', marginRight: 10, marginTop: 10 }}>
            <Search />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Discover</Text>
            <TouchableOpacity onPress={this.handleFilter}>
              <Text style={styles.viewAllButton}>Filter</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ width: '100%', marginLeft: 20, marginBottom: 15, marginTop: 20 }}
            initialNumToRender={5}
            // data={this.props.events}
            data={this.state.discoverAll}
            renderItem={({ item }) => (
              <View style={{ height: 220, marginBottom: 10, width: '93%', marginBottom: 20 }}>
                <Card id={item.id} name={item.name} description={item.description} date={item.date} imgUrl={item.imgUrl} insideImage={true} clickHandle={this.eventClickHandle} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 25 : 0,
    backgroundColor: 'rgb(36,42,56)'
  },
  heading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    width: '80%'
  },
  viewAllButton: {
    color: 'red',
    marginRight: 20,
  },
  headingContainer: {

    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  }
})
const mapStateToProps = (state) => {
  return {
    events: state.discover.events
  }
}
export default connect(mapStateToProps)(ViewAllDiscover)