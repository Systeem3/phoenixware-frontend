import api from '@/services/api'

export default {
  getMeetings(id) {
    return api.get(`/projects/${id}/listar_reuniones`)
  },
  getMeeting(id) {
    return api.get('/auth/update-meeting/' + id)
  },
  updateMeeting(id, payload) {
    return api.patch(`/api/auth/update-meeting/${id}`, payload)
  },
  deleteMeeting(id, payload) {
    return api.patch(`/api/auth/update-meeting/${id}/`, payload)
  },
  getMeetingAuth() {
    return api.get('/auth/meeting/')
  },
  postMeeting(meeting) {
    return api.post('/auth/registration/', meeting)
  },
}
