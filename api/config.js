const BASE_PATH = 'https://gothic-victor-254816.appspot.com'

export default {
  auth: {
    login: BASE_PATH + '/api/users/login'
  },
  api: {
    getAllEvents: BASE_PATH + '/api/event',
    getAllTrendingPubs: BASE_PATH + '/api/pubs',
    getAllNews: BASE_PATH + '/api/news',
    fetchEventDetails: BASE_PATH + '/api/event',
    login: BASE_PATH + '/api/users/login',
    register: BASE_PATH + '/api/users/register',
    getEventAttendance: BASE_PATH + '/api/event/{event_id}/attendance',
    postComment: BASE_PATH + '/api/event/{event_id}/comments',
    getInterestedUserForEvent: BASE_PATH + '/api/event/{event_id}/interested',
    inviteFriendToEvent: BASE_PATH + '/api/event//{event_id}/invite/{friend_id}',
    remindUser: BASE_PATH + '/api/event/{event_id}/remindme',
    getUserProfile: BASE_PATH + '/api/profile',
    editUserProfile: BASE_PATH + '/api/profile/edit',
    uploadProfileImage: BASE_PATH + '/api/profile/uploadPhoto',
    checkNotification: BASE_PATH + '/notifications/unreaded',
    getAllNotification: BASE_PATH + '/notifications',
    getLeaderBoardData: BASE_PATH + '/leaderBoard/sort/{filter}',
    getQuizMetaInfo : BASE_PATH + '/api/quiz',
    getQuizCategories: BASE_PATH + '/api/quiz/topic/all',
    addTopicToUser: BASE_PATH + '/api/quiz/topic',
    getQuizByCategory: BASE_PATH + '/api/quiz/topic/{topic}',
    getQuizById: BASE_PATH + '/api/quiz/{QUIZ_ID}/{FRIEND_ID}',
    isInterestedForEvent: BASE_PATH + '/api/event/{event_id}/interested',
    notificationReadAction: BASE_PATH + '/notifications/action',
    quizComplete: BASE_PATH + '/api/quiz/{QUIZ_ID}/done',
    getAllFriends: BASE_PATH + '/api/friend',
    challengeUserForQuiz: BASE_PATH + '/api/quiz/{QUIZ_ID}/{FRIEND_ID}/challenge',
  }
}
