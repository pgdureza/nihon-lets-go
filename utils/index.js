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

export { randomizeKana }
