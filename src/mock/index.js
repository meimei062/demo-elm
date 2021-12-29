import Mock from 'mockjs'
import { getQueryVariable } from '../utils'
// const { param2Obj, parsePostParam } = require('./utils')

import locationApi from './location.js'

const Random = Mock.Random

const getVerifyCode = config => {
  const phone = getQueryVariable('phone', config.url)
  if (phone === '15208260885') {
    return { status: 1000, message: Random.name() }
  }
  return { status: 1001, message: 'phone error' }
}
const login = config => {
  const reqData = JSON.parse(config.body)
  if (reqData.username === '15208260885') {
    return { status: 1000, message: 'login success' }
  } else {
    return { status: 1001, message: 'username error' }
  }
}

// Mock.mock(RegExp('/verify.*'), 'get', getVerifyCode)
// Mock.mock('/login', 'post', login)
// Mock.mock('/getHisCities', 'post', getHisCities)
// Mock.mock('/getHotCities', 'post', getHotCities)

// function XHR2ExpressReqWrap(respond) {
//   return function(options) {
//     let result = null
//     if (respond instanceof Function) {
//       const { body, type, url } = options
//       // https://expressjs.com/en/4x/api.html#req
//       result = respond({
//         method: type,
//         body: parsePostParam(body),
//         query: param2Obj(url)
//       })
//     } else {
//       result = respond
//     }
//     return Mock.mock(result)
//   }
// }

const mocks = [
  { url: '/verify', type: 'get', response: getVerifyCode },
  { url: '/login', type: 'post', response: login },
  ...locationApi
]

for (const i of mocks) {
  // Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
}

export default Mock
