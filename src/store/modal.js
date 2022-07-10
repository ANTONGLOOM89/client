const state = {
  modalUser: undefined
}

const getters = {
  getModalUser: (state) => state.modalUser
}

const mutations = {
  setModalUser: (state, payload) => { state.modalUser = payload },
  unsetModalUser: (state) => { state.modalUser = undefined }
}

const actions = {
  addModalUser({ commit }, payload) {
    console.log(payload)
    commit('setModalUser', payload)
  },
  unsetModalUser({ commit } ) {
    commit('unsetModalUser')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

