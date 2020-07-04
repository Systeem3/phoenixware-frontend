import api from '@/services/api'

export default {
  getProcesses(id) {
    return api.get(`/projects/${id}/listar_procesos`)
  },
  getProcesses2(id, categoria) {
    return api.get(
      `/projects/${id}/listar_procesos_categoria/?categoria=${categoria}`
    )
  },
  getMeeting(id) {
    return api.get(`/reunion/${id}/`)
  },
  updateMeeting(id, payload) {
    return api.patch(`/reunion/${id}/`, payload)
  },
  deleteMeeting(id, payload) {
    return api.patch(`/api/auth/update-meeting/${id}/`, payload)
  },
  getMeetingAuth() {
    return api.get('/auth/meeting/')
  },
  postMeeting(meeting, id) {
    return api.post(`/projects/${id}/crear_reunion/`, meeting)
  },
}
