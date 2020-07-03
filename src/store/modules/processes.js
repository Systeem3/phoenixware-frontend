import ProcessService from '@/services/ProcessService.js'
import * as types from '@/store/mutation-types'
import auth from '../../api/auth'
import { buildSuccess, handleError } from '@/utils/utils.js'

const state = {
  processes: [],
  process: {
    id: null,
    nombre:'' ,
    categoria: '',
    tipo: '',
    estado: '',
    proyecto: null,
  },
}

const mutations = {
  ADD_PROCESS(state, process) {
    state.processes.push(process)
  },
  SET_PROCESSS(state, processes) {
    //state.processes.push(processes)
    state.processes = processes
  },
  SET_PROCESS(state, process) {
    //state.processes.push(processes)
    state.process = process
  },
  UPDATE_PROCESS(state, payload) {
    state.processes = state.processes.map((process) => {
      if (process.id === payload.id) {
        return Object.assign({}, process, payload.data)
      }
      return process
    })
  },
  [types.FILL_PROCESS](state, data) {
    state.process.nombre = data.nombre
    state.process.descripcion = data.descripcion
    state.process.fecha = data.fecha
    state.process.hora = data.hora
    state.process.lugar = data.lugar
  },
  [types.CHANGE_STATE](state) {
    state.process.is_active = false
  },
  [types.ADD_PROCESS_DATA](state, data) {
    switch (data.key) {
      case 'name':
        state.process.nombre = data.value
        break
      case 'category':
        state.process.descripcion = data.value
        break
      case 'type':
        state.process.fecha = data.value
        break
      case 'project':
        state.process.hora = data.value
        break
      default:
        break
    }
  },
}

const actions = {
  createProcess({ commit, dispatch }, process) {
    console.log(process.projectId)
    return ProcessService.postProcess(process, process.projectId)
      .then(() => {
        commit('ADD_PROCESS', process)
        const notification = {
          //type: 'success',
          //message: 'Your process has been created!',
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
          //message: 'There was a problem creating your process: ' + error.message,
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
  fetchProcesses({ commit, dispatch }, id) {
    ProcessService.getProcesses(id)
      .then((response) => {
        commit('SET_PROCESSS', response.data)
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching processes: ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchProcess({ commit, getters, dispatch }, id) {
    const process = getters.getProcessById(id)
    if (process) {
      commit('SET_PROCESS', process)
    } else {
      ProcessService.getProcess(id)
        .then((response) => {
          console.log(response.data)
          commit('SET_PROCESS', response.data)
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching process: ' + error.message,
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  },

  saveProcess({ commit }, payload) {
    return new Promise((resolve, reject) => {
      ProcessService.updateProcess(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.FILL_PROCESS, response.data)
            buildSuccess(
              {
                msg: 'The process was updated',
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

  addProcessData({ commit }, data) {
    commit(types.ADD_PROCESS_DATA, data)
  },

  deleteProcess({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth
        .deleteProcess(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.CHANGE_STATE, response.data)
            buildSuccess(
              {
                msg: 'The process was deleted',
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
}
const getters = {
  getProcessById: (state) => (id) => {
    return state.processes.find((process) => process.id === id)
  },
  processes: (state) => {
    return state.processes
  },
  process: (state) => state.process,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
