import api from '@/api'
import {getUser, setUser, removeUser, getToken, setToken, removeToken} from '@/utils/auth'

const user = {
  state: {
    user: getUser(),
    token: getToken()
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 登录
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        api.login.login(username, userInfo.password).then(response => {
          if (response.status === '100000') {
            commit('SET_USER', response.message)
            commit('SET_TOKEN', response.message.sessonId)
            setUser(response.message)
            setToken(response.message.sessonId)
          }
          return resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        api.login.logOut(state.token).then(() => {
          commit('SET_USER', '')
          commit('SET_TOKEN', '')
          removeUser()
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER', '')
        commit('SET_TOKEN', '')
        removeUser()
        removeToken()
        resolve()
      })
    }
  }
}

export default user
