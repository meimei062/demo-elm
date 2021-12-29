const getHisCities = config => {
  return { status: 1000, data: [{ id: 5, name: '成都' }] }
}
const getHotCities = config => {
  return { status: 1000, data: [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 3, name: '广州' }, { id: 4, name: '深圳' }, { id: 5, name: '成都' }] }
}

export default [
  { url: '/getHisCities', type: 'post', response: getHisCities },
  { url: '/getHotCities', type: 'post', response: getHotCities }
]

