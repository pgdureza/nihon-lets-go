const katakana = require('./data/katakana.json')
const hiragana = require('./data/hiragana.json')
const numbers = require('./data/numbers.json')
const adjectives = require('./data/vocabulary/adjectives.json')
const food = require('./data/vocabulary/food.json')
const greetings = require('./data/vocabulary/greetings.json')
const people = require('./data/vocabulary/people.json')
const verbs = require('./data/vocabulary/verbs.json')

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({
    katakana,
    hiragana,
    numbers,
    vocabulary: [...adjectives, ...food, ...greetings, ...people, ...verbs],
  })
}
