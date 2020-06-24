import api from '@/services/api'

export default {
  getUsers() {
    return api.get('/auth/list-users/')
  },
  getUser(id) {
    return api.get('/auth/update-user/' + id)
  },
  updateUser(id, payload) {
    return api.patch(`/auth/update-user/${id}`, payload)
  },
  getUserAuth() {
    return api.get('/auth/user/')
  },
}

/*
import axios from 'axios'

export default {
  getUsers(params) {
    return axios.get('/users', {
      params
    })
  },
  editUser(id, payload) {
    return axios.patch(`/users/${id}`, payload)
  },
  saveUser(payload) {
    return axios.post('/users/', payload)
  },
  deleteUser(id) {
    return axios.delete(`/users/${id}`)
  }
}

*/
