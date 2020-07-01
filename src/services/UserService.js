import api from '@/services/api'

export default {
  getUsers(params) {
    return api.get('/auth/list-users/', {
      params,
    })
  },
  /* getUsers() {
    return api.get('/auth/list-users/')
  },*/
  getUser(id) {
    return api.get('/auth/update-user/' + id)
  },
  updateUser(id, payload) {
    return api.patch(`/auth/update-user/${id}`, payload)
  },
  getUserAuth() {
    return api.get('/auth/user/')
  },
  /* postUser(user) {
    return api.post('/auth/registration/', user)
  },*/
  /*async postUser(user) {
    const res = await api.post('/auth/registration/', user)
    console.log(res)
    return res
  },*/
  postUser(payload) {
    return api.post('/auth/registration/', payload)
  },
  /* deleteUser(id) {
    return api.put(`/auth/update-user/${id}/`)
  },
  deleteUser(id, payload) {
    return api.patch(`/auth/update-user/${id}/`, payload)
  },*/
}
