import api from '@/services/api'
export default {
  getMembers(id) {
    return api.get(`/projects/${id}/listar_miembros`)
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
  deleteMember(id){
    return api.delete(`miembro/${id}/delete/`)
  }

}
