const _ = require('lodash')

const randomizeKana = (kana, filter) => {
  if (!filter) {
    return _.sampleSize(kana, kana.length)
  }

  const filters = filter.split(',')
  const filteredList = [
    ...kana.filter(({ id, romanji }) => filters.includes(id[0]) && romanji.length == 2),
    ...(filters.includes('vowels') ? kana.slice(0, 5) : []),
  ]
  return _.sampleSize(filteredList, filteredList.length)
}

const queryStringtoObject = (queryString) => {
  if (!queryString) {
    return {}
  }
  const qs = queryString.startsWith('?') ? queryString.slice(1) : queryString
  return qs.split('&').reduce((accum, curr) => {
    const [key, value] = curr.split('=')
    return key && value ? { ...accum, [key]: value } : accum
  }, {})
}

export { randomizeKana, queryStringtoObject }
