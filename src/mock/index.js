import Mock from 'mockjs'
import { getQueryVariable } from '../utils'
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
  console.log(reqData)
  if (reqData.username === '15208260885') {
    return { status: '1000', message: 'login success' }
  } else {
    return { status: '1001', message: 'username error' }
  }
}
Mock.mock(RegExp('/verify.*'), 'get', getVerifyCode)
Mock.mock('/login', 'post', login)
export default Mock
