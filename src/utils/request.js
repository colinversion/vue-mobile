import axios from 'axios'
import store from '@/store'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // if(store.getters.token) {}
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.request.use(
  response => {
    if (response.data && response.data.status === '110002') {
      store.dispatch('FedLogOut').then(() => {
        router.push({ path: '/login' })
      })
    }
    return response
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
