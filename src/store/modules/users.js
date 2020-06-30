import UserService from '@/services/UserService.js'
//import { buildSuccess, handleError } from '@/utils/utils.js'
import * as types from '@/store/mutation-types'
import auth from '../../api/auth'
import { buildSuccess, handleError } from '@/utils/utils.js'

//import { SHOW_LOADING, SUCCESS, ERROR } from '../mutation-types'

const state = {
  users: [],
  usersTotal: 0,
  user: {
    //id: '',
    email: '',
    empleado: {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
    },
    tipo_usuario: '',
  },
}

const mutations = {
  ADD_USER(state, user) {
    state.users.push(user)
  },
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  },
  [types.FILL_USER](state, data) {
    state.user.email = data.email
    state.user.empleado.nombre = data.empleado.nombre
    state.user.empleado.apellido = data.empleado.apellido
    state.user.empleado.direccion = data.empleado.direccion
    state.user.empleado.telefono = data.empleado.telefono
    state.user.tipo_usuario = data.tipo_usuario
  },
  [types.CHANGE_STATE](state) {
    state.user.is_active = false
  },
  [types.ADD_USER_DATA](state, data) {
    switch (data.key) {
      case 'email':
        state.user.email = data.value
        break
      case 'name':
        state.user.empleado.nombre = data.value
        break
      case 'lastName':
        state.user.empleado.apellido = data.value
        break
      case 'address':
        state.user.empleado.direccion = data.value
        break
      case 'phone':
        state.user.empleado.telefono = data.value
        break
      case 'type':
        state.user.tipo_usuario = data.value
        break
      default:
        break
    }
  },
}

const actions = {
  /*createUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      UserService.postUser(payload)
        .then((response) => {
          if (response.status === 201) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY',
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
  },*/

  /*createUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      UserService.postUser(user)
        .then((response) => {
          console.log(response)
          if (response.status === 201) {
            commit('ADD_USER', user)
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY',
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
  },*/
  createUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(types.SHOW_LOADING, true, { root: true })
      UserService.postUser(payload)
        .then((response) => {
          if (response.status === 201) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY',
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
  fetchUsers({ commit, dispatch }) {
    UserService.getUsers()
      .then((response) => {
        // commit('SET_USERS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_USERS', response.data)
        //  console.log(this.users)
      })
      .catch((error) => {
        console.log(this.users)
        const notification = {
          type: 'error',
          message: 'There was a problem fetching users: ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchUser({ commit, getters, dispatch }, id) {
    var user = getters.getUserById(id)
    if (user) {
      commit('SET_USER', user)
    } else {
      UserService.getUser(id)
        .then((response) => {
          commit('SET_USER', response.data)
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
  saveUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth
        .updateUser(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.FILL_USER, response.data)
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

  addUserData({ commit }, data) {
    commit(types.ADD_USER_DATA, data)
  },
  deleteUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth
        .deleteUser(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.CHANGE_STATE, response.data)
            buildSuccess(
              {
                msg: 'common.DELETED_SUCCESSFULLY',
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
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id)
  },
  users: (state) => {
    return state.users
  },
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
