import { combineReducers } from "redux";
import DiscoverReducer from './Discover'
import ProfileReducer from './Profile'
import Notification from './Notification'
import LeaderBoard from './LeaderBoard'
import Quiz from './Quiz'
import Auth from './Auth'
import Common from './common'
import Friend from './Friend'

export default combineReducers({
  discover: DiscoverReducer,
  profile: ProfileReducer,
  notification: Notification,
  leaderboard: LeaderBoard,
  auth: Auth,
  quiz: Quiz,
  common: Common,
  Friend: Friend
});