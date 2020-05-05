const _ = require('lodash')

const getKana = (kana, filter) => {
  if (!filter) {
    return _.sampleSize(kana, kana.length)
  }

  const filters = filter.split(',')
  const filteredList = [
    ...kana.filter(({ char_id, romanji }) => filters.includes(char_id[0]) && romanji.length == 2),
    ...(filters.includes('vowels') ? kana.slice(0, 5) : []),
  ]
  return _.sampleSize(filteredList, filteredList.length)
}

export { getKana }
