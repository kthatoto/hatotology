import firebase from '@/plugins/firebase'
const githubProvider = new firebase.auth.GithubAuthProvider()
export const strict = false

export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  getUser (state) {
    return state.user
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {
  login () {
    return new Promise((resolve, reject) => {
      githubProvider.addScope('repo')
      firebase.auth().signInWithRedirect(githubProvider)
        .then(result => {
          return resolve()
        })
        .catch(err => reject(err))
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          resolve()
        })
    })
  },
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  }
}
