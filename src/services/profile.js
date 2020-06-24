import axios from 'axios'

export default {
  changeMyPassword(payload) {
    return axios.post('/profile/changePassword', payload)
  },
  getProfile() {
    return axios.get('/auth/user')
  },
  saveProfile(payload) {
    return axios.patch('/auth/user', payload)
  },
  //test
}