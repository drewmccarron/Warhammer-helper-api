const mongoose = require('mongoose')

const combatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  numAttacks: {
    type: Number,
    min: 1,
    max: 200
  },
  hit: {
    type: Number,
    min: 2,
    max: 6
  },
  wound: {
    type: Number,
    min: 2,
    max: 6
  },
  rend: {
    type: Number,
    min: 0,
    max: 6
  },
  damage: {
    type: Number,
    min: 1,
    max: 6
  },
  armorSave: {
    type: Number,
    min: 2,
    max: 6
  },
  fnp: {
    type: Number,
    min: 2,
    max: 7
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Combat', combatSchema)
