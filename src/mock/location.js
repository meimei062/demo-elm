import cities from './cities.js'

const getHisCities = config => {
  return {
    status: 1000, data: [{
      id: 14,
      name: '成都',
      abbr: 'CD',
      area_code: '028',
      sort: 21,
      latitude: 30.5702,
      longitude: 104.064758,
      is_map: true,
      pinyin: 'chengdu'
    }]
  }
}
const getHotCities = config => {
  return { status: 1000, data: cities.hotCities }
  // return { status: 1000, data: [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 3, name: '广州' }, { id: 4, name: '深圳' }, { id: 5, name: '成都' }] }
}

const getAllCities = config => {
  return { status: 1000, data: cities.allCities }
}
export default [
  { url: '/getHisCities', type: 'post', response: getHisCities },
  { url: '/getHotCities', type: 'get', response: getHotCities },
  { url: '/getAllCities', type: 'get', response: getAllCities }
]

