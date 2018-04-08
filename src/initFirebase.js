import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from './store'

firebase.initializeApp({
  apiKey: 'AIzaSyCIMb_qyj_Z16_AbN7BQ9TmTuq0IcNbIcY',
  authDomain: 'miofilm-ec8e1.firebaseapp.com',
  databaseURL: 'https://miofilm-ec8e1.firebaseio.com',
  projectId: 'miofilm-ec8e1',
  storageBucket: '',
  messagingSenderId: '964629468268'
})

if (__DEV__) {
  window.firebase = firebase
}

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit('UPDATE_USER', user)
})
