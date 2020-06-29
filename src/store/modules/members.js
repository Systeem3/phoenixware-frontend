import MemberService from '@/services/MemberService.js'
//import { buildSuccess, handleError } from '@/utils/utils.js'

const state = {
  members: [],
  membersTotal: 0,
  member: {
    rol: '',
    proyecto: {
      nombre: '',
    },
    usuario: {
      email: '',
      nombre: '',
    },
  },
}

const mutations = {
  UPDATE_MEMBER(state, payload) {
    state.nembers = state.members.map((member) => {
      if (member.id === payload.id) {
        return Object.assign({}, member, payload.data)
      }
      return member
    })
  },
  updateUser(state, payload) {
    state.member = payload
  },
}

const actions = {
  fetchMembers({ commit, dispatch }) {
    MemberService.getMembers()
      .then((response) => {
        // commit('SET_USERS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_MEMBERS', response.data)
        //  console.log(this.users)
      })
      .catch((error) => {
        console.log(this.members)
        const notification = {
          type: 'error',
          message: 'There was a problem fetching users: ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchMember({ commit, getters, dispatch }, id) {
    var member = getters.getMemberById(id)
    if (member) {
      commit('SET_MEMBER', member)
    } else {
      MemberService.getMember(id)
        .then((response) => {
          commit('SET_MEMBER', response.data)
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

  fetchUser2({ commit, dispatch }) {
    MemberService.getUserAuth()
      .then((response) => {
        commit('SET_MEMBER', response.data)
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching event: ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
}

const getters = {
  getMemberById: (state) => (id) => {
    return state.members.find((member) => member.id === id)
  },
  members: (state) => {
    return state.members
  },
  member: (state) => state.member,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
