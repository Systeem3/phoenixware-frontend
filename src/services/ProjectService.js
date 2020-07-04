import api from '@/services/api'

export default {
  getProjects(params) {
    return api.get('/projects/',{
      params,
    })
  },
  getProject(id) {
    return api.get(`/projects/${id}/`)
  },
  postProject(project) {
    return api.post('/projects/', project)
  },
  updateProject(id, payload) {
    return api.patch(`projects/${id}/`, payload)
  },
  deleteProject(id, payload) {
    return api.patch(`/projects/${id}/`, payload)
  },
  getInfoProject(id){
    return api.get(`/info_proyecto/${id}/info_proyecto/`)
  }
}
