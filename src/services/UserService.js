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
  postUser(user) {
    return api.post('/auth/registration/', user)
  },
  /* deleteUser(id) {
    return api.put(`/auth/update-user/${id}/`)
  },
  deleteUser(id, payload) {
    return api.patch(`/auth/update-user/${id}/`, payload)
  },*/
}
