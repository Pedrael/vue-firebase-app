import { createStore } from 'vuex'
import firebase from 'firebase/app'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    login({dispatch, commit}, {email, password}) {
      return new Promise((resolve, reject) => {
        console.log('submitting store...')
        firebase.auth().signInWithEmailAndPassword(email, password).then((r) => {
          resolve(r)
        }).catch((e) => {
          reject(e)
        })
      })
    }, 
    async logout({dispatch, commit}) {
      await firebase.auth().signOut()
    }
  },
  modules: {
  }
})
