import ProjectService from '@/services/ProjectService.js'
import * as types from '@/store/mutation-types'
import { buildSuccess, handleError } from '@/utils/utils.js'

const state = {
  projects: [],
  project: {
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_finalizacion: '',
    tipo: '',
    metodologia: '',
    alcance: '',
    costo: null,
    presupuesto: null,
    estado: '',
  },
  /*project2: {
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_finalizacion: '',
    tipo: '',
    metodologia: '',
    alcance: '',
    costo: null,
    presupuesto: null,
    estado: '',
  },*/
}

const mutations = {
  ADD_PROJECT(state, project) {
    state.projects.push(project)
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  },
  [types.FILL_PROJECT](state, data) {
    state.project.nombre = data.nombre
    state.project.tipo = data.tipo
    state.project.descripcion = data.descripcion
    state.project.fecha_inicio = data.fecha_inicio
    state.project.fecha_finalizacion = data.fecha_finalizacion
    state.project.metodologia = data.metodologia
    state.project.costo = data.costo
    state.project.presupuesto = data.presupuesto
  },
  [types.CHANGE_STATE](state) {
    state.project.is_active = false
  },
  [types.ADD_PROJECT_DATA](state, data) {
    switch (data.key) {
      case 'name':
        state.project.nombre = data.value
        break
      case 'type':
        state.project.tipo = data.value
        break
      case 'description':
        state.project.descripcion = data.value
        break
      case 'dateCreated':
        state.project.fecha_inicio = data.value
        break
      case 'dateFinished':
        state.project.fecha_finalizacion = data.value
        break
      case 'methodology':
        state.project.metodologia = data.value
        break
      case 'presupuesto':
        state.project.presupuesto = data.value
        break
      case 'costo':
        state.project.costo = data.value
        break
      case 'alcance':
        state.project.alcance = data.value
        break
      case 'state':
        state.project.estado = data.value
        break
      default:
        break
    }
  },
}

const actions = {
  createProject({ commit, dispatch }, project) {
    return ProjectService.postProject(project)
      .then(() => {
        commit('ADD_PROJECT', project)
        const notification = {
          //type: 'success',
          //message: 'Your project has been created!',
          success() {
            /* Vue.swal({
              type: 'success',
              title: 'Hello',
              text: 'Hello brave new world!',
            })*/
            this.$swal('Oops...', 'Something went wrong!', 'success')
          },
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch((error) => {
        const notification = {
          //  type: 'error',
          //message: 'There was a problem creating your project: ' + error.message,
          success() {
            /* Vue.swal({
              type: 'success',
              title: 'Hello',
              text: 'Hello brave new world!',
            })*/
            this.$swal('Oops...', 'Something went wrong!!!!', 'error')
          },
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  fetchProjects({ commit, dispatch }) {
    ProjectService.getProjects()
      .then((response) => {
        // commit('SET_projects_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_PROJECTS', response.data)
        //  console.log(this.projects)
      })
      .catch((error) => {
        console.log(this.projects)
        const notification = {
          type: 'error',
          message: 'There was a problem fetching projects: ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchProject({ commit, getters, dispatch }, id) {
    var project = getters.getProjectById(id)
    if (project) {
      commit('SET_PROJECT', project)
    } else {
      ProjectService.getProject(id)
        .then((response) => {
          commit('SET_PROJECT', response.data)
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching event: ' + error.message,
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  },
  saveProject({ commit }, payload) {
    return new Promise((resolve, reject) => {
      ProjectService.updateProject(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.FILL_PROJECT, response.data)
            //commit('projects/SHOW_LOADING')
            //  commit(types.SHOW_LOADING, true)
            buildSuccess(
              {
                msg: 'myProfile.PROFILE_SAVED_SUCCESSFULLY',
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },

  addProjectData({ commit }, data) {
    commit(types.ADD_PROJECT_DATA, data)
  },

  deleteProject({ commit }, payload) {
    return new Promise((resolve, reject) => {
      ProjectService.deleteProject(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.CHANGE_STATE, response.data)
            buildSuccess(
              {
                msg: 'myProfile.PROFILE_SAVED_SUCCESSFULLY',
              },
              commit,
              resolve
            )
            // alert('it works', commit, resolve)
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
          //alert('doesnt work', error, commit, reject)
        })
    })
  },
}
const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id === id)
  },
  projects: (state) => {
    return state.projects
  },
  project: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
