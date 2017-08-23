const mongoose = require('mongoose')

const mongoURI = 'mongodb://138.68.248.193:27017/test'
mongoose.connect(mongoURI)

const db = mongoose.connection

db.on('connected', () => {
  console.log('Mongodb Connection Open')
})
db.on('error', console.error.bind(console, 'Connection Error'))

module.exports = db
