import request from '@/utils/request'

const apis = {
  login (username, password) {
    const data = {
      username,
      password
    }
    return request.post('loginNoValid', data)
  },
  logOut () {
    return request.get('')
  }
}

export default apis
