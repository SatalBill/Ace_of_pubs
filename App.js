// import * as React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import useLinking from './navigation/useLinking';

// const Stack = createStackNavigator();

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);

//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();

//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());

//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//           <Stack.Navigator>
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });





import * as React from 'react';
import { Button, Text, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import DiscoverScreen from './screens/Discover/Discover';
import ViewAllDiscoverScreen from './screens/Discover/ViewAllDiscover';
import FilterScreen from './screens/Discover/Filter';

import LeaderBoardScreen from './screens/LeaderBoard/LeaderBoard';

import store from "./store";
import { Provider } from "react-redux";


// import { Ionicons } from '@expo/vector-icons';


// React.useEffect(() => {
//   async function loadResourcesAndDataAsync() {
//     try {
//       // SplashScreen.preventAutoHide();

//       // Load our initial navigation state
//       // setInitialNavigationState(await getInitialState());

//       // Load fonts
//       await Font.loadAsync({
//         ...Ionicons.font,
//         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       });
//     } catch (e) {
//       // We might want to provide this error information to an error reporting service
//       console.warn(e);
//     } 
//   }

//   loadResourcesAndDataAsync();
// }, []);



const DiscoverStack = createStackNavigator();
function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
      <DiscoverStack.Screen name="ViewAllDiscover" component={ViewAllDiscoverScreen} />
      <DiscoverStack.Screen name="Filter" component={FilterScreen} />
      <DiscoverStack.Screen name="Details" component={DetailsScreen} />
    </DiscoverStack.Navigator>
  );
}

const LeaderBoardStack = createStackNavigator();
function LeaderBoardStackScreen() {
  return (
    <LeaderBoardStack.Navigator>
      <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
    </LeaderBoardStack.Navigator>
  );
}

const QuizStack = createStackNavigator();
function QuizStackScreen() {
  return (
    <QuizStack.Navigator>
      <QuizStack.Screen name="Settings" component={SettingsScreen} />
      <QuizStack.Screen name="Details" component={DetailsScreen} />
    </QuizStack.Navigator>
  );
}

const NotificationStack = createStackNavigator();
function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen name="Settings" component={SettingsScreen} />
      <NotificationStack.Screen name="Details" component={DetailsScreen} />
    </NotificationStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconUrl;
              if (route.name === 'Discover') {
                iconUrl = !focused ? require('./assets/images/discover.png') : require('./assets/images/discover_active.png');
              } else if (route.name === 'LeaderBoard') {
                iconUrl = !focused ? require('./assets/images/leaderboard.png') : require('./assets/images/leaderboard_active.png');
              } else if (route.name === 'Quiz') {
                iconUrl = !focused ? require('./assets/images/quiz.png') : require('./assets/images/quiz_active.png');
              } else if (route.name === 'Notification') {
                iconUrl = !focused ? require('./assets/images/notification.png') : require('./assets/images/notification_active.png');
              } else if (route.name === 'Profile') {
                iconUrl = !focused ? require('./assets/images/profile.png') : require('./assets/images/profile_active.png');
              }
              // You can return any component that you like here!
              // return <Ionicons name={iconName} size={size} color={color} />;
              return <Image source={iconUrl} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'rgb(246,112,98)',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Discover" component={DiscoverStackScreen} />
          <Tab.Screen name="LeaderBoard" component={LeaderBoardStackScreen} />
          <Tab.Screen name="Quiz" component={QuizStackScreen} />
          <Tab.Screen name="Notification" component={NotificationStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}