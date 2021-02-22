import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import '@/styles/index.scss'

  const firebaseConfig = {
    apiKey: "AIzaSyAul_TVejF5FEBFqri9u3kTttLtgI2242w",
    authDomain: "vue-firebase-app-c37f3.firebaseapp.com",
    projectId: "vue-firebase-app-c37f3",
    storageBucket: "vue-firebase-app-c37f3.appspot.com",
    messagingSenderId: "887963953006",
    appId: "1:887963953006:web:d3b6c03f19bdf3e7d7c37f"
  }

  firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
