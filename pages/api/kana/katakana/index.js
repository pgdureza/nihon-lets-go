const katakana = require('./katakana.json')
const { getKana } = require('../utils')

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(getKana(katakana, req.query.filter))
}
