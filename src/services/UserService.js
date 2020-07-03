import api from '@/services/api'

export default {
  getUsers(params) {
    return api.get('/auth/list-users/', {
      params,
    })
  },
  getUser(id) {
    return api.get('/auth/update-user/' + id)
  },
  postUser(payload) {
    return api.post('/auth/registration/', payload)
  },
  updateUser(id, payload) {
    return api.patch(`/api/auth/update-user/${id}/`, payload)
  },
  deleteUser(id, payload) {
    return api.patch(`/api/auth/update-user/${id}/`, payload)
  },
}
