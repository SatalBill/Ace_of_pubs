import axios from 'axios'
import { serializeQueryParams } from './apiUtils'
import apiHeaders from './apiHeaders'

export default {
  makeGetRequest(path, callback, fail, params) {
    path += serializeQueryParams(params)
    axios.get(path, { withCredentials: true, headers: apiHeaders })
      .then(callback)
      .catch(fail)
  },
  makePostRequest(path, callback, fail, payload, params) {
    if (params != null) {
      path += serializeQueryParams(params)
    }
    //  console.log("===URL===="+JSON.stringify(path,null,2));
    axios.post(path, payload, { withCredentials: true, headers: apiHeaders })
      .then(callback)
      .catch(fail)

  },
   makeDeleteRequest(path, callback, fail) {
    axios.delete(path, { withCredentials: true, headers: apiHeaders })
      .then(callback)
      .catch(fail)
  },
  makePutRequest(path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.put(path, payload, { withCredentials: true, headers: apiHeaders })
      .then(callback)
      .catch(fail)
  },
  getImageFromBlob(path, callback, fail, params) {
    let headers = { ...apiHeaders }
    headers.Accept = 'application/json'
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    path += serializeQueryParams(params)
    axios.get(path, { responseType: 'arraybuffer', withCredentials: true, headers }).then(callback).catch(fail)
  },
  uploadFile(path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        ...apiHeaders
      },
      withCredentials: true
    }).then(callback)
      .catch(fail)
  }
}
