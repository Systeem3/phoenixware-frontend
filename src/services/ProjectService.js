import api from '@/services/api'

export default {
  getProjects() {
    return api.get('/projects/')
  },
  getProject(id) {
    return api.get('/projects/' + id)
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
}
