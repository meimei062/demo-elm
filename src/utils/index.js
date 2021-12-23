export const getQueryVariable = (name, url) => {
  if (name && url && url.indexOf('?') > 0) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = url.split('?')[1].match(reg)
    if (r != null) {
      return unescape(r[2])
    }
  }
  return ''
}

export const isEmptyStr = (str) => {
  return str === undefined || str === null || str.trim() === ''
}
