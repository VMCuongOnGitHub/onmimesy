import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

/* eslint-disable */
Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:5000'

const stores = new Vuex.Store({
  state:{
    token: localStorage.getItem("usertoken")
  },
  getters:{
    loggedIn(state){
      return state.token !== null
    }
  },
  mutations:{
    loginAndGetToken(state, token){
      state.token = token
    },
    deleteToken(state){
      state.token = null
    }
  },
  actions:{
    register(context, data){
      return new Promise((resolve, reject) => {
        axios.post('users/register', {
          account_name: data.account_name,
          email: data.email,
          password: data.password
        }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginAndGetToken(context, credential){
      return new Promise((resolve, reject) => {
        axios.post('users/login', {
          email: credential.email,
          password: credential.password
        }).then(response => {
          console.log("token");
          const token = response.data
          console.log(token);
          localStorage.setItem('usertoken', token)
          context.commit('loginAndGetToken', token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    deleteToken(context){
      return new Promise((resolve, reject) => {
        localStorage.removeItem('usertoken')
        context.commit('deleteToken')
        resolve(response)
      }).catch(error => {
        localStorage.removeItem('usertoken')
        context.commit('deleteToken')
        reject(error)
      })
    }


  }
})


export default stores

