const hiragana = require('./hiragana.json')
const { getKana } = require('../utils')

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(getKana(hiragana, req.query.filter))
}
