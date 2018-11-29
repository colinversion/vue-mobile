import request from '@/utils/request'
import { Md5 } from 'ts-md5/dist/md5'

const apis = {
  login (username, password) {
    const data = {
      username,
      password: Md5.hashStr(password)
    }
    return request.post('loginNoValid', data)
  },
  logOut () {
    return request.get('')
  }
}

export default apis
