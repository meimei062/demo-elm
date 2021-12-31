import request from './base.js'
import constObj from '@/utils/constObj.js'

function get(url, data) {
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

function post(url, data) {
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

export const getVerifyCode = (data) => {
  return get('/verify', data)
}

export const login = (data) => {
  return post('/login', data)
}

export const getHistoryCities = (data) => {
  return post('/getHisCities', data)
}

export const getHotCities = () => {
  return get('/getHotCities', {})
}

export const getAllCities = () => {
  return get('/getAllCities', {})
}
