import request from './base.js'
import constObj from '@/utils/constObj.js'

export const getVerifyCode = (url, data) => {
  return new Promise((resolve, reject) => {
    request.get(url, { params: data }).then(response => {
      if (response.data.status === constObj.REQUEST_SUCCESS) {
        resolve(response.data)
      } else {
        reject(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export const login = (url, data) => {
  return new Promise((resolve, reject) => {
    request.post(url, data).then(response => {
      if (response.data.status === constObj.REQUEST_SUCCESS) {
        resolve(response.data)
      } else {
        reject(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
