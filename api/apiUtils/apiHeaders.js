const header = {
  // Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTcxNDkyNjgwLCJleHAiOjE1NzIzNTY2ODB9.tjpOMENg9Yz8WeXTaK3JttAO2B0iVn36bKFmrXjIT0RCwDSDDxJVd9vpW2MEElT_SKq2qBYoqQk-QQFUOTqVvw'
  Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTcxNDkzNDE4LCJleHAiOjE1NzIzNTc0MTh9.Qt9W5p-jib9-ZDMNblTSyyfUyaEDJMAqdM67goVOXVct6hAfyDRyJSlQn2ULV8tFPpxOdw5fczfhMinSZ1ozsQ'
}
export const setAuthHeaders = (token) => {
  header = {
    ...header,
    Authorization: `Bearer ${token}`
  }
}

export default header